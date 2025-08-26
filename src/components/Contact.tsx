import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-poppins font-bold text-primary">Visite Nossa Padaria</h2>
          <p className="text-xl text-muted-foreground font-poppins max-w-2xl mx-auto">
            Estamos sempre prontos para recebê-lo com produtos frescos e um atendimento caloroso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-3xl font-cormorant font-extrabold text-primary mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground font-poppins">
                        Av. Indianópolis, 170 - Santa Margarida, Bela Vista do Paraíso - PR, 86130-000<br />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Mapa Endereço Padaria"
                  src="https://www.google.com/maps?q=Av.+Indian%C3%A1polis,+170+-+Santa+Margarida,+Bela+Vista+do+Para%C3%ADso+-+PR,+86130-000&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-cormorant font-extrabold text-primary mb-6">
                Horário de Funcionamento
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-foreground">Segunda a Sexta</span>
                  <span className="font-poppins text-muted-foreground">05:30 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-foreground">Sábado</span>
                  <span className="font-poppins text-muted-foreground">05:30 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-foreground">Domingo</span>
                  <span className="font-poppins text-muted-foreground">05:30 - 13:00</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-poppins font-semibold text-foreground mb-1 mt-10">Telefone</h4>
                <p className="text-muted-foreground font-poppins">(43) 3242-2380 | (43) 99150-2248</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
  

export default Contact;