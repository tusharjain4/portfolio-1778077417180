'use client';

import React from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My Works</h2>
        <div role="list">
          {projects.map((project, index) => (
            <article key={index} className="project-item" role="listitem">
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="keyword">{tech}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                {/* No explicit links in portfolio data, adding placeholder */}
                <a href="#" className="mt-4 text-adizen-primary-blue hover:underline text-sm md:text-base font-manrope font-semibold">Learn More &rarr;</a>
              </div>
              <img
                src={`https://via.placeholder.com/836x396?text=Project+${index + 1}`}
                alt={`Project showcase for ${project.name}`}
                className="project-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;