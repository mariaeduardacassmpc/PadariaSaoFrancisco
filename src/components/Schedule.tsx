import { Clock } from "lucide-react";

const Schedule = () => {
  return (
    <section className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="text-primary" size={20} />
            <h5 className="text-2xl font-poppins font-bold text-primary">Horário de Funcionamento</h5>
          </div>
          <p className="text-foreground font-poppins text-lg">
            <span>Segunda a Sábado</span> das 05:30 às 20:00 • 
            <span> Domingos e Feriados</span> das 05:30 às 13:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;