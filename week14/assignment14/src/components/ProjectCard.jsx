import {useState} from "react";

function ProjectCard({ name, description, url, image }) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const imageSrc = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    <div className="project-card">
      <h2>{name}</h2>
      <a href={url}>Visit Project</a>
      <img src={imageSrc} alt={name} className="project-image" />
      <button onClick={toggleDescription} className="toggle-button">
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {showDescription && <p className="project-description">{description}</p>}
    </div>
  );
}
export default ProjectCard;