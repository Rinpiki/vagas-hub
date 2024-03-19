import ContainerCards from "@/components/cards/containerCards";
import Header from "@/components/header";
import Title from "@/components/title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 bg-var-blue">
      <Title />
      <ContainerCards />
    </main>
  );
}
