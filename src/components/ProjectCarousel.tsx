import React from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function ProjectCarousel({ projects }: any) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Carousel opts={{ loop: true }} className="w-5/6 h-5/6 flex items-center">
        <CarouselContent>
          {projects.map((project: any) => (
            <CarouselItem key={project.title + project.url}>
              <Card className="flex flex-col justify-around h-screen border border-transparent  bg-transparent">
                <CardContent
                  className="flex flex-col w-fill
                 items-center justify-center space-y-8 min-h-36"
                >
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex space-x-8">
                    {project.github && (
                      <Button>
                        <Link href={`${project.github}`}>GitHub</Link>
                      </Button>
                    )}
                    <Button>
                      <Link href={`${project.url}`}>Site Link</Link>
                    </Button>
                  </div>
                </CardContent>
                <Image
                  className="mx-auto"
                  src={project.img}
                  height={600}
                  width={600}
                  alt={project.alt}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
