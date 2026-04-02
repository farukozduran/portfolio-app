import "../styles/ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-tech">Technologies: {project.technologies}</p>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        GitHub
      </a>
    </div>
  );
}
export default ProjectCard;
