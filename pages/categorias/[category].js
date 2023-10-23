import React, { useState, useEffect } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Box, Grid, Pagination, Stack } from "@mui/material"
import Link from "next/link"
import Head from "next/head"
import LargeCard from "@/components/LargeCard"
import { sitename } from "@/components/siteData"
import Backlinks from "@/components/Backlinks"

function removeSpecialCharactersAndLowerCase(str) {
  // Remove special characters, replace spaces with hyphens, and convert to lowercase
  return str
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks
    .replace(/[^\w\s]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase()
}

function CategoryPage({ matchingFiles, category, isMobile }) {
  // Sort the blogs by date in descending order
  const sortedBlogs = matchingFiles?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  //pagination
  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const blogsToDisplay = sortedBlogs?.slice(startIndex, endIndex)
  //reset current page if category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [category])

  const title = sitename + " | " + category

  return (
    <Box
      className='margins5'
    >
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          borderBottom: "1px solid #f9f871",
          marginBottom: 5,
        }}
        className='margins'
      >
        <h3
          style={{
            fontSize: "1.5em",
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          {category.toUpperCase()}
        </h3>
      </Box>

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
      <div className="parpost light">
        <Backlinks categoria={category} />
        <p style={{ color: "#ddd" }}>
          antesdelexamen es una página de internet gratuita con bancos de
          preguntas de examen para UNAM, IPN y todas las demás universidades más
          importantes de México. Tenemos bancos de preguntas por materia y por
          area. Bancos de preguntas Area 1, Bancos de preguntas Area 2, Bancos
          de preguntas area 3, Bancos de preguntas Area 4. Simulacros UNAM ,
          IPN, UAM, UAEM. Guía UNAM 2021, Guía IPN 2021. <br></br>
          Agréganos en facebook buscando @antesdelexamen
        </p>
      </div>
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
        // Read the slug from frontmatter
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
    // Check if the file is not hidden (doesn't start with a dot)
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
    fallback: "blocking", // Allow for custom handling of 404-like cases
  }
}

export default CategoryPage
