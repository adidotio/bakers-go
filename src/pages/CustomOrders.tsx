export function CustomOrders() {
  return (
    <div className="bg-brand-50 min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 text-brand-950">Order a Custom Cake</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From elegant wedding tiers to whimsical birthday creations, our master pastry chefs can bring your vision to life. Please fill out the inquiry form below.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-premium p-8 lg:p-12 border border-brand-100">
          <form className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-900 mb-6 border-b border-gray-100 pb-2">1. Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-xl font-bold text-brand-900 mb-6 border-b border-gray-100 pb-2 mt-12">2. Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-bold text-gray-700 mb-2">Event Type *</label>
                  <select id="eventType" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none">
                    <option value="">Select an event...</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-bold text-gray-700 mb-2">Estimated Guest Count *</label>
                  <input type="number" id="guestCount" min="1" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-bold text-gray-700 mb-2">Event Date *</label>
                  <input type="date" id="eventDate" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Required? *</label>
                  <div className="flex space-x-6 pt-2">
                    <label className="flex items-center">
                      <input type="radio" name="delivery" value="yes" className="form-radio text-brand-600 focus:ring-brand-500 w-5 h-5" />
                      <span className="ml-2 text-gray-700 font-medium">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="delivery" value="no" className="form-radio text-brand-600 focus:ring-brand-500 w-5 h-5" defaultChecked />
                      <span className="ml-2 text-gray-700 font-medium">No (Pickup)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Cake Specifications */}
            <div>
              <h3 className="text-xl font-bold text-brand-900 mb-6 border-b border-gray-100 pb-2 mt-12">3. Cake Specifications</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="flavor" className="block text-sm font-bold text-gray-700 mb-2">Preferred Sponge Flavor</label>
                    <select id="flavor" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none">
                      <option value="vanilla">Madagascar Vanilla Bean</option>
                      <option value="chocolate">Valrhona Dark Chocolate</option>
                      <option value="redVelvet">Classic Red Velvet</option>
                      <option value="lemon">Lemon Zest</option>
                      <option value="carrot">Spiced Carrot</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="filling" className="block text-sm font-bold text-gray-700 mb-2">Preferred Filling</label>
                    <select id="filling" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none">
                      <option value="buttercream">Vanilla Swiss Buttercream</option>
                      <option value="ganache">Chocolate Ganache</option>
                      <option value="fruit">Fresh Berry Compote</option>
                      <option value="curd">Lemon Curd</option>
                      <option value="creamcheese">Cream Cheese Frosting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="allergies" className="block text-sm font-bold text-gray-700 mb-2">Dietary Restrictions / Allergies</label>
                  <input type="text" id="allergies" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="e.g. Nut allergy, Gluten-free needed" />
                </div>
                <div>
                  <label htmlFor="vision" className="block text-sm font-bold text-gray-700 mb-2">Describe Your Vision *</label>
                  <textarea id="vision" rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none" placeholder="Tell us about the design, colors, theme, or any specific requests..." required></textarea>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button type="button" className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold text-lg transition-all shadow-premium hover:-translate-y-1">
                Submit Inquiry
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">We typically respond to all custom order inquiries within 48 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
