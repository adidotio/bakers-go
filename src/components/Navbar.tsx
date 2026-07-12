import { Link } from 'react-router-dom';
import { ShoppingBag, Info, BookOpen, HelpCircle, ShoppingCart, Cake } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-brand-950/80 backdrop-blur-xl border-b border-brand-100 dark:border-brand-900 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-brand-600 p-2.5 rounded-full group-hover:scale-105 group-hover:rotate-12 transition-transform shadow-lg shadow-brand-500/30">
              <Cake className="h-6 w-6 text-white" />
            </div>
            <Link to="/" className="text-2xl font-black tracking-tight text-brand-900 dark:text-brand-50">
              BakersGo
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/products" className="flex items-center space-x-1.5 text-sm font-bold text-brand-900 dark:text-brand-100 link-hover">
              <ShoppingBag className="w-4 h-4 text-brand-500" />
              <span>Menu</span>
            </Link>
            <Link to="/custom-orders" className="flex items-center space-x-1.5 text-sm font-bold text-brand-900 dark:text-brand-100 link-hover">
              <Cake className="w-4 h-4 text-brand-500" />
              <span>Custom Orders</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1.5 text-sm font-bold text-brand-900 dark:text-brand-100 link-hover">
              <Info className="w-4 h-4 text-brand-500" />
              <span>Our Story</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-1.5 text-sm font-bold text-brand-900 dark:text-brand-100 link-hover">
              <BookOpen className="w-4 h-4 text-brand-500" />
              <span>Journal</span>
            </Link>
            <Link to="/faq" className="flex items-center space-x-1.5 text-sm font-bold text-brand-900 dark:text-brand-100 link-hover">
              <HelpCircle className="w-4 h-4 text-brand-500" />
              <span>FAQ</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
             <Link to="/checkout" className="group flex items-center px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
                <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Cart (0)
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
