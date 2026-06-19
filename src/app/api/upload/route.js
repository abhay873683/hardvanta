// POST /api/upload — admin uploads an image file, returns its public URL.
// Body: multipart/form-data with a "file" field.
//
// Uses Supabase Storage when configured (best for production / shared use).
// Falls back to saving into /public/uploads locally so the upload button works
// out of the box in development without any Supabase setup.
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { isAdmin } from "@/lib/admin";
import { getSupabaseAdmin, PRODUCT_BUCKET } from "@/lib/supabase";

export async function POST(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
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
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const arrayBuffer = await file.arrayBuffer();

  const supabase = getSupabaseAdmin();

  // Preferred path: Supabase Storage (works in production & across machines).
  if (supabase) {
    const { error } = await supabase.storage
      .from(PRODUCT_BUCKET)
      .upload(filename, arrayBuffer, { contentType: file.type, upsert: false });
    if (error) {
      return NextResponse.json({ error: `Upload failed: ${error.message}` }, { status: 500 });
    }
    const { data } = supabase.storage.from(PRODUCT_BUCKET).getPublicUrl(filename);
    return NextResponse.json({ url: data.publicUrl });
  }

  // Fallback: save to /public/uploads so the local dev app works without setup.
  try {
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, filename), Buffer.from(arrayBuffer));
    return NextResponse.json({ url: `/uploads/${filename}` });
  } catch (err) {
    return NextResponse.json(
      { error: `Could not save image: ${err?.message || "unknown error"}` },
      { status: 500 }
    );
  }
}
