import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/ProductDetail";
import { getProduct } from "@/content/products";

const product = getProduct("pahlass-hales")!;

export const metadata: Metadata = {
  title: product.name,
  description: product.description,
};

export default function PahlassHalesPage() {
  return <ProductDetail product={product} />;
}
