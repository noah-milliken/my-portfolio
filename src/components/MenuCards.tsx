import MenuCard from "./MenuCard";
import {
  ArchiveIcon,
  LockKeyhole,
  Monitor,
  SettingsIcon,
  Wallet,
} from "lucide-react";
const cardsData = [
  {
    title: "Front End Development",
    description:
      "Create attractive and dynamic user interface with the latest technology to represent your brand.",
    icon: <Monitor />,
  },
  {
    title: "Back End Development",
    description:
      "Implement serverside business logic to automate and streamline business tasks like record keeping, emailing, and invoicing.",
    icon: <SettingsIcon />,
  },
  {
    title: "Database Management",
    description:
      "Implement databases to store and manipulate data for your business or organization using SQL and noSQL technologies",
    icon: <ArchiveIcon />,
  },
  {
    title: "Auth Implementation",
    description:
      "Send me an email or link to some of my socials. I am always eager to discuss opportunities or setup a conversation",
    icon: <LockKeyhole />,
  },
  {
    title: "E-commerce",
    description:
      "Integrate Payments with your website or service for seamles transactions with your customers",
    icon: <Wallet />,
  },
];
function MenuCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 m-4 sm:m-8">
      {cardsData.map((card) => (
        <MenuCard
          key={card.title + card.icon}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default MenuCards;
