import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock product data (will be replaced with Supabase data)
  const product = {
    id: id,
    name: "Premium Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation feature.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    features: [
      "Active Noise Cancellation",
      "40-hour Battery Life",
      "Premium Sound Quality",
      "Comfortable Fit"
    ]
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-bold text-primary">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleAddToCart} className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;