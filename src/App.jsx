import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Sobre    from "./components/Sobre";
import Servicos from "./components/Servicos";
import Processo from "./components/Processo";
import Nichos   from "./components/Nichos";
import CtaBanner from "./components/CtaBanner";
import Contato  from "./components/Contato";
import Footer   from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />

      <div className="flex flex-col gap-6 pb-6">
        <Sobre />
        <Servicos />
        <Processo />
        <Nichos />
        <CtaBanner />
      </div>

      <Contato />
      <Footer />

      <WhatsAppWidget />
    </div>
  );
}
