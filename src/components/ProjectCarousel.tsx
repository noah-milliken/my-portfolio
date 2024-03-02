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

function ProjectCarousel() {
  const projects = [
    "/pikaPlaceholder.png",
    "/profilePic.png",
    "/profilePic.png",
    "/pikaPlaceholder.png",
  ];
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Carousel className="w-full sm:max-w-14 md:max-w-md lg:max-w-2xl lg:border border-green-500">
        <CarouselContent>
          {projects.map((project, inx) => (
            <CarouselItem key={inx}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image src={project} fill alt="project image" />
                </CardContent>
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
