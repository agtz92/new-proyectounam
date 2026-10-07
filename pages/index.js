import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import Head from "next/head"
import { sitename, sitedomain, motto, subjects } from "../components/siteData"
import PostCard from "@/components/PostCard"

const description = `${sitename} - ${motto}. Encuentra bancos de preguntas, simulacros y guias de estudio para tu examen de admision.`

export default function Home({ featured, recent, deals, otherPosts }) {
  return (
    <>
      <Head>
        <title>{sitename + " | " + motto}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={sitedomain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${sitename} | ${motto}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={sitedomain} />
        <meta property="og:site_name" content={sitename} />
        <meta property="og:image" content={`${sitedomain}/assets/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${sitename} | ${motto}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${sitedomain}/assets/logo.png`} />
      </Head>

      <div className="wrap">
        <section className="hero">
          <span className="eyebrow">Guías y bancos de preguntas 2026</span>
          <h1>
            Prepárate para tu examen de admisión <mark>gratis</mark>
          </h1>
          <p>
            {sitename}: bancos de preguntas y resúmenes por materia para UNAM,
            IPN, UAM y UAEM.
          </p>
        </section>

        <h2 className="sr-only">Materias</h2>
        <ul className="subjects">
          {subjects.map((s) => (
            <li key={s.href}>
              <Link prefetch={false} href={s.href}>
                <span aria-hidden="true">{s.icon}</span>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <section className="section">
          <div className="section-head">
            <h2>Lo más reciente</h2>
          </div>
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} featured priority />
          ))}
          <div className="grid">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Preguntas de examen</h2>
            <Link prefetch={false} href="/categorias/preguntas-de-examen">Ver todas →</Link>
          </div>
          <div className="grid">
            {deals.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Más artículos</h2>
          </div>
          <div className="grid">
            {otherPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const filesInBlogs = fs
      .readdirSync("./blog")
      .filter((filename) => !filename.startsWith(".DS_Store"))

    const blogs = filesInBlogs
      .map((filename) => {
        const file = fs.readFileSync(`./blog/${filename}`, "utf8")
        const matterData = matter(file)

        const isoDate = matterData.data.date
          ? new Date(matterData.data.date).toISOString()
          : ""
        // Cards only show an excerpt; don't ship the full text in page props
        const shortDescription = (
          matterData.data["short-description"] || ""
        ).slice(0, 260)

        return {
          title: matterData.data.title || "",
          categoria: matterData.data.categoria || "",
          featuredimage: matterData.data.featuredimage || "",
          slug: filename.slice(0, filename.indexOf(".")),
          date: isoDate,
          shortDescription,
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    const featured = blogs.slice(0, 1)
    const recent = blogs.slice(1, 7)
    const deals = blogs
      .filter((blog) => blog.categoria === "Preguntas de Examen")
      .slice(0, 6)
    const otherPosts = blogs.slice(7, 13)

    return { props: { featured, recent, deals, otherPosts } }
  } catch (error) {
    console.error("Error reading files or parsing frontmatter:", error)
    return { notFound: true }
  }
}
