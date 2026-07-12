import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { Search, Filter } from 'lucide-react';

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6 text-brand-950">Our Bakery Menu</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our extensive selection of freshly baked goods. From hearty artisan breads to delicate French pastries, everything is made from scratch daily.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="bg-white p-6 rounded-3xl border border-brand-100 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center mb-6 text-brand-900">
              <Filter className="w-5 h-5 mr-2" />
              <h3 className="font-bold text-lg">Filter Menu</h3>
            </div>
            
            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-brand-50 border border-brand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
              />
              <Search className="w-4 h-4 text-brand-500 absolute left-4 top-3.5" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                        activeCategory === category 
                          ? 'bg-brand-600 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-brand-50 hover:text-brand-700'
                      }`}
                    >
                      <span>{category}</span>
                      <span className={`text-xs px-2 py-1 rounded-md ${activeCategory === category ? 'bg-white/20' : 'bg-brand-100 text-brand-700'}`}>
                        {category === "All" ? products.length : products.filter(p => p.category === category).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-brand-50 rounded-3xl border border-brand-100 border-dashed">
              <p className="text-xl font-bold text-brand-900 mb-2">No products found</p>
              <p className="text-gray-500">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-6 px-6 py-2 bg-brand-600 text-white rounded-full font-bold"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-100 hover:shadow-premium transition-all hover:-translate-y-1.5 group flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-brand-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <span className="text-white font-bold text-lg">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-brand-500 font-black uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold mb-2 text-brand-950 leading-tight">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">{product.shortDescription}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-black text-brand-900">${product.price.toFixed(2)}</span>
                      <Link to={`/products/${product.id}`} className="px-5 py-2 bg-brand-100 hover:bg-brand-600 hover:text-white text-brand-800 rounded-full text-sm font-bold transition-colors">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
