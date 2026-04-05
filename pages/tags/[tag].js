import React, { useState, useEffect } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import LargeCard from "@/components/LargeCard"
import { Box, Grid, Pagination, Stack } from "@mui/material"
import Head from "next/head"
import { sitename, sitedomain } from "@/components/siteData"

function removeSpecialCharactersAndLowerCase(str) {
  // Remove special characters and spaces and convert to lowercase
  return str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()
}

function TagPage({ matchingFiles, tag, isMobile }) {
  const sortedBlogs = matchingFiles?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  //pagination
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const blogsToDisplay = sortedBlogs?.slice(startIndex, endIndex)
  //reset current page if tag changes
  useEffect(() => {
    setCurrentPage(1)
  }, [tag])

  const title = sitename + " | #" + tag
  const description = `Artículos etiquetados con #${tag} en ${sitename}. Encuentra recursos y bancos de preguntas para tu examen.`
  const canonicalUrl = `${sitedomain}/tags/${tag}`

  return (
    <Box
      className='margins5'
    >
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
      <h1 style={{ textAlign: "center", fontWeight: 600 }}>
        #{tag.toUpperCase()}
      </h1>

      <Grid container spacing={2}>
        {blogsToDisplay?.map((file, index) => (
          <Grid key={index} item xs={12} md={4}>
            <Link href={`/${file.slug}`}>
              <LargeCard post={file} />
            </Link>
          </Grid>
        ))}
      </Grid>
      {/*Pagination*/}
      <Stack
        spacing={2}
        display={"flex"}
        flexDirection={"row"}
        alignContent={"space-evenly"}
        justifyContent={"space-evenly"}
        sx={{ marginTop: 5 }}
      >
        <Pagination
          count={Math.ceil(sortedBlogs.length / itemsPerPage)}
          size="large"
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
        />
      </Stack>
    </Box>
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
          //console.log("final tag:", tagSlug, "from: ", frontmatter.slug)
        }
      })
    } else {
      console.log("bad path: ", frontmatter.slug)
    }
  }

  // Convert the tags set to an array, filter out empty strings
  const uniqueTagsArray = Array.from(tags).filter(
    (tagSlug) => tagSlug && tagSlug.length > 0
  )
  //console.log("uniqueTags: ", uniqueTagsArray)

  // Map the unique tags to the paths array
  const paths = uniqueTagsArray.map((tagSlug) => ({
    params: { tag: tagSlug }, // Use the tagSlug as a string
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
    const shortDescription = frontmatter["short-description"] || ""
    const isoDate = frontmatter.date
      ? new Date(frontmatter.date).toISOString()
      : ""

    if (frontmatter.tags) {
      const matchingTag = frontmatter.tags.find(
        (t) => removeSpecialCharactersAndLowerCase(t) === tagSlug
      )

      if (matchingTag) {
        const slug = file.slice(0, file.indexOf("."))
        matchingFiles.push({
          slug,
          title: frontmatter.title,
          categoria: frontmatter.categoria,
          shortDescription: shortDescription,
          featuredimage: frontmatter.featuredimage,
          date: isoDate,
        })
      }
    } else {
      const badslug = file.slice(0, file.indexOf("."))
      console.log("sin tags", badslug)
    }
  }

  return {
    props: {
      matchingFiles,
      tag: tagSlug,
    },
  }
}

export default TagPage
