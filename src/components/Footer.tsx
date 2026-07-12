export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-50 pt-20 pb-10 mt-auto border-t-[8px] border-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-black mb-6 text-white">BakersGo</h3>
            <p className="text-sm text-brand-200 leading-relaxed mb-6">
              Artisanal breads, exquisite pastries, and custom celebration cakes. Baked fresh daily with passion, precision, and the finest ingredients we can source.
            </p>
            <div className="text-sm text-brand-300 font-medium">
              <p>123 Baker Street, Flour Town, CA 90210</p>
              <p>hello@bakersgo.com</p>
              <p>(555) 123-BAKE</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Shop</h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li><a href="/products" className="hover:text-white transition-colors flex items-center">All Baked Goods</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center">Sourdough Breads</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center">Morning Pastries</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center">Cookies & Sweets</a></li>
              <li><a href="/custom-orders" className="hover:text-white transition-colors flex items-center text-brand-400 font-semibold">Order Custom Cake &rarr;</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">About Us</h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ingredient Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meet the Bakers</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Bakery Journal (Blog)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Support & Info</h4>
            <ul className="space-y-3 text-sm text-brand-200">
              <li><a href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Allergy Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800 pt-8 text-center text-sm text-brand-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 BakersGo Artisanal Bakery. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">This is a dummy website built for comprehensive translation testing.</p>
        </div>
      </div>
    </footer>
  );
}
