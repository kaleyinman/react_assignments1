import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects({ limit }) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;
    return (
        <div className="projects-grid">
            {displayedProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    url={project.url}
                    image={project.image}
                />
            ))}
        </div>
    );
}

export default Projects;