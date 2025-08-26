import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="bg-background shadow-sm">
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
               <img src="/src/assets/logo 1.png" alt="Logo" className="h-16 w-auto border-none shadow-none bg-transparent" />
            </div>
            <div className="flex items-center gap-6 text-foreground">
              <a href="tel:+5543991502248" className="flex items-center gap-2 hover:text-[#bfa181] transition-colors">
                <Phone size={14} />
                <span className="font-poppins">(43) 99150-2248</span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Indianópolis,+170,+St+Margarida" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#bfa181] transition-colors">
                <MapPin size={14} />
                <span className="font-poppins">Avenida Indianópolis, 170, St Margarida</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-primary shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-12 py-4">
            <a href="#inicio" className="text-primary-foreground hover:text-[#bfa181] transition-colors font-poppins font-medium tracking-wide">
              Página Inicial
            </a>
            <a href="#sobre" className="text-primary-foreground hover:text-[#bfa181] transition-colors font-poppins font-medium tracking-wide">
              Sobre Nós
            </a>
            <a href="#produtos" className="text-primary-foreground hover:text-[#bfa181] transition-colors font-poppins font-medium tracking-wide">
              Produtos
            </a>
            <a href="#contato" className="text-primary-foreground hover:text-[#bfa181] transition-colors font-poppins font-medium tracking-wide">
              Fale Conosco
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;