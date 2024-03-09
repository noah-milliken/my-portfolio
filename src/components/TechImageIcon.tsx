import Image from "next/image";

type TechImageIconProps = {
  src: string;
  dimension: number;
};

const TechImageIcon: React.FC<TechImageIconProps> = ({ src, dimension }) => {
  return (
    <Image height={dimension} width={dimension} src={src} alt="TechIcon" />
  );
};

export default TechImageIcon;
