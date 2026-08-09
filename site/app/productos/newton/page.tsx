import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProduct } from "@/content/products";

const product = getProduct("newton")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

export default function NewtonPage() {
  return <ProductDetail product={product} />;
}
