
import React from "react";
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Package2, X, ZoomIn } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface MobileProductListProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  resetFilters: () => void;
}

const MobileProductList: React.FC<MobileProductListProps> = ({
  products,
  onProductClick,
  resetFilters
}) => {
  if (products.length === 0) {
    return (
      <Alert variant="warning" className="my-4 bg-white">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Package2 className="h-8 w-8 text-gray-400" />
        </div>
        <AlertTitle className="text-xl font-medium text-center">لم يتم العثور على منتجات</AlertTitle>
        <AlertDescription className="text-center">
          <p className="text-gray-600 mt-2">حاول ضبط الفلاتر</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={resetFilters}
          >
            <X className="h-4 w-4 mr-2" />
       إعادة تعيين الفلاتر
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="bg-background pb-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          يتم عرض <span className="font-medium">{products.length}</span> منتج
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-fade-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard 
              product={product}
              onProductClick={onProductClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileProductList;
