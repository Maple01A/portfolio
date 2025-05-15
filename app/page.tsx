import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Footer />
    </main>
  );
}
