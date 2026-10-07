import Link from "next/link"
import { sitename, subjects } from "./siteData"

const Nav = () => (
  <header className="site-header">
    <a className="skip-link" href="#contenido">
      Saltar al contenido
    </a>
    <div className="wrap">
      <Link prefetch={false} href="/" className="brand">
        <span>{sitename}</span>
      </Link>
      <nav className="subject-nav" aria-label="Materias">
        <ul>
          {subjects.map((s) => (
            <li key={s.href}>
              <Link prefetch={false} href={s.href}>{s.short}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Nav
