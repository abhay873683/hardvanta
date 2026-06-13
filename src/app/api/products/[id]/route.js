// GET /api/products/[id] — single product by id or slug.
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const { id } = params;
  const product = await prisma.product.findFirst({
    where: { OR: [{ id }, { slug: id }] },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
  return NextResponse.json({ product });
}
