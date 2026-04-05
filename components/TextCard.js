import React from "react"
import { Card, CardContent, Chip } from "@mui/material"

const TextCard = ({ post, height }) => {
  return (
    <Card sx={{ height: height || "auto" }}>
      <CardContent sx={{ padding: "16px !important" }}>
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
