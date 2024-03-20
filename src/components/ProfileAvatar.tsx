import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://my-tracker-portfolio-bucket.s3.amazonaws.com/noahProfilePic.png"
        alt="@shadcn"
      />
      <AvatarFallback>NM</AvatarFallback>
    </Avatar>
  );
}
