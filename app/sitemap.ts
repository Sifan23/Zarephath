import { MetadataRoute } from "next";
import { allProducts } from "@/data/products"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zarephath-shop.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const productCheckoutPages: MetadataRoute.Sitemap = allProducts.map(
    (product) => ({
      url: `${baseUrl}/checkout/${encodeURIComponent(product.name)}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticPages, ...productCheckoutPages];
}
