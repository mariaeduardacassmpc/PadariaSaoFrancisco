import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard = ({ title, description, image, price }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-inter font-semibold">
            {price}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground font-inter leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;