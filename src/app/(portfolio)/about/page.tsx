import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex items-center mb-24 space-x-16">
        <div>
          <Image
            src="https://my-tracker-portfolio-bucket.s3.amazonaws.com/pikaPlaceholder.png"
            height={350}
            width={350}
            alt="about me image"
          />
        </div>
        <div className="w-1/2 space-y-8">
          <h1>About Me.</h1>
          <h2>
            Im a freelance software engineer with over 3 years of experience.
          </h2>
          <p>
            Im a freelance fullstack software developer from Maine. Recently
            moved to Virginia. I create web applications, mostly for small to
            medium sized businesses. I like to create passion projects on the
            side as well. When I am not working behind my keyboard I am normally
            at the gym or cooking dinner.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/contact">Contact me</Link>
            </Button>
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
