import ModeToggle from "@/components/ModeToggle";
import { TreePine } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Header() {
  return (
    <div className="relative h-screen flex-col min-h-screen w-1/5 max-w-60 hidden md:flex overflow-y-hidden">
      <header className=" items-center justify-center mx-4 lg:px-6">
        <div className="h-48 mt-4">
          <h2>PineCode</h2>
          <TreePine size={96} strokeWidth={1} />
        </div>
        <Nav />
        <Footer />
      </header>
    </div>
  );
}
