import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/private/"], // adjust if you have real private routes
    },
    sitemap: "https://zarephath.com/sitemap.xml",
  };
}
