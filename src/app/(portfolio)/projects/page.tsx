import { projectsArr } from "./projects";
import CardsGrid from "@/components/CardsGrid";
function Projects(): React.JSX.Element {
  const projectArr = projectsArr;
  return (
    <div className="container h-screen pt-20 my-auto overflow-scroll pb-8">
      <CardsGrid projects={projectArr} />
    </div>
  );
}

export default Projects;
