import Image from "next/image";

function TechImageIcon({ src, dimension }) {
  return (
    <Image height={dimension} width={dimension} src={src} alt="TechIcon" />
  );
}

export default TechImageIcon;
