import MenuCard from "./MenuCard";
const cardsData = [
  {
    title: "About",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem tempora numquam quo repudiandae at esse doloremque, odit maxime neque reiciendis ab autem earum id facere sunt cupiditate. Facilis.",
    href: "about",
    buttonText: "About me",
  },
  {
    title: "Services and Technologies",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem tempora numquam quo repudiandae at esse doloremque, odit maxime neque reiciendis ab autem earum id facere sunt cupiditate. Facilis.",
    href: "services",
    buttonText: "Services",
  },
  {
    title: "Some of my past work",
    description:
      " Some of my past work and personal projects. I have enjoyed working with small busniesses in my community in the past as well as building applications that i actually use.",
    href: "projects",
    buttonText: "Projects",
  },
  {
    title: "Get in touch here",
    description:
      "Send me an email or link to some of my socials. I am always eager to discuss opportunities or setup a conversation",
    href: "contact",
    buttonText: "Contact",
  },
];
function MenuCards() {
  return (
    <div className="flex flex-col gap-8">
      {cardsData.map((card) => (
        <MenuCard
          key={card.title + card.href}
          title={card.title}
          description={card.description}
          href={card.href}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
}

export default MenuCards;
