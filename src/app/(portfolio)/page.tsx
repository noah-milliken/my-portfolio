import Hero from "@/components/Hero";

export default function Home({ params }: any) {
  const user = params?.slug || "there";
  return (
    <main className="w-full  my-auto">
      <Hero user={user} />
    </main>
  );
}
