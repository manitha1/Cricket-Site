import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { newsArticles } from '../../data/mockData';
import { format } from 'date-fns';

const categories = ['All', 'News', 'Tournament', 'Academy', 'Announcement', 'Community', 'Events', 'Match Report'];

export default function NewsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = newsArticles.filter(a =>
    (category === 'All' || a.category === category) &&
    (a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; News & Events</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">News & Events</h1>
          <p className="text-white/75 text-lg">Stay up to date with the latest from Apex Cricket Association.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search news..." value={search}
                onChange={e => setSearch(e.target.value)} className="form-input pl-10" />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all duration-200 ${
                  category === cat ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {filtered.length > 0 && (
            <Link to={`/news/${filtered[0].slug}`} className="block card card-hover overflow-hidden mb-8 group">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-80 overflow-hidden">
                  <img src={filtered[0].featuredImage} alt={filtered[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge bg-secondary/10 text-secondary text-xs">{filtered[0].category}</span>
                    <span className="text-xs text-slate-400">{format(new Date(filtered[0].publishedAt), 'dd MMM yyyy')}</span>
                    <span className="badge badge-gold text-xs">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-black font-display text-primary mb-3 group-hover:text-secondary transition-colors duration-200 leading-tight">
                    {filtered[0].title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-5">{filtered[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(1).map(article => (
              <article key={article.id} className="card card-hover overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img src={article.featuredImage} alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge bg-secondary/10 text-secondary text-xs">{article.category}</span>
                    <span className="text-xs text-slate-400">{format(new Date(article.publishedAt), 'dd MMM yyyy')}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base leading-snug mb-2 line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <p className="text-xs text-slate-400 mb-3">By {article.author}</p>
                  <Link to={`/news/${article.slug}`}
                    className="flex items-center gap-1 text-secondary text-sm font-semibold hover:gap-2 transition-all duration-200">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">No articles found.</div>
          )}
        </div>
      </section>
    </div>
  );
}
