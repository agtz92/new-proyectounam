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
            <Link href="/" >
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/categories/biologia" >
              BIOLOGIA
            </Link>
          </li>
          <li>
            <Link href="/categories/contabilidad" >
              CONTABILIDAD
            </Link>
          </li>
          <li>
            <Link href="/categories/derecho" >
              DERECHO
            </Link>
          </li>
          <li>
            <Link href="/categories/economia" >
              ECONOMIA
            </Link>
          </li>
          <li>
            <Link href="/categories/espanol" >
              ESPAÑOL
            </Link>
          </li>
          <li>
            <Link href="/categories/geografia" >
              GEOGRAFÍA
            </Link>
          </li>
          <li>
            <Link href="/categories/historia-de-mexico" >
              HISTORIA DE MEXICO
            </Link>
          </li>
          <li>
            <Link href="/categories/historia-universal" >
              HISTORIA UNIVERSAL
            </Link>
          </li>
          <li>
            <Link href="/categories/preguntas-de-examen" >
              PREGUNTAS EXAMEN
            </Link>
          </li>
          <li>
            <Link href="/categories/quimica" >
              QUIMICA
            </Link>
          </li>
          <li>
            <Link href="/categories/administracion-financiera" >
              ADMINISTRACION FINANCIERA
            </Link>
          </li>
          <li>
            <Link href="/categories/emprendedurismo" >
              EMPRENDEDURISMO
            </Link>
          </li>
          <li>
            <Link href="/categories/literatura" >
              LITERATURA
            </Link>
          </li>
          <li>
            <Link href="/categories/mejores-cursos-de-preparacion-unam-ipn-uam-uaem" >
              CURSOS DE PREPARACION
            </Link>
          </li>
          <li>
            <Link href="/categories/portafolios-de-inversiones" >
              PORTAFOLIOS DE INVERSIONES
            </Link>
          </li>
          <li>
            <Link href="/categories/sistemas-de-informacion-contable-y-financiera" >
              SISTEMAS DE INFORMACION CONTABLE
            </Link>
          </li>
          <li>
            <Link href="/privacidad" >
              Politica de Privacidad
            </Link>
          </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} display={"flex"} direction={"column"}>
          <h4>Partners</h4>
          <Link href="https://www.antesdelexamen.com/" target="_blank">
            Bancos de preguntas UNAM
          </Link>
          <Link href="https://www.corthw.com/topes-para-anden" target="_blank">
            Cortinas Hawaianas y Topes para Anden
          </Link>
          <Link
            href="https://www.antesdelexamen.com/categorias/preguntas-de-examen/"
            target="_blank"
          >
            Preguntas de examen UNAM
          </Link>
          <Link
            href="https://www.matmarkt.com/productos/gimnasios"
            target="_blank"
          >
            Piso para gimnasios
          </Link>
          <Link href="https://www.sombrealo.com/" target="_blank">
            Velarias Arquitectonicas Queretaro
          </Link>
          <Link href="https://www.soy-nuevo.com/" target="_blank">
            Cazador de Ofertas para Productos de Bebés como Safety 1st, Doona,
            Uppababy y más!
          </Link>
          <Link href="https://www.3minread.com/" target="_blank">
            Latest trends and news under 3 min!
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
