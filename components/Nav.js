// components/Nav.js
import { Box } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { sitename, motto } from "./siteData"

const Nav = ({ isMobile, siteData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {!isMobile && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderBottom: "1px solid #f9f871",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <h1 style={{ fontSize: "4em", fontWeight: 600, margin: 0 }}>
            {sitename}
          </h1>
          <h3
            style={{
              fontSize: "1.5em",
              fontWeight: 300,
              textAlign: "center",
              margin: 0,
              letterSpacing: "2px",
            }}
          >
            {motto}
          </h3>
        </Box>
      )}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {isMobile && (
          <div className="logo">
            <Link href="/">{sitename}</Link>
          </div>
        )}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link href="/" onClick={toggleMenu}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/categorias/biologia" onClick={toggleMenu}>
              BIOLOGIA
            </Link>
          </li>
          <li>
            <Link href="/categorias/contabilidad" onClick={toggleMenu}>
              CONTABILIDAD
            </Link>
          </li>
          <li>
            <Link href="/categorias/derecho" onClick={toggleMenu}>
              DERECHO
            </Link>
          </li>
          <li>
            <Link href="/categorias/economia" onClick={toggleMenu}>
              ECONOMIA
            </Link>
          </li>
          <li>
            <Link href="/categorias/espanol" onClick={toggleMenu}>
              ESPAÑOL
            </Link>
          </li>
          <li>
            <Link href="/categorias/geografia" onClick={toggleMenu}>
              GEOGRAFÍA
            </Link>
          </li>
          <li>
            <Link href="/categorias/historia-de-mexico" onClick={toggleMenu}>
              HISTORIA DE MEXICO
            </Link>
          </li>
          <li>
            <Link href="/categorias/historia-universal" onClick={toggleMenu}>
              HISTORIA UNIVERSAL
            </Link>
          </li>
          <li>
            <Link href="/categorias/preguntas-de-examen" onClick={toggleMenu}>
              PREGUNTAS EXAMEN
            </Link>
          </li>
          <li>
            <Link href="/categorias/quimica" onClick={toggleMenu}>
              QUIMICA
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
