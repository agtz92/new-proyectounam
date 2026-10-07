import { useState, useEffect } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Head from "next/head"
import PostCard from "@/components/PostCard"
import Pagination from "@/components/Pagination"
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
  const sortedBlogs = matchingFiles || []

  const itemsPerPage = 9
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const blogsToDisplay = sortedBlogs.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  // URL param is a slug ("historia-de-mexico"); show the real name when we have it
  const categoryName = sortedBlogs[0]?.categoria || category
  const title = sitename + " | " + categoryName
  const description = `Encuentra articulos y bancos de preguntas sobre ${categoryName} en ${sitename}. Preparate para tu examen de admision.`
  const canonicalUrl = `${sitedomain}/categorias/${removeSpecialCharactersAndLowerCase(category)}`

  return (
    <>
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

      <div className="wrap">
        <header className="page-head">
          <div className="crumbs">
            <Link href="/">Inicio</Link> / Materia
          </div>
          <h1>{categoryName}</h1>
          <p>
            {sortedBlogs.length}{" "}
            {sortedBlogs.length === 1 ? "artículo" : "artículos"}
          </p>
        </header>

        <div className="grid">
          {blogsToDisplay.map((file) => (
            <PostCard key={file.slug} post={file} headingLevel={2} />
          ))}
        </div>

        <Pagination
          count={Math.ceil(sortedBlogs.length / itemsPerPage)}
          page={currentPage}
          onChange={setCurrentPage}
        />

        <aside className="aside-box">
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
        </aside>
      </div>
    </>
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

      if (
        frontmatter.categoria &&
        removeSpecialCharactersAndLowerCase(frontmatter.categoria) ===
          categorySlug
      ) {
        const slug = frontmatter.slug || file.slice(0, file.indexOf("."))
        const rawDesc = frontmatter["short-description"] || ""
        const shortDescription =
          rawDesc.length > 140 ? rawDesc.slice(0, 140) : rawDesc
        matchingFiles.push({
          slug,
          categoria: frontmatter.categoria,
          title: frontmatter.title,
          date: frontmatter.date ? frontmatter.date.toISOString() : "",
          featuredimage: frontmatter.featuredimage || "",
          shortDescription,
        })
      }
    }

    matchingFiles.sort((a, b) => new Date(b.date) - new Date(a.date))

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
