export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-20 animate-fade-in-up">
        <h1 className="text-5xl font-black mb-6 text-brand-950">Our Story</h1>
        <p className="text-xl text-gray-600 font-medium">
          Born from a passion for real bread and authentic pastries.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
        <img 
          src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=1200&q=80" 
          alt="Bakers shaping dough" 
          className="w-full h-[400px] object-cover rounded-3xl mb-16 shadow-premium" 
        />

        <h2 className="text-3xl font-black mb-6 text-brand-900">The Beginning</h2>
        <p className="mb-10">
          BakersGo started in 2018 with a simple, frustrating realization: it was nearly impossible to find a truly great loaf of bread in our city. Supermarket shelves were lined with mass-produced, heavily preserved breads that lacked soul, flavor, and nutritional value. Our founders, a husband-and-wife team of culinary school graduates, decided to change that by opening a tiny wholesale operation out of a converted garage.
        </p>

        <div className="bg-brand-50 p-8 rounded-3xl border border-brand-100 mb-10">
          <h2 className="text-2xl font-black mb-4 text-brand-900">Our Ingredient Philosophy</h2>
          <p className="mb-4">
            We believe that a bakery is only as good as its ingredients. This means we refuse to use commercial dough conditioners, artificial preservatives, or bleached flours. Instead, we focus on:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-medium text-brand-800">
            <li>Sourcing 100% organic, locally milled heritage grains.</li>
            <li>Using exclusively high-fat, European-style cultured butter for all our laminated doughs.</li>
            <li>Allowing wild yeasts to do the heavy lifting through long, cold fermentation.</li>
            <li>Partnering with local dairy farms for our milk and cream.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-black mb-6 text-brand-900">The Artisanal Process</h2>
        <p className="mb-10">
          True artisanal baking cannot be rushed. It requires patience, intuition, and an understanding of how flour, water, and yeast interact with the environment. Our team of dedicated bakers arrives at 3:00 AM every single day. We shape every boule by hand, we laminate our croissant dough meticulously, and we bake our breads directly on the hearth of our stone-deck ovens to achieve that perfect, shatteringly crisp crust.
        </p>
      </div>
    </div>
  );
}
