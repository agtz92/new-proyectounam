import fs from "fs"
import ReactMarkdown from "react-markdown"
import matter from "gray-matter"
import Head from "next/head"
import Image from "next/image"
import rehypeRaw from "rehype-raw"
import Box from "@mui/material/Box"
import { Chip, Grid } from "@mui/material"
import Link from "next/link"
import { sitename } from "../components/siteData"
import SEOBlog from "@/components/SEOBlog"
import Backlinks from "@/components/Backlinks"

export default function Blog({ frontmatter, markdown, isMobile }) {
  // Format the ISO date for display in the desired locale
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US")
  //for categories
  function removeSpecialCharactersAndLowerCase(str) {
    // Remove special characters, replace spaces with hyphens, and convert to lowercase
    return str
      .normalize("NFD") // Normalize accented characters
      .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks
      .replace(/[^\w\s]/g, "") // Remove non-alphanumeric characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .toLowerCase()
  }
  // Define the cleanAndLowercaseString function
  function cleanAndLowercaseString(inputString) {
    // Remove special characters, spaces, and "#" if found
    const cleanedString = inputString
      .replace(/[^a-zA-Z0-9]+/g, "")
      .toLowerCase()

    // Split the string by words and join them with hyphens
    const words = cleanedString.split(/\s+/)
    const transformedString = words.join("-")

    return transformedString
  }

  return (
    <Box display={"flex"} flexDirection={"row"}>
      <SEOBlog post={frontmatter} />
      {!isMobile && <Box id="adPlaceholder" sx={{ width: '40vw'}} />}
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          paddingLeft: !isMobile ? 0 : 5,
          paddingRight: !isMobile ? 0 : 5,
        }}
      >
        <h1 style={{ fontSize: "3em", margin: 0 }}>{frontmatter.title}</h1>
        <Box
          display={"flex"}
          alignContent={"left"}
          sx={{ marginBottom: 2, marginTop: 2 }}
        >
          <Chip
            label={frontmatter.categoria}
            clickable
            component={Link}
            href={`/categories/${removeSpecialCharactersAndLowerCase(
              frontmatter.categoria
            )}`}
          />
        </Box>

        <span style={{ color: "#ddd", fontSize: "12px" }}>
          Updated: {formattedDate}
        </span>
        <Box sx={{ minHeight: "40px" }} />
        <Box justifyContent={"center"} display={"flex"}>
          <div className="postimage-wrapper">
            <Image
              className="postimg"
              src={frontmatter.featuredimage}
              alt={frontmatter.title}
              fill
            />
          </div>
        </Box>

        <Grid container spacing={2} sx={{ marginTop: !isMobile ? 1 : 2 }}>
          {frontmatter.tags?.map((tag) => (
            <Grid key={tag} item xs={3} sm={3} md={1.5}>
              <Chip
                component={Link}
                href={`/tags/${cleanAndLowercaseString(tag)}`}
                label={tag}
                sx={{
                  marginRight: 1,
                  marginBottom: !isMobile ? 0 : 2,
                  width: "100%",
                }}
                clickable
              />
            </Grid>
          ))}
        </Grid>

        <Box display={"flex"} flexDirection={"column"} className="content">
          <Box sx={{ minHeight: "20px" }} />
          {frontmatter.shortDescription}
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {frontmatter.mk1}
          </ReactMarkdown>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {frontmatter.mk2}
          </ReactMarkdown>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {frontmatter.mk3}
          </ReactMarkdown>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {frontmatter.mk4}
          </ReactMarkdown>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {frontmatter.mk5}
          </ReactMarkdown>
          <div className="parpost light">
            <Backlinks categoria={frontmatter.categoria} />
            <p style={{ color: "#ddd" }}>
              antesdelexamen es una página de internet gratuita con bancos de
              preguntas de examen para UNAM, IPN y todas las demás universidades
              más importantes de México. Tenemos bancos de preguntas por materia
              y por area. Bancos de preguntas Area 1, Bancos de preguntas Area
              2, Bancos de preguntas area 3, Bancos de preguntas Area 4.
              Simulacros UNAM , IPN, UAM, UAEM. Guía UNAM 2021, Guía IPN 2021.{" "}
              <br></br>
              Agréganos en facebook buscando @antesdelexamen
            </p>
          </div>
        </Box>
      </Box>
      {!isMobile && <Box id="adPlaceholder" sx={{ width: '45%'}} />}
    </Box>
  )
}

// Modify the getStaticProps function
export async function getStaticProps({ params: { slug } }) {
  try {
    const fileContent = matter(fs.readFileSync(`./blog/${slug}.md`, "utf8"))
    const frontmatter = fileContent.data
    const markdown = fileContent.content

    // Format the date using the "es-MX" locale
    const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US")

    // Ensure shortDescription is defined for each blog
    const shortDescription = frontmatter["short-description"]

    return {
      props: {
        frontmatter: {
          ...frontmatter,
          date: formattedDate,
          shortDescription: shortDescription,
        },
        markdown,
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
