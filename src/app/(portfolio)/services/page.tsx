import { icons } from "./techIcons";
import TechImageIcon from "@/components/TechImageIcon";

function page() {
  const iconsArr = icons;
  return (
    <div>
      <div className="grid grid-cols-4 gap-8 border border-l-secondary w-1/3">
        {iconsArr.map((icon, idx) => (
          <TechImageIcon key={idx} src={icon} dimension={60} />
        ))}
      </div>
    </div>
  );
}

export default page;
