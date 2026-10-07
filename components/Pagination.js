// First, last and the pages around the current one; null marks a gap
function pageList(count, page) {
  const pages = []
  for (let p = 1; p <= count; p++) {
    if (p === 1 || p === count || Math.abs(p - page) <= 1) pages.push(p)
    else if (pages[pages.length - 1] !== null) pages.push(null)
  }
  return pages
}

const Pagination =({ count, page, onChange }) => {
  if (count <= 1) return null

  const go = (p) => {
    onChange(p)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav aria-label="Paginación">
      <ul className="pagination">
        <li>
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 1}
            aria-label="Página anterior"
          >
            ←
          </button>
        </li>
        {pageList(count, page).map((p, i) =>
          p === null ? (
            <li key={`gap-${i}`} aria-hidden="true" className="pagination-gap">
              …
            </li>
          ) : (
          <li key={p}>
            <button
              type="button"
              onClick={() => go(p)}
              aria-current={p === page ? "page" : undefined}
              aria-label={`Página ${p}`}
            >
              {p}
            </button>
          </li>
          )
        )}
        <li>
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === count}
            aria-label="Página siguiente"
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
