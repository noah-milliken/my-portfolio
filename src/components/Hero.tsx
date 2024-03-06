import React from "react";
import ProfilePicture from "./ProfilePicture";
import MenuCards from "./MenuCards";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  //import name or visitor name as welcome message.
  const visitor = "Greg";
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-around items-center  mx-auto">
      <div className="w-1/2">
        <div className="hidden sm:inline-block space-y-8 my-12">
          <h2>{`Hi ${visitor}, I'm`}</h2>
          <h1 className="text-7xl">Noah Milliken</h1>
        </div>
        <div className="space-y-8">
          <p className=" max-w-sm sm:max-w-md text-lg">
            I am a freelance web debeloper Located in virginia. I specialize in
            finding and implementing technology to solve people problems.
          </p>
          <Button>
            <Link href="/resume.pdf" target="blank" download>
              <span>Download My CV</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col items-center space-y-4  sm:hidden">
          <h2>{`Hi ${visitor}, I'm`}</h2>
          <h1 className="sm:hidden">Noah Milliken</h1>
        </div>
        <ProfilePicture />
      </div>
    </div>
  );
}

export default Hero;
