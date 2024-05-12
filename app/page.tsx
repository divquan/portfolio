import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Herosection from "@/components/Herosection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full items-center flex-col flex">
      <main className="flex min-h-screen flex-col items-center justify-between max-w-6xl ">
        <Herosection />
        <Aboutme />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
