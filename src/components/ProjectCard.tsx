import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function ProjectCard({ project }: any) {
  console.log(project);
  return (
    <Card className="bg-transparent pt-6 border border-red-100">
      <CardContent className="flex flex-col sm:flex-row items-center">
        <div className="sm:w-2/3 order-2 sm:order-1">
          <CardHeader className="gap-4">
            <CardTitle>
              <span className="text-4xl font-semibold">{project.title}</span>
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <div className="flex space-x-8">
              {project.github && (
                <Button variant={"outline"}>
                  <Link href={`${project.github}`}>GitHub</Link>
                </Button>
              )}
              {project.url && (
                <Button variant={"outline"}>
                  <Link href={`${project.url}`}>Site Link</Link>
                </Button>
              )}
            </div>
          </CardHeader>
        </div>
        <div className="sm:w-1/3 order-1 sm:order-2">
          <Image
            src={project.img}
            alt={project.alt}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
 