import ProjectCard from "./ProjectCard";

function CardsGrid({ projects }: any) {
  const projectsArr = projects;

  return (
    <div className="grid gap-8 grid-cols-1 bg-transparent overflow-scroll">
      {projectsArr.map((project: any) => {
        return (
          <ProjectCard project={project} key={project.title + project.url} />
        );
      })}
    </div>
  );
}

export default CardsGrid;
