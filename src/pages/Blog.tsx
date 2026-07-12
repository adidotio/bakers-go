import { blogPosts } from '../data/mockData';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-black mb-6 text-brand-950">The Bakery Journal</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights from our master bakers, deep dives into ingredients, and behind-the-scenes looks at how we craft our pastries.
        </p>
      </div>

      <div className="space-y-16">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-brand-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-400 group-hover:bg-brand-600 transition-colors"></div>
            <h2 className="text-3xl lg:text-4xl font-black mb-6 text-brand-950">{post.title}</h2>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-brand-700 font-bold mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-brand-500" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-brand-500" />
                {post.author}
              </div>
            </div>

            <p className="text-2xl text-brand-800 font-bold mb-8 italic leading-snug">
              "{post.excerpt}"
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 leading-loose">
              <p>{post.content}</p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <button className="flex items-center text-brand-600 font-black hover:text-brand-800 transition-colors group/btn">
                Share this article <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
