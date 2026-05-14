import fs from "fs"
import path from "path"
import matter from "gray-matter"

const sitedomain = "https://www.antesdelexamen.com"

function removeSpecialCharactersAndLowerCase(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}

export default function handler(req, res) {
  const blogDir = path.join(process.cwd(), "blog")
  const categoryDir = path.join(process.cwd(), "categorias")

  const blogFiles = fs.readdirSync(blogDir).filter((f) => !f.startsWith("."))
  const categories = new Set()
  const tags = new Set()

  const blogEntries = blogFiles.map((file) => {
    const content = matter(fs.readFileSync(path.join(blogDir, file), "utf8"))
    const slug = file.replace(/\.md$/, "")
    const date = content.data.date
      ? new Date(content.data.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0]

    if (content.data.categoria) {
      categories.add(removeSpecialCharactersAndLowerCase(content.data.categoria))
    }
    if (content.data.tags) {
      content.data.tags.forEach((tag) => {
        if (tag) tags.add(tag.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase())
      })
    }

    return `  <url>
    <loc>${sitedomain}/${encodeURI(slug)}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  const categoryEntries = Array.from(categories).map(
    (cat) => `  <url>
    <loc>${sitedomain}/categorias/${cat}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
  )

  const tagEntries = Array.from(tags)
    .filter((t) => t.length > 0)
    .map(
      (tag) => `  <url>
    <loc>${sitedomain}/tags/${tag}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`
    )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${sitedomain}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${blogEntries.join("\n")}
${categoryEntries.join("\n")}
${tagEntries.join("\n")}
</urlset>`

  res.setHeader("Content-Type", "application/xml")
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
  res.status(200).send(sitemap)
}
