import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex absolute  bottom-0 left-0 h-10 w-full">
      <div
        className="flex items-center 
    mx-auto justify-around w-3/4"
      >
        <Link href={"https://twitter.com/noahmilliken"}>
          <TwitterLogoIcon />
        </Link>
        <Link href={"www.linkedin.com/in/noahmilliken"}>
          <LinkedInLogoIcon />
        </Link>
        <Link href={"https://github.com/noah-milliken"}>
          <GitHubLogoIcon />
        </Link>
        <Link href={"/contact"}>
          <EnvelopeOpenIcon />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
