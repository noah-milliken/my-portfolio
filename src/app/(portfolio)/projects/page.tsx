import { projectsArr } from "./projects";
import CardsGrid from "@/components/CardsGrid";
function Projects(): React.JSX.Element {
  const projectArr = projectsArr;
  return (
    <div className="container">
      <CardsGrid projects={projectArr} />
    </div>
  );
}

export default Projects;
