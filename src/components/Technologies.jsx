import { technologies } from '../data/portfolioData'

export default function Technologies() {
  return (
    <section className="section" id="tecnologias">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">TECNOLOGIAS</span>
          <h2 className="section-title">
            Ferramentas que fazem parte
            <span> do meu desenvolvimento.</span>
          </h2>
          <p>
            Conhecimentos que utilizo para criar, manter e integrar aplicações web.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((technology, index) => (
            <article className="tech-card" key={technology.name}>
              <div className="tech-card-number">{String(index + 1).padStart(2, '0')}</div>
              <span className="tech-category">{technology.category}</span>
              <h3>{technology.name}</h3>
              <p>{technology.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
