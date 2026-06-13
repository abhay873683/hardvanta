// Server-side data access — used by Server Components to read directly from the DB.
// (Client components should call the /api routes instead.)
import { prisma } from "@/lib/prisma";

export function getFeaturedProducts() {
  return prisma.product.findMany({
    where: { featured: true },
    orderBy: { createdAt: "desc" },
  });
}

export function getDeals(limit = 4) {
  return prisma.product.findMany({
    where: { salePrice: { not: null } },
    take: limit,
    orderBy: { createdAt: "desc" },
  });
}

export function getAllProducts() {
  return prisma.product.findMany({ orderBy: { createdAt: "desc" } });
}

export function searchProducts(q) {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { brand: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
  });
}

export function getProductsByCategory(category) {
  return prisma.product.findMany({
    where: { category },
    orderBy: { createdAt: "desc" },
  });
}

export function getCategories() {
  return prisma.category.findMany();
}

export function getProductById(idOrSlug) {
  return prisma.product.findFirst({
    where: { OR: [{ id: idOrSlug }, { slug: idOrSlug }] },
  });
}

export function getRelatedProducts(category, excludeId, limit = 4) {
  return prisma.product.findMany({
    where: { category, NOT: { id: excludeId } },
    take: limit,
    orderBy: { createdAt: "desc" },
  });
}
