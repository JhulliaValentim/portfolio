export default function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container">
        <div className="contact-card">
          <span className="eyebrow">CONTATO</span>
          <h2 className="section-title">Vamos conversar?</h2>
          <p>
            Entre em Contato
          </p>

          <div className="contact-actions">
            <a className="button primary-button" href="mailto:jhulliavalentimp@gmail.com">Enviar e-mail</a>
            <a
              className="button secondary-button"
              href="https://www.linkedin.com/in/jhulliavalentim/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-link"
              href="https://github.com/JhulliaValentim"
              target="_blank"
              rel="noreferrer"
            >
              Ver GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
