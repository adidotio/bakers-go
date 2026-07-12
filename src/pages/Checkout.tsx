export function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black mb-12 text-brand-950">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <form className="space-y-10">
            {/* Delivery Method */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100 text-brand-900">1. Delivery Method</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="deliveryMethod" value="pickup" className="peer sr-only" defaultChecked />
                  <div className="p-4 border-2 border-brand-200 rounded-2xl peer-checked:border-brand-600 peer-checked:bg-brand-50 hover:bg-gray-50 transition-colors">
                    <h3 className="font-bold text-brand-900 mb-1">In-Store Pickup</h3>
                    <p className="text-sm text-gray-500">Free • Available today after 9:00 AM</p>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="deliveryMethod" value="delivery" className="peer sr-only" />
                  <div className="p-4 border-2 border-brand-200 rounded-2xl peer-checked:border-brand-600 peer-checked:bg-brand-50 hover:bg-gray-50 transition-colors">
                    <h3 className="font-bold text-brand-900 mb-1">Local Courier</h3>
                    <p className="text-sm text-gray-500">$9.99 • Within 15 mile radius</p>
                  </div>
                </label>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100">
              <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100 text-brand-900">2. Contact & Billing</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" required />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">Billing Address *</label>
                  <input type="text" id="address" className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" required />
                </div>
              </div>
            </section>

            <button type="button" className="w-full py-5 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-black text-lg transition-all shadow-premium hover:-translate-y-1">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary (Static) */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-brand-50 p-8 rounded-3xl border border-brand-200 sticky top-28">
            <h2 className="text-2xl font-black mb-6 text-brand-900">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              {/* Mock Cart Items */}
              <div className="flex justify-between items-start pb-4 border-b border-brand-100">
                <div>
                  <h4 className="font-bold text-brand-900">Classic Sourdough Boule</h4>
                  <p className="text-sm text-gray-500">Qty: 2</p>
                </div>
                <span className="font-bold text-brand-900">$17.00</span>
              </div>
              <div className="flex justify-between items-start pb-4 border-b border-brand-100">
                <div>
                  <h4 className="font-bold text-brand-900">Pain au Chocolat</h4>
                  <p className="text-sm text-gray-500">Qty: 4</p>
                </div>
                <span className="font-bold text-brand-900">$18.00</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold">$35.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Taxes</span>
                <span className="font-bold">$2.89</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t-2 border-brand-200 pt-6">
              <span className="text-xl font-black text-brand-900">Total</span>
              <span className="text-3xl font-black text-brand-600">$37.89</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
