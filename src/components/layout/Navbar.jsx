import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'الرئيسية',   to: '/' },
  { label: 'خدماتنا',    to: '/services' },
  { label: 'من نحن',     to: '/about' },
  { label: 'تواصل معنا', to: '/contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__inner container">

        <Link to="/" className="navbar__logo">رواد</Link>

        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`navbar__link ${pathname === l.to ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar__cta btn-dark">
          استشارة مجاناً !
        </Link>

        <button className="navbar__burger" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}