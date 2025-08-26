
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
              <img src="/uploads/logobranca.png" alt="Logo Padaria" className="w-56 h-56 object-contain -mt-12" />
            <h3 className="text-lg font-poppins font-semibold mb-4 -mt-8">
              Padaria São Francisco
            </h3>
            <p className="text-primary-foreground/80 font-poppins leading-relaxed">
              Tradição e qualidade em cada produto. Fazemos pães artesanais com amor 
              e ingredientes selecionados há mais de 20 anos.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-start">
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 mb-6">
                <li>
                  <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-poppins">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block w-40"></div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center gap-2">
                  <h4 className="text-lg font-poppins font-semibold m-0">Siga-nos</h4>
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-primary-foreground/80 font-poppins">
                  Instagram: <a href="https://instagram.com/pad_saofrancisco" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">@pad_saofrancisco</a>
                </p>
                <p className="text-primary-foreground/80 font-poppins">
                  WhatsApp: <a href="https://wa.me/+5543991502248" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">(43) 99150-2248</a>
                </p>
              </div>
            </div>
            </div>
          <div>
            <a href="https://wa.me/5543999311445?text=Desejo%20fazer%20um%20orçamento" target="_blank" rel="noopener noreferrer">
              <img src="/uploads/logomaria.png" alt="LogoMaria" className="w-25 h-20 mt-60 ml-72 cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 font-poppins">
            © 2024 Padaria São Francisco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;