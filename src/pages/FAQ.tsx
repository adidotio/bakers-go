import { useState } from 'react';
import { faqs } from '../data/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-black mb-6 text-brand-950">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Got questions about our ingredients, ordering process, or shipping? We've got answers.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-brand-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button 
              className="w-full px-6 py-6 flex items-center justify-between focus:outline-none focus:bg-brand-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-bold text-left text-brand-900 pr-8">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-brand-500 shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-brand-500 shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-2 border-t border-brand-50">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 bg-brand-950 rounded-3xl p-10 text-center shadow-xl">
        <h3 className="text-3xl font-black mb-4 text-brand-50">Can't find what you're looking for?</h3>
        <p className="text-brand-200 mb-8 text-lg max-w-xl mx-auto">We're always happy to chat about bread, allergies, or anything else you might need help with.</p>
        <button className="px-8 py-4 bg-white hover:bg-brand-100 text-brand-900 rounded-full font-black transition-colors">
          Contact Our Team
        </button>
      </div>
    </div>
  );
}
