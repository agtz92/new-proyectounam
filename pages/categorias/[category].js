import React, { useState, useEffect } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Box, Grid, Pagination, Stack } from "@mui/material"
import Link from "next/link"
import Head from "next/head"
import LargeCard from "@/components/LargeCard"
import { sitename, sitedomain } from "@/components/siteData"
import Backlinks from "@/components/Backlinks"

function removeSpecialCharactersAndLowerCase(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}

function CategoryPage({ matchingFiles, category }) {
  const sortedBlogs = matchingFiles?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const blogsToDisplay = sortedBlogs?.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  const title = sitename + " | " + category
  const description = `Encuentra articulos y bancos de preguntas sobre ${category} en ${sitename}. Preparate para tu examen de admision.`
  const canonicalUrl = `${sitedomain}/categorias/${removeSpecialCharactersAndLowerCase(category)}`

  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={sitename} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      {/* Mini Hero */}
      <div className="mini-hero">
        <h1 className="mini-hero-title">{category}</h1>
        <div className="mini-hero-count">
          {sortedBlogs.length} {sortedBlogs.length === 1 ? "articulo" : "articulos"}
        </div>
      </div>

      {/* Posts Grid — Zigzag Layout */}
      <Box className="margins5">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>Posts en {category}</h2>
          <div className="section-line" />
        </div>

        <Grid container spacing={2}>
          {blogsToDisplay?.map((file) => (
            <Grid key={file.slug} item xs={12} sm={6} md={4}>
              <Link href={`/${file.slug}`}>
                <LargeCard post={file} />
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Stack
          spacing={2}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          sx={{ mt: 5 }}
        >
          <Pagination
            count={Math.ceil(sortedBlogs.length / itemsPerPage)}
            size="large"
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
          />
        </Stack>

        <div className="parpost">
          <Backlinks categoria={category} />
          <p>
            antesdelexamen es una pagina de internet gratuita con bancos de
            preguntas de examen para UNAM, IPN y todas las demas universidades
            mas importantes de Mexico. Tenemos bancos de preguntas por materia
            y por area. Bancos de preguntas Area 1, Bancos de preguntas Area
            2, Bancos de preguntas area 3, Bancos de preguntas Area 4.
            Simulacros UNAM, IPN, UAM, UAEM. Guia UNAM 2026, Guia IPN 2026.
            <br />
            Agreganos en facebook buscando @antesdelexamen
          </p>
        </div>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ params }) {
  const { category } = params
  try {
    const categorySlug = category.toLowerCase()
    const files = fs.readdirSync("./blog")
    const matchingFiles = []

    for (const file of files) {
      const fileContent = matter(
        fs.readFileSync(path.join("./blog", file), "utf8")
      )
      const frontmatter = fileContent.data
      const shortDescription = frontmatter["short-description"] || ""

      if (
        frontmatter.categoria &&
        removeSpecialCharactersAndLowerCase(frontmatter.categoria) ===
          categorySlug
      ) {
        const slug = frontmatter.slug || file.slice(0, file.indexOf("."))
        matchingFiles.push({
          slug,
          category: frontmatter.categoria,
          categoria: frontmatter.categoria,
          title: frontmatter.title,
          date: frontmatter.date.toISOString(),
          featuredimage: frontmatter.featuredimage,
          markdown: fileContent.content,
          shortDescription,
        })
      }
    }

    return {
      props: { matchingFiles, category: category },
    }
  } catch (error) {
    console.error("Error reading files or parsing frontmatter:", error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const files = fs.readdirSync("./categorias")
  const categorias = new Set()

  for (const file of files) {
    if (!file.startsWith(".")) {
      const fileContent = matter(
        fs.readFileSync(path.join("./categorias", file), "utf8")
      )
      const frontmatter = fileContent.data

      if (frontmatter.categoria) {
        categorias.add(
          removeSpecialCharactersAndLowerCase(frontmatter.categoria)
        )
      }
    }
  }

  const paths = Array.from(categorias).map((category) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export default CategoryPage
