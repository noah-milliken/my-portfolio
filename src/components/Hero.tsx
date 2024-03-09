import ProfilePicture from "./ProfilePicture";

import { Button } from "./ui/button";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function getUserData(id: string) {
  console.log(id);
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("leads")
    .select()
    .eq("url_param", id)
    .single();

  if (data) {
    return data;
  }
}

async function Hero({ user }: any) {
  const userData = await getUserData(user);
  console.log(userData);
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-around items-center h-screen mx-auto">
      <div className="w-1/2">
        <div className="hidden sm:inline-block space-y-8 my-12">
          <h2>{`Hey ${userData?.first_name || "there"}, I'm`}</h2>
          <h1 className="text-7xl">Noah Milliken</h1>
        </div>
        <div className="space-y-8">
          <p className=" max-w-sm sm:max-w-md text-lg">
            I am a freelance web debeloper Located in virginia. I specialize in
            finding and implementing technology to solve people problems.
          </p>
          <Button>
            <Link href="/resume.pdf" target="blank" download>
              Download My CV
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex flex-col items-center space-y-4  sm:hidden">
          <h2>{`Hi ${userData}, I'm`}</h2>
          <h1 className="sm:hidden">Noah Milliken</h1>
        </div>
        <ProfilePicture />
      </div>
    </div>
  );
}

export default Hero;
