import Image from "next/image"
import Link from "next/link"

function excerpt(text, maxLength) {
  if (!text || text.length <= maxLength) return text || ""
  const trimmed = text.substring(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(" ")
  return (lastSpace !== -1 ? trimmed.substring(0, lastSpace) : trimmed) + "…"
}

const PostCard = ({ post, featured, priority, headingLevel = 3 }) => {
  const Heading = `h${headingLevel}`
  return (
    <article className={featured ? "card card-featured" : "card"}>
      <div className="card-media">
        {post.featuredimage && (
          <Image
            src={post.featuredimage}
            alt=""
            fill
            sizes={
              featured
                ? "(max-width: 720px) 100vw, 640px"
                : "(max-width: 720px) 100vw, 360px"
            }
            priority={Boolean(priority)}
            fetchPriority={priority ? "high" : "auto"}
          />
        )}
      </div>
      <div className="card-body">
        {post.categoria && <span className="label">{post.categoria}</span>}
        <Heading>
          <Link prefetch={false} href={`/${post.slug}`}>{post.title}</Link>
        </Heading>
        <p>{excerpt(post.shortDescription, featured ? 220 : 140)}</p>
      </div>
    </article>
  )
}

export default PostCard
