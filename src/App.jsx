import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import Servicos        from "./components/Servicos";
import Projetos        from "./components/Projetos";
import Sobre           from "./components/Sobre";
import Contato         from "./components/Contato";
import Footer          from "./components/Footer";
import WhatsAppWidget  from "./components/WhatsAppWidget";
import SectionDivider  from "./components/SectionDivider";

export default function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <div className="-mt-14">
        <SectionDivider />
      </div>

      <div className="flex flex-col">
        <Servicos />
        <SectionDivider />
        <Projetos />
        <SectionDivider />
        <Sobre />
      </div>

      <SectionDivider />
      <Contato />
      <SectionDivider />
      <Footer />

      <WhatsAppWidget />
    </div>
  );
}
