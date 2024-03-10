import Hero from "@/components/Hero";
import { sendUpdate } from "@/utils/send-email";

export default async function Home({ params }: any) {
  const user = params?.slug || "there";
  if (params.slug) {
    sendUpdate(params.slug);
  }
  return (
    <main className="w-full h-screen my-auto">
      <Hero user={user} />
    </main>
  );
}
