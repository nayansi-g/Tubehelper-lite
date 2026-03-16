import type { MetadataRoute } from "next";

const siteUrl = "https://www.tubehelperlite.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified },
    { url: `${siteUrl}/about`, lastModified },
    { url: `${siteUrl}/services`, lastModified },
    { url: `${siteUrl}/privacy_policy`, lastModified },
    { url: `${siteUrl}/terms_of_use`, lastModified },
  ];
}
