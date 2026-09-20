import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { players } from '../../data/mockData';
import type { PlayerRole } from '../../types';

const roles: (PlayerRole | 'All')[] = ['All', 'Batsman', 'Bowler', 'All-Rounder', 'Wicket Keeper'];

export default function PlayersPage() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState<string>('All');
  const [team, setTeam] = useState('All');

  const teamNames = ['All', ...Array.from(new Set(players.map(p => p.teamName)))];
  const filtered = players.filter(p =>
    (role === 'All' || p.role === role) &&
    (team === 'All' || p.teamName === team) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Players</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Players</h1>
          <p className="text-white/75 text-lg">Browse the complete ACA player directory.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search players..." value={search}
                onChange={e => setSearch(e.target.value)} className="form-input pl-10" />
            </div>
            <select value={role} onChange={e => setRole(e.target.value)} className="form-select sm:w-44">
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={team} onChange={e => setTeam(e.target.value)} className="form-select sm:w-52">
              {teamNames.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <p className="text-sm text-slate-400 mb-5">{filtered.length} players found</p>

          {/* Players Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(player => (
              <Link key={player.id} to={`/players/${player.id}`} className="card card-hover group overflow-hidden">
                {/* Header */}
                <div className="bg-green-gradient p-4 flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/5 -translate-y-4 translate-x-4" />
                  <img src={player.photo} alt={player.name}
                    className="w-14 h-14 rounded-xl border-2 border-white/20 flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-white text-sm group-hover:text-accent transition-colors duration-200">
                      {player.name}
                    </h3>
                    <p className="text-secondary/70 text-xs">{player.role}</p>
                    <p className="text-white/60 text-xs">{player.teamName}</p>
                  </div>
                  {player.jerseyNumber && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white text-xs font-black">#{player.jerseyNumber}</span>
                    </div>
                  )}
                </div>
                {/* Stats */}
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-xl font-black font-display text-primary">{player.stats.runs}</p>
                      <p className="text-xs text-slate-400">Runs</p>
                    </div>
                    <div>
                      <p className="text-xl font-black font-display text-primary">{player.stats.wickets}</p>
                      <p className="text-xs text-slate-400">Wickets</p>
                    </div>
                    <div>
                      <p className="text-xl font-black font-display text-primary">{player.stats.matches}</p>
                      <p className="text-xs text-slate-400">Matches</p>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 mt-3 pt-3 text-xs text-slate-500 space-y-1">
                    <div className="flex justify-between">
                      <span>Avg</span><span className="font-semibold">{player.stats.battingAverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SR</span><span className="font-semibold">{player.stats.strikeRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Batting</span><span className="font-semibold">{player.battingStyle}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p>No players found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
