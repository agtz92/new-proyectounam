import { Box, Grid } from "@mui/material"
import Link from "next/link"
import { sitename, motto } from "./siteData"

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #f9f871, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 8,
            }}
          >
            {sitename}
          </div>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>{motto}</p>
        </Grid>
        <Grid item xs={12} md={4}>
          <h4>Categorias</h4>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/categorias/biologia">Biologia</Link></li>
            <li><Link href="/categorias/contabilidad">Contabilidad</Link></li>
            <li><Link href="/categorias/derecho">Derecho</Link></li>
            <li><Link href="/categorias/economia">Economia</Link></li>
            <li><Link href="/categorias/espanol">Espanol</Link></li>
            <li><Link href="/categorias/geografia">Geografia</Link></li>
            <li><Link href="/categorias/historia-de-mexico">Historia de Mexico</Link></li>
            <li><Link href="/categorias/historia-universal">Historia Universal</Link></li>
            <li><Link href="/categorias/preguntas-de-examen">Preguntas de Examen</Link></li>
            <li><Link href="/categorias/quimica">Quimica</Link></li>
            <li><Link href="/privacidad">Politica de Privacidad</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4} display="flex" flexDirection="column">
          <h4>Partners</h4>
          <Link className="footer-link" href="https://www.matmarkt.com/productos" target="_blank" rel="noopener">
            MatMarkt. Piso y tapetes de hule y PVC
          </Link>
          <Link className="footer-link" href="https://www.corthw.com/productos" target="_blank" rel="noopener">
            Cortina Hawaiana. Cortinas Hawaianas de PVC
          </Link>
          <Link className="footer-link" href="https://www.rollospvc.com/productos" target="_blank" rel="noopener">
            Cortina Hawaiana. Cortinas Hawaianas de PVC
          </Link>
          <Link className="footer-link" href="https://www.10datos.com" target="_blank" rel="noopener">
            10 datos curiosos sobre cientos de temas
          </Link>
          <Link className="footer-link" href="https://www.antesdelauni.com" target="_blank" rel="noopener">
            Bancos de preguntas UNAM IPN UAM UAEM
          </Link>
          <Link className="footer-link" href="https://www.3minread.com" target="_blank" rel="noopener">
            Lifestyle, Culture and more 3 min read articles
          </Link>
          <Link className="footer-link" href="https://www.pmhule.com" target="_blank" rel="noopener">
            Fabricantes de hule y neopreno
          </Link>
          <Link className="footer-link" href="https://www.sombrealo.com" target="_blank" rel="noopener">
            Velarias en Queretaro
          </Link>
        </Grid>
        <Grid item xs={12}>
          <div className="footer-copy">
            {sitename} &copy; {new Date().getFullYear()}
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
