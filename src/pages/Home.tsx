import { Link } from 'react-router-dom';
import { ArrowRight, Wheat, Coffee, Gift, Award } from 'lucide-react';
import { products } from '../data/mockData';

export function Home() {
  const featuredProducts = products.filter(p => p.category === "Breads").slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-950 text-brand-50 py-32 lg:py-48">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80" alt="Fresh baked bread" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Handcrafted <span className="text-brand-400">Perfection</span>, Baked Daily.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-brand-100 font-medium">
            Experience the aroma of genuine artisanal baking. From our naturally leavened sourdoughs to our delicate French pastries, every item is made with uncompromising quality and passion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 rounded-full text-lg font-bold transition-all shadow-premium hover:-translate-y-1 flex items-center justify-center">
              Explore Our Menu <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/custom-orders" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-brand-400 rounded-full text-lg font-bold transition-all hover:-translate-y-1 text-brand-300 hover:text-white">
              Order a Custom Cake
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-brand-950">The BakersGo Standard</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't cut corners. We believe in traditional techniques, long fermentation, and sourcing the finest local ingredients.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Wheat className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Organic Grains</h3>
              <p className="text-gray-600 text-sm">We stone-mill our own organic, heritage grains daily to ensure maximum nutritional value and complex flavor profiles.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Slow Fermentation</h3>
              <p className="text-gray-600 text-sm">Our sourdoughs undergo a minimum 36-hour cold fermentation process, developing unparalleled depth and digestibility.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Baked Fresh</h3>
              <p className="text-gray-600 text-sm">Everything in our case was baked just hours ago. We never sell day-old products at full price. Freshness is guaranteed.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors">
              <div className="w-16 h-16 bg-white text-brand-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-900">Master Crafters</h3>
              <p className="text-gray-600 text-sm">Our team consists of classically trained pastry chefs and passionate artisan bread bakers who treat baking as an art form.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Breads */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black mb-4 text-brand-950">Signature Loaves</h2>
              <p className="text-gray-600">The foundation of our bakery. Naturally leavened and hearth-baked.</p>
            </div>
            <Link to="/products" className="text-brand-600 font-bold hover:text-brand-700 flex items-center mt-4 md:mt-0 link-hover text-lg">
              View Entire Menu <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-premium transition-all hover:-translate-y-2 group flex flex-col cursor-pointer">
                <div className="relative h-56 overflow-hidden bg-brand-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-900 shadow-sm">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs text-brand-500 font-extrabold uppercase tracking-widest mb-2">{product.category}</div>
                  <h3 className="text-lg font-bold mb-3 text-brand-950 leading-tight">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-1">{product.shortDescription}</p>
                  <Link to={`/products/${product.id}`} className="w-full py-2.5 bg-brand-50 hover:bg-brand-600 hover:text-white text-brand-700 rounded-xl text-center text-sm font-bold transition-colors">
                    View details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
