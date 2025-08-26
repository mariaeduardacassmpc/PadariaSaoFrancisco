interface ProductItemProps {
  title: string;
  image: string;
}

import bolodemilhoImage from "/uploads/bolodemilho.jpg";
import sonho from "/uploads/sonho.jpg";
import boloImage from "/uploads/bolo.jpg";
import mousse from "/uploads/mousse.jpg";
import broa from "/uploads/broa.jpg";

const ProductItem = ({ title, image }: ProductItemProps) => {
  return (
    <div className="group text-center">
      <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-3 shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-sm font-poppins font-semibold text-primary uppercase tracking-wide">
        {title}
      </h3>
    </div>
  );
};

const Products = () => {
  const products = [
  { title: "Bolo de Milho", image: "/uploads/bolodemilho.jpg" },
  { title: "Sonho e Cueca Virada", image: "/uploads/sonho.jpg" },
  { title: "Bolo de Festa", image: "/uploads/bolo.jpg" },
  { title: "Mousse de Maracúja", image: "/uploads/mousse.jpg" },
  { title: "Broa", image: "/uploads/broa.jpg" },
  ];

  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;