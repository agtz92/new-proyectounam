import Link from "next/link"
import { useState } from "react"
import { sitename } from "./siteData"

const categories = [
  { label: "Biologia", href: "/categorias/biologia" },
  { label: "Contabilidad", href: "/categorias/contabilidad" },
  { label: "Derecho", href: "/categorias/derecho" },
  { label: "Economia", href: "/categorias/economia" },
  { label: "Espanol", href: "/categorias/espanol" },
  { label: "Geografia", href: "/categorias/geografia" },
  { label: "Historia MX", href: "/categorias/historia-de-mexico" },
  { label: "Historia Univ.", href: "/categorias/historia-universal" },
  { label: "Preguntas", href: "/categorias/preguntas-de-examen" },
  { label: "Quimica", href: "/categorias/quimica" },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="nav-wrapper">
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <Link href="/">{sitename}</Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link href={cat.href} onClick={toggleMenu}>
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
