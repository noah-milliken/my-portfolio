import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function MenuCard({ key, title, description, href, buttonText }) {
  return (
    <Card key={key}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>
          <Link href={href}>
            <span className="mr-3">{buttonText}</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default MenuCard;
