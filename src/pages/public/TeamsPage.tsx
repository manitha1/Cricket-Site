import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Filter } from 'lucide-react';
import { teams } from '../../data/mockData';
import type { TeamDivision } from '../../types';

const divisions: (TeamDivision | 'All')[] = ['All', 'Premier League', 'Division A', 'Division B', 'Women', 'Youth', 'Corporate'];

export default function TeamsPage() {
  const [search, setSearch] = useState('');
  const [division, setDivision] = useState<string>('All');

  const filtered = teams.filter(t =>
    (division === 'All' || t.division === division) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.captain.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Teams</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Teams</h1>
          <p className="text-white/75 text-lg">Explore all registered teams competing in ACA tournaments.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search teams or captains..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="form-input pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {divisions.map(d => (
                <button key={d} onClick={() => setDivision(d)}
                  className={`px-3 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    division === d ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                  }`}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Teams Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No teams found.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map(team => (
                <div key={team.id} className="card card-hover group overflow-hidden">
                  {/* Header */}
                  <div className="bg-green-gradient p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/5 -translate-y-6 translate-x-6" />
                    <div className="flex items-center gap-3">
                      <img src={team.logo} alt={team.name} className="w-14 h-14 rounded-xl border-2 border-white/20" />
                      <div>
                        <h3 className="font-display font-bold text-white text-base leading-tight">{team.name}</h3>
                        <p className="text-secondary/80 text-xs mt-0.5">{team.division}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs">Captain</span>
                        <span className="font-semibold text-slate-700 text-xs">{team.captain}</span>
                      </div>
                      {team.coach && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-xs">Coach</span>
                          <span className="font-semibold text-slate-700 text-xs">{team.coach}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs">Players</span>
                        <span className="font-semibold text-slate-700 text-xs">{team.playerCount}</span>
                      </div>
                      {team.founded && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-xs">Founded</span>
                          <span className="font-semibold text-slate-700 text-xs">{team.founded}</span>
                        </div>
                      )}
                    </div>
                    <Link to={`/teams/${team.id}`}
                      className="w-full flex items-center justify-center py-2 bg-slate-50 hover:bg-secondary/10 hover:text-secondary rounded-xl text-xs font-semibold text-slate-600 transition-all duration-200">
                      View Team
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
