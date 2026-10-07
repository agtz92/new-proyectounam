import fs from "fs"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import ReactMarkdown from "react-markdown"
import matter from "gray-matter"
import Image from "next/image"
import rehypeRaw from "rehype-raw"
import Link from "next/link"
import SEOBlog from "@/components/SEOBlog"
import Backlinks from "@/components/Backlinks"
import { categorySlug } from "@/components/siteData"

function renderMarkdown(markdown) {
  if (!markdown) return ""
  return renderToStaticMarkup(
    createElement(ReactMarkdown, { rehypePlugins: [rehypeRaw] }, markdown)
  )
}

// Same slug rule the tag pages use for their URLs
function tagSlug(tag) {
  return tag.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()
}

export default function Blog({ frontmatter }) {
  return (
    <>
      <SEOBlog post={frontmatter} />
      <article className="article">
        <header className="article-head">
          {frontmatter.categoria && (
            <Link
              className="label"
              href={`/categorias/${categorySlug(frontmatter.categoria)}`}
            >
              {frontmatter.categoria}
            </Link>
          )}
          <h1>{frontmatter.title}</h1>
          {frontmatter.displayDate && (
            <div className="article-meta">
              <time dateTime={frontmatter.date}>
                Actualizado el {frontmatter.displayDate}
              </time>
            </div>
          )}
        </header>

        {frontmatter.featuredimage && (
          <div className="article-cover">
            <Image
              src={frontmatter.featuredimage}
              alt={frontmatter.title}
              fill
              sizes="(max-width: 760px) 100vw, 700px"
              priority
            />
          </div>
        )}

        <div className="prose">
          {frontmatter.leadHtml && (
            <div
              className="lead"
              dangerouslySetInnerHTML={{ __html: frontmatter.leadHtml }}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: frontmatter.html }} />
        </div>

        {frontmatter.tags?.length > 0 && (
          <section className="article-tags">
            <h2>Temas</h2>
            <ul className="tag-list">
              {frontmatter.tags.filter(Boolean).map((tag) => (
                <li key={tag}>
                  <Link href={`/tags/${tagSlug(tag)}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside className="aside-box">
          <Backlinks categoria={frontmatter.categoria} />
          <p>
            antesdelexamen es una página de internet gratuita con bancos de
            preguntas de examen para UNAM, IPN y todas las demás universidades
            más importantes de México. Tenemos bancos de preguntas por materia
            y por area. Bancos de preguntas Area 1, Bancos de preguntas Area
            2, Bancos de preguntas area 3, Bancos de preguntas Area 4.
            Simulacros UNAM, IPN, UAM, UAEM. Guia UNAM 2026, Guia IPN 2026.{" "}
            <br></br>
            Agréganos en facebook buscando @antesdelexamen
          </p>
        </aside>
      </article>
      <div id="adPlaceholder" className="desktop-only" />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const fileContent = matter(fs.readFileSync(`./blog/${slug}.md`, "utf8"))
    const frontmatter = fileContent.data

    const parsedDate = frontmatter.date ? new Date(frontmatter.date) : null
    const date = parsedDate && !isNaN(parsedDate) ? parsedDate : null
    const shortDescription = frontmatter["short-description"] || ""

    // Render markdown at build time so the markdown parser never ships to the browser
    const { mk1, mk2, mk3, mk4, mk5, ...meta } = frontmatter
    const html = [mk1, mk2, mk3, mk4, mk5]
      .filter(Boolean)
      .map(renderMarkdown)
      .join("\n")

    return {
      props: {
        frontmatter: {
          ...meta,
          slug,
          date: date ? date.toISOString() : "",
          displayDate: date
            ? date.toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })
            : "",
          shortDescription,
          leadHtml: renderMarkdown(shortDescription),
          html,
        },
      },
    }
  } catch (error) {
    console.error("Error reading file or parsing frontmatter:", error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./blog")

  const paths = filesInProjects
    .filter((file) => !file.startsWith(".")) // Filter out hidden files
    .map((file) => {
      const filename = file.slice(0, file.indexOf("."))
      return { params: { slug: filename } }
    })

  return {
    paths,
    fallback: "blocking", // This shows a 404 page if the page is not found
  }
}
