export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">SOFTWARE DEVELOPER</span>

          <h1>
            Tecnologia com propósito,
            <span> organização e experiência.</span>
          </h1>

          <p className="hero-lead">
            Sou Jhullia Valentim, desenvolvedora de software com experiência em aplicações web,
            sistemas corporativos e integração entre front-end, back-end e banco de dados.
          </p>

          <p className="hero-stack">
            Atualmente desenvolvo com <strong>React, Node.js, JavaScript, APIs REST e Oracle SQL</strong>,
            além de possuir experiência com <strong>OutSystems</strong>.
          </p>

          <div className="hero-actions">
            <a className="button primary-button" href="#projetos">Ver projetos</a>
            <a
              className="button secondary-button"
              href="https://www.linkedin.com/in/jhulliavalentim/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>Front-end</strong>
              <span>React & JavaScript</span>
            </div>
            <div>
              <strong>Back-end</strong>
              <span>Node.js & APIs</span>
            </div>
            <div>
              <strong>Dados</strong>
              <span>Oracle SQL</span>
            </div>
          </div>
        </div>

        <aside className="hero-card" aria-label="Resumo profissional">
          <div className="hero-card-top">
            <span className="status-dot" />
            <span>Perfil profissional</span>
          </div>

          <div className="monogram">JV</div>

          <h2>Jhullia Valentim</h2>
          <p>Software Developer</p>

          <div className="hero-card-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Oracle SQL</span>
            <span>APIs REST</span>
          </div>

          <a
            className="profile-link"
            href="https://github.com/JhulliaValentim"
            target="_blank"
            rel="noreferrer"
          >
            github.com/JhulliaValentim ↗
          </a>
        </aside>
      </div>
    </section>
  )
}
