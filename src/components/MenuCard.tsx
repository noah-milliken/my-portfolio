import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

function MenuCard({ key, title, description, icon }) {
  return (
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
}

export default MenuCard;
