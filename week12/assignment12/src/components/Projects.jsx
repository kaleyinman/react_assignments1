import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    return (
        <div className="projects-grid">
            {projects.map((project) => (
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