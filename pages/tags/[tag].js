import { useState, useEffect } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import PostCard from "@/components/PostCard"
import Pagination from "@/components/Pagination"
import Head from "next/head"
import { sitename, sitedomain } from "@/components/siteData"

function removeSpecialCharactersAndLowerCase(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()
}

function TagPage({ matchingFiles, tag }) {
  const sortedBlogs = matchingFiles || []

  const itemsPerPage = 9
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const blogsToDisplay = sortedBlogs.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [tag])

  const title = sitename + " | #" + tag
  const description = `Articulos etiquetados con #${tag} en ${sitename}. Encuentra recursos y bancos de preguntas para tu examen.`
  const canonicalUrl = `${sitedomain}/tags/${tag}`

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
            <Link href="/">Inicio</Link> / Etiqueta
          </div>
          <h1>#{tag}</h1>
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
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync("./blog")
  const tags = new Set()

  for (const file of files) {
    const fileContent = matter(
      fs.readFileSync(path.join("./blog", file), "utf8")
    )
    const frontmatter = fileContent.data

    if (frontmatter.tags && frontmatter.tags.length > 0) {
      frontmatter.tags.forEach((tag) => {
        if (tag && tag.length > 0) {
          const tagSlug = removeSpecialCharactersAndLowerCase(tag)
          tags.add(tagSlug)
        }
      })
    }
  }

  const uniqueTagsArray = Array.from(tags).filter(
    (tagSlug) => tagSlug && tagSlug.length > 0
  )

  const paths = uniqueTagsArray.map((tagSlug) => ({
    params: { tag: tagSlug },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params: { tag } }) {
  const tagSlug = removeSpecialCharactersAndLowerCase(tag)
  const files = fs.readdirSync("./blog")
  const matchingFiles = []

  for (const file of files) {
    const fileContent = matter(
      fs.readFileSync(path.join("./blog", file), "utf8")
    )
    const frontmatter = fileContent.data

    if (frontmatter.tags) {
      const matchingTag = frontmatter.tags.find(
        (t) => removeSpecialCharactersAndLowerCase(t) === tagSlug
      )

      if (matchingTag) {
        const slug = file.slice(0, file.indexOf("."))
        const rawDesc = frontmatter["short-description"] || ""
        const shortDescription =
          rawDesc.length > 140 ? rawDesc.slice(0, 140) : rawDesc
        matchingFiles.push({
          slug,
          title: frontmatter.title || "",
          categoria: frontmatter.categoria || "",
          shortDescription,
          featuredimage: frontmatter.featuredimage || "",
          date: frontmatter.date ? new Date(frontmatter.date).toISOString() : "",
        })
      }
    }
  }

  matchingFiles.sort((a, b) => new Date(b.date) - new Date(a.date))

  return {
    props: {
      matchingFiles,
      tag: tagSlug,
    },
  }
}

export default TagPage
