import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import { Tables } from "@/integrations/supabase/types";  // Import Supabase types

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image_url: string;  // Changed from 'image' to 'image_url'
  description: string;
  stock: number;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  image_url,  // Updated parameter name
  description, 
  stock 
}: ProductCardProps) => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (stock <= 0) {
      toast({
        title: "Out of stock",
        description: "This product is currently out of stock.",
        variant: "destructive",
      });
      return;
    }
    
    addToCart({ 
      id, 
      name, 
      price, 
      image: image_url,  // Map image_url to image for cart compatibility
      quantity: 1 
    });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${id}`}>
        <img
          src={image_url || "/placeholder.svg"}  // Updated to use image_url
          alt={name}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">${price}</span>
            {stock <= 0 && (
              <span className="ml-2 text-sm text-red-500">Out of stock</span>
            )}
          </div>
          <Button 
            onClick={handleAddToCart} 
            variant="secondary"
            disabled={stock <= 0}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};