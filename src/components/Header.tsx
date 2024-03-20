import ModeToggle from "@/components/ModeToggle";
import { TreePine } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import { AvatarDemo } from "./ProfileAvatar";

export default function Header() {
  return (
    <div className="relative h-screen flex-col min-h-screen w-1/5 max-w-60 hidden md:flex overflow-y-hidden">
      <header className=" items-center justify-center mx-4 lg:px-6">
        <div className="h-48 mt-4">
          <AvatarDemo />
        </div>
        <Nav />
        <Footer />
      </header>
    </div>
  );
}
