// POST /api/upload — admin uploads an image file, returns its public URL.
// Body: multipart/form-data with a "file" field.
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { getSupabaseAdmin, PRODUCT_BUCKET } from "@/lib/supabase";

export async function POST(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Image uploads are not configured. Add Supabase keys to .env.local." },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
  }
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({ error: "Image must be under 5MB." }, { status: 400 });
  }

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  // Unique filename — timestamp + random, no Date import needed at edge.
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const { error } = await supabase.storage
    .from(PRODUCT_BUCKET)
    .upload(filename, arrayBuffer, { contentType: file.type, upsert: false });

  if (error) {
    return NextResponse.json(
      { error: `Upload failed: ${error.message}` },
      { status: 500 }
    );
  }

  const { data } = supabase.storage.from(PRODUCT_BUCKET).getPublicUrl(filename);
  return NextResponse.json({ url: data.publicUrl });
}
