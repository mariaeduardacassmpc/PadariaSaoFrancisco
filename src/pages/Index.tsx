import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Products />
        <section className="bg-primary text-primary-foreground py-12 flex flex-col items-center justify-center text-center gap-4">
          <h2 className="text-xl font-bold mb-2">Domingo é dia de frango!</h2>
          <p className="text-lg">Aos domingos, temos frango assado fresquinho. Garanta o seu!</p>
          <a href="https://wa.me/5543991502248?text=Olá! Gostaria de reservar um frango assado para domingo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4">
            <img src="/src/assets/frango.jpg" alt="Frango Assado" className="w-64 h-48 object-cover rounded-lg shadow-md" />
            <button className="bg-secondary text-black font-bold py-2 px-6 rounded-lg shadow hover:bg-orange-200 transition-colors">
              Reservar
            </button>
          </a>
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
