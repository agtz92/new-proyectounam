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
  const first = sortedBlogs.slice(0, 1)
  const nextTwo = sortedBlogs.slice(1, 3)
  const nextFour = sortedBlogs.slice(3, 7)
  const daRest = sortedBlogs.slice(7, 15)
  const TextCard = dynamic(() => import("@/components/TextCard"))
  const LargeCard = dynamic(() => import("@/components/LargeCard"))
  const deals = sortedBlogs
    .filter((blog) => blog.categoria === "Preguntas de Examen")
    .slice(0, 8)

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
        <meta
          name="twitter:image"
          content={`${sitedomain}/assets/logo.png`}
        />
      </Head>

      {/* ===== Hero Section ===== */}
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

      {/* ===== Section 01: Posts Recientes — Bento Layout ===== */}
      <Box className="margins5">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>Posts Recientes</h2>
          <div className="section-line" />
        </div>

        <Grid container spacing={2}>
          {/* Row 1: Full-width featured post */}
          {first.map((blog) => (
            <Grid key={blog.slug} item xs={12}>
              <Link href={`/${blog.slug}`}>
                <CoverCard post={blog} h1="1.6rem" />
              </Link>
            </Grid>
          ))}

          {/* Row 2 left: Two secondary covers */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {nextTwo.map((blog) => (
                <Grid key={blog.slug} item xs={12} sm={6}>
                  <Link href={`/${blog.slug}`}>
                    <CoverCard post={blog} secondary />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Row 2 right: Four stacked text cards */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={1}>
              {nextFour.map((blog) => (
                <Grid key={blog.slug} item xs={12}>
                  <Link href={`/${blog.slug}`}>
                    <TextCard post={blog} height="auto" />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* ===== Section 02: Preguntas de Examen — Featured + Scroll ===== */}
        <Box sx={{ mt: 8 }}>
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Preguntas de Examen</h2>
            <div className="section-line" />
          </div>
        </Box>

        {deals.length > 0 && (
          <Grid container spacing={2} alignItems="stretch">
            {/* Left: Featured question post */}
            <Grid item xs={12} md={4}>
              <Link href={`/${deals[0].slug}`}>
                <CoverCard post={deals[0]} secondary />
              </Link>
            </Grid>

            {/* Right: Horizontal scrolling strip */}
            <Grid item xs={12} md={8}>
              <Box className="scroll-strip">
                {deals.slice(1).map((blog) => (
                  <Box key={blog.slug} className="scroll-strip-item">
                    <Link href={`/${blog.slug}`}>
                      <TextCard post={blog} height="200px" />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        )}

        <Box display="flex" justifyContent="center" sx={{ mt: 5, mb: 5 }}>
          <Link
            href="/categorias/preguntas-de-examen"
            className="cta-button"
          >
            Ver todas las Preguntas de Examen
            <span style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </Box>

        {/* ===== Section 03: Otros Posts — Zigzag Magazine ===== */}
        <Box sx={{ mt: 4 }}>
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Otros Posts</h2>
            <div className="section-line" />
          </div>
        </Box>

        <Grid container spacing={2}>
          {Array.from({ length: 4 }, (_, rowIndex) => {
            const leftPost = daRest[rowIndex * 2]
            const rightPost = daRest[rowIndex * 2 + 1]
            const isEven = rowIndex % 2 === 0

            if (!leftPost) return null

            return (
              <React.Fragment key={rowIndex}>
                <Grid item xs={12} md={isEven ? 8 : 4}>
                  <Link href={`/${leftPost.slug}`}>
                    {isEven ? (
                      <LargeCard post={leftPost} />
                    ) : (
                      <TextCard post={leftPost} height="200px" />
                    )}
                  </Link>
                </Grid>
                {rightPost && (
                  <Grid item xs={12} md={isEven ? 4 : 8}>
                    <Link href={`/${rightPost.slug}`}>
                      {isEven ? (
                        <TextCard post={rightPost} height="200px" />
                      ) : (
                        <LargeCard post={rightPost} />
                      )}
                    </Link>
                  </Grid>
                )}
              </React.Fragment>
            )
          })}
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
