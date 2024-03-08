import MenuCards from "@/components/MenuCards";
import { icons } from "./techIcons";
import TechImageIcon from "@/components/TechImageIcon";

function page() {
  const iconsArr = icons;
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-col justify-center mx-auto ">
        <MenuCards />
        <h1 className="mx-auto">Technologies Used</h1>
        <div className="grid grid-cols-4 gap-4 m-4 sm:m-8">
          {iconsArr.map((icon, idx) => (
            <TechImageIcon key={icon} src={icon} dimension={60} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
