export const sitename = "Antes del Examen"
export const motto = "Bancos de Preguntas gratis para UNAM IPM UAM UAEM"
export const sitedomain = "https://www.antesdelexamen.com"

export const subjects = [
  { label: "Biología", short: "Biología", href: "/categorias/biologia", icon: "🧬" },
  { label: "Química", short: "Química", href: "/categorias/quimica", icon: "⚗️" },
  { label: "Español", short: "Español", href: "/categorias/espanol", icon: "✍️" },
  { label: "Historia de México", short: "Historia MX", href: "/categorias/historia-de-mexico", icon: "🇲🇽" },
  { label: "Historia Universal", short: "Historia Univ.", href: "/categorias/historia-universal", icon: "🏛️" },
  { label: "Geografía", short: "Geografía", href: "/categorias/geografia", icon: "🌎" },
  { label: "Economía", short: "Economía", href: "/categorias/economia", icon: "💹" },
  { label: "Contabilidad", short: "Contabilidad", href: "/categorias/contabilidad", icon: "📊" },
  { label: "Derecho", short: "Derecho", href: "/categorias/derecho", icon: "⚖️" },
  { label: "Preguntas de Examen", short: "Preguntas", href: "/categorias/preguntas-de-examen", icon: "📝" },
]

// Same slug rule the category pages use for their URLs
export function categorySlug(str = "") {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase()
}
