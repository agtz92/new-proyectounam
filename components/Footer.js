import Link from "next/link"
import { sitename, motto, subjects } from "./siteData"

const partners = [
  { href: "https://www.matmarkt.com/productos", label: "MatMarkt. Piso y tapetes de hule y PVC" },
  { href: "https://www.corthw.com/productos", label: "Cortina Hawaiana. Cortinas Hawaianas de PVC" },
  { href: "https://www.rollospvc.com/productos", label: "Cortina Hawaiana. Cortinas Hawaianas de PVC" },
  { href: "https://www.10datos.com", label: "10 datos curiosos sobre cientos de temas" },
  { href: "https://www.antesdelauni.com", label: "Bancos de preguntas UNAM IPN UAM UAEM" },
  { href: "https://www.3minread.com", label: "Lifestyle, Culture and more 3 min read articles" },
  { href: "https://www.pmhule.com", label: "Fabricantes de hule y neopreno" },
  { href: "https://www.sombrealo.com", label: "Velarias en Queretaro" },
]

const Footer = () => (
  <footer className="site-footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <Link prefetch={false} href="/" className="brand">
            <span>{sitename}</span>
          </Link>
          <p>{motto}</p>
        </div>
        <div>
          <h2>Materias</h2>
          <ul>
            <li><Link prefetch={false} href="/">Inicio</Link></li>
            {subjects.map((s) => (
              <li key={s.href}>
                <Link prefetch={false} href={s.href}>{s.label}</Link>
              </li>
            ))}
            <li><Link prefetch={false} href="/privacidad">Política de Privacidad</Link></li>
          </ul>
        </div>
        <div>
          <h2>Partners</h2>
          <ul>
            {partners.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener">
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        {sitename} &copy; {new Date().getFullYear()}
      </div>
    </div>
  </footer>
)

export default Footer
