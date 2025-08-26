import heroImage from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-[70vh] flex items-center justify-start overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-left text-primary-foreground max-w-2xl mx-auto px-4 ml-8 md:ml-16">
        <h1 className="text-4xl md:text-6xl font-cormorant font-bold mb-6 leading-tight italic">
          Saboreie a qualidade em
          <span> nossos produtos...</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;