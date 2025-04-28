


type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  
  export default function ProductCard({ product }: { product: Product }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        </div>
      </div>
    );
  }
  