import { Card, CardContent, Chip } from "@mui/material"
import Image from "next/image"
import React from "react"

const LargeCard = ({ post, height }) => {
  function generateExcerpt(text, maxLength) {
    if (text) {
      if (text.length <= maxLength) return text
      const trimmedText = text.substring(0, maxLength)
      const lastSpaceIndex = trimmedText.lastIndexOf(" ")
      if (lastSpaceIndex !== -1) {
        return trimmedText.substring(0, lastSpaceIndex) + "..."
      }
      return trimmedText + "..."
    }
    return ""
  }

  return (
    <Card
      sx={{
        minHeight: height || "auto",
        maxHeight: height || "none",
        overflow: "hidden",
      }}
    >
      <div className="featuredimage-wrapper">
        <Image
          className="featuredimg"
          src={post.featuredimage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <CardContent sx={{ padding: "16px !important" }}>
        <Chip
          label={post.categoria}
          size="small"
          sx={{ mb: 1, fontSize: "0.65rem !important" }}
        />
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            margin: "0 0 8px 0",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            minHeight: "3.9em",
          }}
        >
          {post.title}
        </h3>
        <p
          style={{
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {generateExcerpt(post.shortDescription, 120)}
        </p>
      </CardContent>
    </Card>
  )
}

export default LargeCard
