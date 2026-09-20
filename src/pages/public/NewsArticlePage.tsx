import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { newsArticles } from '../../data/mockData';
import { format } from 'date-fns';

export default function NewsArticlePage() {
  const { slug } = useParams();
  const article = newsArticles.find(a => a.slug === slug) || newsArticles[0];

  return (
    <div>
      <section className="bg-green-gradient pt-24 pb-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/news" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" /> All News
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge bg-white/20 text-white text-xs">{article.category}</span>
            {article.tags?.map(tag => (
              <span key={tag} className="badge bg-white/10 text-white/70 text-xs">#{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-black font-display text-white leading-tight mb-4">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {format(new Date(article.publishedAt), 'EEEE, dd MMMM yyyy')}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          {article.featuredImage && (
            <div className="rounded-2xl overflow-hidden mb-8 -mt-8 shadow-card-hover">
              <img src={article.featuredImage} alt={article.title} className="w-full max-h-80 object-cover" />
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card p-6 lg:p-8">
                <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium border-l-4 border-secondary pl-4">
                  {article.excerpt}
                </p>
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p>The Apex Cricket Association is proud to bring you this exciting update from our cricket community. This article covers the latest developments in ACA cricket, reflecting our commitment to transparency and community engagement.</p>
                  <br />
                  <p>Cricket continues to grow at Apex, with more teams, more players, and more competitive action every season. Our dedicated administrators, coaches, umpires and volunteers work tirelessly to make each match, tournament and event a success.</p>
                  <br />
                  <p>We remain committed to our mission — developing competitive cricket, nurturing young talent, and building a stronger cricket community. Whether you're a player, team manager, parent, or cricket fan, there's a place for you at Apex Cricket Association.</p>
                  <br />
                  <p>Stay tuned for more updates, match reports, and announcements from the association. Follow us on social media for live match updates and behind-the-scenes content.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="card p-5">
                <h3 className="font-display font-bold text-primary mb-4">More Articles</h3>
                <div className="space-y-3">
                  {newsArticles.filter(a => a.slug !== slug).slice(0, 4).map(a => (
                    <Link key={a.id} to={`/news/${a.slug}`}
                      className="flex gap-3 group hover:bg-slate-50 -mx-2 px-2 py-2 rounded-xl transition-colors duration-200">
                      <img src={a.featuredImage} alt={a.title}
                        className="w-14 h-12 rounded-lg object-cover flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-secondary mb-0.5">{a.category}</p>
                        <p className="text-xs text-slate-700 font-medium leading-snug group-hover:text-secondary transition-colors duration-200 line-clamp-2">
                          {a.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">{format(new Date(a.publishedAt), 'dd MMM')}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
