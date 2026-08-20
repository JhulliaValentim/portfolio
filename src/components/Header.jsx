import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">JV</span>
          <span className="brand-copy">
            <strong>Jhullia Valentim</strong>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#certificacoes" onClick={closeMenu}>Certificações</a>
          <a className="nav-cta" href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    </header>
  )
}
