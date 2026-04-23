function ProjectCard({ name, description, url, image }) {
  const imageSrc = image.startsWith("http")
    ? image
    : `${import.meta.env.BASE_URL}${image}`;

  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>Visit Project</a>
      <img src={imageSrc} alt={name} className="project-image" />
    </div>
  );
}
export default ProjectCard;