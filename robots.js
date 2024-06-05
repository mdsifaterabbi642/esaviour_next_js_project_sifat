export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: "https://esaviour-next.onrender.com/sitemap.cjs",
  };
}
