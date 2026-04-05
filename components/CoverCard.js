import React from "react"
import { Box, Card, CardContent, Chip } from "@mui/material"
import Image from "next/image"

const CoverCard = ({ post, h1, secondary }) => {
  return (
    <Card
      sx={{
        position: "relative",
        "&:hover": {
          "& img": {
            transform: "scale(1.08)",
          },
        },
      }}
      className={!secondary ? "cover" : "cover-secondary"}
    >
      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)",
          zIndex: 1,
        }}
      />

      <Image
        component="img"
        alt={post.title}
        src={post.featuredimage}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        width="800"
        height="500"
      />

      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px !important",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <Chip
          label={post.categoria}
          size="small"
          sx={{ mb: 1, fontSize: "0.7rem !important" }}
        />
        <h3
          style={{
            fontSize: h1 ? h1 : secondary ? "1rem" : "1.3rem",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
          }}
        >
          {post.title}
        </h3>
      </CardContent>
    </Card>
  )
}

export default CoverCard
