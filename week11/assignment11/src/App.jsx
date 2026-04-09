
import "./css/app.css";
function ProjectCard({name, description}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <p>Hello World!</p>
      <ProjectCard name="Project Name" description="Project Description" />
    </div>
    );
}

export default App;
