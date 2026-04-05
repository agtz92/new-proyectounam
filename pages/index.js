import React from "react"
import fs from "fs"
import dynamic from "next/dynamic"
import matter from "gray-matter"
import Link from "next/link"
import Head from "next/head"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { sitename, sitedomain, motto } from "../components/siteData"
import CoverCard from "@/components/CoverCard"

const categories = [
  { label: "Biologia", href: "/categorias/biologia" },
  { label: "Contabilidad", href: "/categorias/contabilidad" },
  { label: "Derecho", href: "/categorias/derecho" },
  { label: "Economia", href: "/categorias/economia" },
  { label: "Espanol", href: "/categorias/espanol" },
  { label: "Geografia", href: "/categorias/geografia" },
  { label: "Historia de Mexico", href: "/categorias/historia-de-mexico" },
  { label: "Historia Universal", href: "/categorias/historia-universal" },
  { label: "Preguntas de Examen", href: "/categorias/preguntas-de-examen" },
  { label: "Quimica", href: "/categorias/quimica" },
]

export default function Home({ blogs }) {
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date))
  const featured = sortedBlogs.slice(0, 1)
  const recent = sortedBlogs.slice(1, 7)
  const LargeCard = dynamic(() => import("@/components/LargeCard"))
  const deals = sortedBlogs
    .filter((blog) => blog.categoria === "Preguntas de Examen")
    .slice(0, 6)
  const otherPosts = sortedBlogs.slice(7, 13)

  return (
    <Box>
      <Head>
        <title>{sitename + " | " + motto}</title>
        <meta
          name="description"
          content={`${sitename} - ${motto}. Encuentra bancos de preguntas, simulacros y guias de estudio para tu examen de admision.`}
        />
        <link rel="canonical" href={sitedomain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${sitename} | ${motto}`} />
        <meta
          property="og:description"
          content={`${sitename} - ${motto}. Encuentra bancos de preguntas, simulacros y guias de estudio para tu examen de admision.`}
        />
        <meta property="og:url" content={sitedomain} />
        <meta property="og:site_name" content={sitename} />
        <meta property="og:image" content={`${sitedomain}/assets/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${sitename} | ${motto}`} />
        <meta
          name="twitter:description"
          content={`${sitename} - ${motto}. Encuentra bancos de preguntas, simulacros y guias de estudio para tu examen de admision.`}
        />
        <meta name="twitter:image" content={`${sitedomain}/assets/logo.png`} />
      </Head>

      {/* ===== Hero ===== */}
      <div className="hero-section">
        <h1
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            padding: 0,
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          {sitename} - {motto}
        </h1>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Bancos de preguntas actualizados 2026
        </div>
        <div className="hero-title">{sitename}</div>
        <p className="hero-subtitle">{motto}</p>
      </div>

      {/* ===== Category Pills ===== */}
      <div className="category-pills">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="category-pill">
            {cat.label}
          </Link>
        ))}
      </div>

      <Box className="margins5">
        {/* ===== Section 01: Posts Recientes ===== */}
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>Posts Recientes</h2>
          <div className="section-line" />
        </div>

        {/* Featured post — full width */}
        {featured.map((blog) => (
          <Box key={blog.slug} sx={{ mb: 3 }}>
            <Link href={`/${blog.slug}`}>
              <CoverCard post={blog} h1="1.5rem" />
            </Link>
          </Box>
        ))}

        {/* Recent grid — 3 columns */}
        <Grid container spacing={2}>
          {recent.map((blog) => (
            <Grid key={blog.slug} item xs={12} sm={6} md={4}>
              <Link href={`/${blog.slug}`}>
                <LargeCard post={blog} />
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* ===== Section 02: Preguntas de Examen ===== */}
        <Box sx={{ mt: 8 }}>
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Preguntas de Examen</h2>
            <div className="section-line" />
          </div>
        </Box>

        <Grid container spacing={2}>
          {deals.map((blog) => (
            <Grid key={blog.slug} item xs={12} sm={6} md={4}>
              <Link href={`/${blog.slug}`}>
                <LargeCard post={blog} />
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" sx={{ mt: 5, mb: 5 }}>
          <Link
            href="/categorias/preguntas-de-examen"
            className="cta-button"
          >
            Ver todas las Preguntas de Examen
            <span style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </Box>

        {/* ===== Section 03: Otros Posts ===== */}
        <div className="section-header">
          <span className="section-number">03</span>
          <h2>Otros Posts</h2>
          <div className="section-line" />
        </div>

        <Grid container spacing={2}>
          {otherPosts.map((blog) => (
            <Grid key={blog.slug} item xs={12} sm={6} md={4}>
              <Link href={`/${blog.slug}`}>
                <LargeCard post={blog} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export async function getStaticProps() {
  try {
    const filesInBlogs = fs
      .readdirSync("./blog")
      .filter((filename) => !filename.startsWith(".DS_Store"))

    const blogs = filesInBlogs.map((filename) => {
      const file = fs.readFileSync(`./blog/${filename}`, "utf8")
      const matterData = matter(file)

      const isoDate = matterData.data.date
        ? new Date(matterData.data.date).toISOString()
        : ""
      const formattedDate = matterData.data.date
        ? new Date(matterData.data.date).toLocaleDateString("en-US")
        : ""
      const shortDescription = matterData.data["short-description"] || ""

      return {
        ...matterData.data,
        slug: filename.slice(0, filename.indexOf(".")),
        date: isoDate,
        formattedDate: formattedDate,
        shortDescription: shortDescription,
      }
    })

    return { props: { blogs } }
  } catch (error) {
    console.error("Error reading files or parsing frontmatter:", error)
    return { notFound: true }
  }
}
