import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Leaf, Info, AlertTriangle } from 'lucide-react';
import { products } from '../data/mockData';

export function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-screen">
        <h2 className="text-4xl font-black mb-4 text-brand-950">Product Not Found</h2>
        <p className="mb-8 text-gray-600">The baked good you are looking for does not exist or has been removed from our menu.</p>
        <Link to="/products" className="text-brand-600 font-bold hover:underline">Return to Menu</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <Link to="/products" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="rounded-3xl overflow-hidden bg-brand-50 shadow-sm border border-brand-100">
            <img src={product.image} alt={product.name} className="w-full h-[500px] lg:h-[600px] object-cover" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="text-sm font-black text-brand-500 uppercase tracking-widest mb-3">{product.category}</div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 text-brand-950 tracking-tight leading-tight">{product.name}</h1>
            <div className="text-3xl font-black text-brand-700 mb-8">${product.price.toFixed(2)}</div>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients & Nutrition Accordions (Simulated) */}
            <div className="space-y-6 mb-10">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                <div className="flex items-center mb-4 text-brand-900">
                  <Leaf className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-bold">Ingredients</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.ingredients.join(", ")}.
                </p>
                {product.allergens && (
                  <div className="mt-4 p-3 bg-orange-100/50 border border-orange-200 rounded-xl flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                    <p className="text-sm text-orange-900 font-medium">
                      <span className="font-bold">Contains:</span> {product.allergens.join(", ")}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center mb-4 text-gray-900">
                  <Info className="w-5 h-5 mr-2" />
                  <h3 className="text-lg font-bold">Nutritional Facts</h3>
                </div>
                <p className="text-gray-700 text-sm font-mono bg-white p-3 rounded-lg border border-gray-200">
                  {product.nutrition}
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border border-gray-300 rounded-full bg-white">
                  <button className="px-4 py-3 text-gray-500 hover:text-brand-600 font-bold">-</button>
                  <span className="w-8 text-center font-bold">1</span>
                  <button className="px-4 py-3 text-gray-500 hover:text-brand-600 font-bold">+</button>
                </div>
                <button className="flex-1 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-premium hover:-translate-y-1">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 font-medium">Available for local pickup or courier delivery only.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
