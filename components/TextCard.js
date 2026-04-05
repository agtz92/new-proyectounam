import React from "react"
import { Card, CardContent, Chip } from "@mui/material"
import Image from "next/image"

const TextCard = ({ post, height }) => {
  return (
    <Card sx={{ height: height || "auto", overflow: "hidden" }}>
      {post.featuredimage && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "120px",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.featuredimage}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      )}
      <CardContent sx={{ padding: "12px !important" }}>
        <Chip
          label={post.categoria}
          size="small"
          sx={{ mb: 1, fontSize: "0.65rem !important" }}
        />
        <h3
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {post.title}
        </h3>
      </CardContent>
    </Card>
  )
}

export default TextCard
