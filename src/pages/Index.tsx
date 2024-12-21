import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="relative bg-primary py-24 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to ShopHub
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover amazing products at great prices. Start shopping today and enjoy our wide selection of premium items.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/shop">
                <Button variant="secondary" className="gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics",
                image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
              },
              {
                title: "Fashion",
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
              },
              {
                title: "Home & Living",
                image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;