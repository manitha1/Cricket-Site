import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Calendar, Users, Zap, Award } from 'lucide-react';
import { tournaments } from '../../data/mockData';
import { format } from 'date-fns';

const categories = ['All', 'Premier League', 'Division A', 'Division B', 'Youth Cricket', 'Corporate Cricket', 'Women'];

const statusColor: Record<string, string> = {
  Ongoing: 'badge-ongoing',
  Upcoming: 'bg-blue-100 text-blue-700',
  Completed: 'badge-completed',
};

export default function TournamentsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  const filtered = tournaments.filter(t =>
    (activeCategory === 'All' || t.category === activeCategory) &&
    (activeStatus === 'All' || t.status === activeStatus)
  );

  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Tournaments</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Tournaments</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Explore all Apex Cricket Association tournaments — from the Premier League to Youth Cricket.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                }`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mb-8">
            {['All', 'Ongoing', 'Upcoming', 'Completed'].map(s => (
              <button key={s} onClick={() => setActiveStatus(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  activeStatus === s ? 'bg-secondary text-white border-secondary' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-secondary hover:text-secondary'
                }`}>
                {s}
              </button>
            ))}
          </div>

          {/* Tournament Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">No tournaments found.</div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(t => (
                <div key={t.id} className="card card-hover overflow-hidden group">
                  <div className="bg-green-gradient p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-10 translate-x-10" />
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <span className={`badge text-xs mb-2 ${statusColor[t.status] || 'badge-completed'}`}>
                          {t.status === 'Ongoing' && <span className="w-1.5 h-1.5 rounded-full bg-current mr-1 animate-pulse inline-block" />}
                          {t.status}
                        </span>
                        <h3 className="font-display font-bold text-white text-xl leading-tight">{t.name}</h3>
                        <p className="text-secondary/70 text-sm mt-1">{t.category} · {t.format}</p>
                      </div>
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 ml-3">
                        <Trophy className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">{t.description}</p>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="text-center bg-slate-50 rounded-xl p-2">
                        <p className="text-xl font-black font-display text-primary">{t.teams}</p>
                        <p className="text-xs text-slate-400">Teams</p>
                      </div>
                      <div className="text-center bg-slate-50 rounded-xl p-2">
                        <p className="text-xl font-black font-display text-primary">{t.matches}</p>
                        <p className="text-xs text-slate-400">Matches</p>
                      </div>
                      <div className="col-span-2 bg-slate-50 rounded-xl p-2 text-center">
                        <p className="text-xs font-bold text-slate-700">{format(new Date(t.startDate), 'dd MMM')}</p>
                        <p className="text-xs text-slate-400">to {format(new Date(t.endDate), 'dd MMM yyyy')}</p>
                      </div>
                    </div>
                    {t.prize && (
                      <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-accent/10 rounded-lg px-3 py-2 mb-4">
                        <Award className="w-3.5 h-3.5 text-accent" />
                        Prize Pool: {t.prize}
                      </div>
                    )}
                    <Link to={`/tournaments/${t.id}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-secondary transition-colors duration-200">
                      View Tournament <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
