import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section className="projects-section" id="projetos">
      <div className="section-header">
        <span className="section-eyebrow">PORTFÓLIO</span>
        <h2>
          Projetos que <span>transformam ideias em soluções.</span>
        </h2>
        <p>
          Alguns dos projetos e aplicações que desenvolvi durante minha
          experiência com desenvolvimento web.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            
            <div className="project-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="project-content">

              <div className="project-top">
                <div>
                  <span className="project-eyebrow">
                    {project.eyebrow}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-highlight">
                {project.highlight}
              </p>

              {project.url && project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Ver aplicação
                  <ExternalLink size={16} />
                </a>
              )}

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}