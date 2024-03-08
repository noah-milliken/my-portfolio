import ProjectCarousel from "@/components/ProjectCarousel";
import { projectsArr } from "./projects";
function Projects() {
  const projects = projectsArr;
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <ProjectCarousel projects={projects} />
    </div>
  );
}

export default Projects;
