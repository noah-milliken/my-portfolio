import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

type MenuCardProps = {
  key: string;
  title: string;
  description: string;
  icon: any;
};

const MenuCard: React.FC<MenuCardProps> = ({
  key,
  title,
  description,
  icon,
}) => (
  <Card key={key}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <div className="flex items-center space-x-8">
          <div>{icon}</div>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardContent>
    </CardHeader>
  </Card>
);

export default MenuCard;
