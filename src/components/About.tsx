import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold text-primary">Nossa História</h2>
            <p className="text-xl text-muted-foreground font-poppins leading-relaxed">
              Há mais de 20 anos, nossa padaria tem sido o coração da comunidade, 
              oferecendo produtos artesanais feitos com paixão e dedicação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-cormorant font-semibold text-primary mb-4">
                Tradição e Qualidade
              </h3>
              <p className="text-muted-foreground font-poppins mb-6 leading-relaxed">
                Nossa padaria nasceu do sonho de oferecer pães verdadeiramente artesanais, 
                feitos com técnicas tradicionais e ingredientes cuidadosamente selecionados. 
                Cada produto é preparado com amor e atenção aos detalhes.
              </p>
              
              <h3 className="text-3xl font-cormorant font-semibold text-primary mb-4">
                Ingredientes Frescos
              </h3>
              <p className="text-muted-foreground font-poppins leading-relaxed">
                Trabalhamos apenas com farinhas especiais, fermentos naturais e ingredientes 
                frescos de fornecedores locais. Nosso compromisso é com a qualidade e o sabor 
                autêntico em cada mordida.
              </p>
            </div>
            
            <div className="bg-gradient-brown rounded-lg p-8 flex flex-col items-center justify-center text-center">
              <div>
                <div className="text-3xl font-cormorant font-bold text-cream mb-2">20+</div>
                <div className="text-cream/80 font-poppins">Anos de Tradição</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;