import { Box, Grid } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { sitename, motto } from "./siteData"
import Image from "next/image"

const Footer = () => {
  return (
    <Box
      sx={{
        margin: 5,
        borderTop: "1px solid #f9f871",
        paddingTop: 2,
      }}
      className="footer"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <p>{sitename}</p>
          <p>{motto}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h4>Categories</h4>
          <ul>
            <li>
              <Link href="/">INICIO</Link>
            </li>
            <li>
              <Link href="/categorias/biologia">BIOLOGIA</Link>
            </li>
            <li>
              <Link href="/categorias/contabilidad">CONTABILIDAD</Link>
            </li>
            <li>
              <Link href="/categorias/derecho">DERECHO</Link>
            </li>
            <li>
              <Link href="/categorias/economia">ECONOMIA</Link>
            </li>
            <li>
              <Link href="/categorias/espanol">ESPAÑOL</Link>
            </li>
            <li>
              <Link href="/categorias/geografia">GEOGRAFÍA</Link>
            </li>
            <li>
              <Link href="/categorias/historia-de-mexico">
                HISTORIA DE MEXICO
              </Link>
            </li>
            <li>
              <Link href="/categorias/historia-universal">
                HISTORIA UNIVERSAL
              </Link>
            </li>
            <li>
              <Link href="/categorias/preguntas-de-examen">
                PREGUNTAS EXAMEN
              </Link>
            </li>
            <li>
              <Link href="/categorias/quimica">QUIMICA</Link>
            </li>
            <li>
              <Link href="/categorias/administracion-financiera">
                ADMINISTRACION FINANCIERA
              </Link>
            </li>
            <li>
              <Link href="/categorias/emprendedurismo">EMPRENDEDURISMO</Link>
            </li>
            <li>
              <Link href="/categorias/literatura">LITERATURA</Link>
            </li>
            <li>
              <Link href="/categorias/mejores-cursos-de-preparacion-unam-ipn-uam-uaem">
                CURSOS DE PREPARACION
              </Link>
            </li>
            <li>
              <Link href="/categorias/portafolios-de-inversiones">
                PORTAFOLIOS DE INVERSIONES
              </Link>
            </li>
            <li>
              <Link href="/categorias/sistemas-de-informacion-contable-y-financiera">
                SISTEMAS DE INFORMACION CONTABLE
              </Link>
            </li>
            <li>
              <Link href="/privacidad">Politica de Privacidad</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} display={"flex"} direction={"column"}>
          <h4>Partners</h4>
          <Link
            className="footer-link"
            href="https://www.matmarkt.com/productos"
            target="_blank"
            rel="noopener"
          >
            MatMarkt. Piso y tapetes de hule y PVC
          </Link>
          <Link
            className="footer-link"
            href="https://www.corthw.com/productos"
            target="_blank"
            rel="noopener"
          >
            Cortina Hawaiana. Cortinas Hawaianas de PVC
          </Link>
          <Link
            className="footer-link"
            href="https://www.rollospvc.com/productos"
            target="_blank"
            rel="noopener"
          >
            Cortina Hawaiana. Cortinas Hawaianas de PVC
          </Link>
          <Link
            className="footer-link"
            href="https://www.10datos.com"
            target="_blank"
            rel="noopener"
          >
            10 datos curiosos sobre cientos de temas
          </Link>
          <Link
            className="footer-link"
            href="https://www.antesdelauni.com"
            target="_blank"
            rel="noopener"
          >
            Bancos de preguntas UNAM IPN UAM UAEM
          </Link>
          <Link
            className="footer-link"
            href="https://www.3minread.com"
            target="_blank"
            rel="noopener"
          >
            Lifestyle, Culture and more 3 min read articles
          </Link>
          <Link
            className="footer-link"
            href="https://www.pmhule.com"
            target="_blank"
            rel="noopener"
          >
            Fabricantes de hule y neopreno
          </Link>
          <Link
            className="footer-link"
            href="https://www.sombrealo.com"
            target="_blank"
            rel="noopener"
          >
            Velarias en Queretaro
          </Link>
        </Grid>
        <Grid item xs={12} md={12}>
          <p style={{ width: "100%", textAlign: "center" }}>{sitename} 2023</p>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
