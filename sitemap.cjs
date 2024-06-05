const currentDate = new Date();
const formattedDate = currentDate.toISOString();

const sitemapContent = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://esaviour-next.onrender.com</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
    <url>
        <loc>https://esaviour-next.onrender.com/service</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
    <url>
        <loc>https://esaviour-next.onrender.com/portfolio</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
    <url>
        <loc>https://esaviour-next.onrender.com/about</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
    <url>
        <loc>https://esaviour-next.onrender.com/blog</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
    <url>
        <loc>https://esaviour-next.onrender.com/contact</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>
</urlset>
`;

// Export the sitemap content
module.exports = sitemapContent;
