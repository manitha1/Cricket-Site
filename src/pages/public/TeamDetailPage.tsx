import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, MapPin } from 'lucide-react';
import { teams, players, recentResults } from '../../data/mockData';
import { format } from 'date-fns';

export default function TeamDetailPage() {
  const { id } = useParams();
  const team = teams.find(t => t.id === id) || teams[0];
  const teamPlayers = players.filter(p => p.teamId === team.id);

  return (
    <div>
      <section className="bg-green-gradient pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/teams" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" /> All Teams
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <img src={team.logo} alt={team.name} className="w-20 h-20 rounded-2xl border-2 border-white/20" />
            <div>
              <span className="badge bg-white/10 text-white/80 text-xs mb-2">{team.division}</span>
              <h1 className="text-3xl md:text-4xl font-black font-display text-white mb-1">{team.name}</h1>
              <p className="text-white/70">{team.playerCount} Players · Founded {team.founded}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Players */}
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-display font-bold text-primary text-xl">Squad</h2>
              </div>
              {teamPlayers.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {teamPlayers.map(player => (
                    <Link key={player.id} to={`/players/${player.id}`}
                      className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors duration-200">
                      <img src={player.photo} alt={player.name} className="w-10 h-10 rounded-xl border border-slate-100" />
                      <div className="flex-1">
                        <p className="font-bold text-slate-800 text-sm">{player.name}</p>
                        <p className="text-xs text-secondary">{player.role}</p>
                      </div>
                      <div className="text-right text-xs text-slate-500">
                        <p>{player.battingStyle} Bat</p>
                        <p>{player.bowlingStyle !== 'N/A' ? player.bowlingStyle : '—'}</p>
                      </div>
                      <div className="hidden sm:grid grid-cols-3 gap-3 text-center ml-4">
                        <div>
                          <p className="font-bold text-slate-800">{player.stats.matches}</p>
                          <p className="text-xs text-slate-400">M</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{player.stats.runs}</p>
                          <p className="text-xs text-slate-400">Runs</p>
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{player.stats.wickets}</p>
                          <p className="text-xs text-slate-400">Wkts</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-slate-400 text-sm">No player data available.</div>
              )}
            </div>

            {/* Recent Results */}
            <div className="card p-5">
              <h2 className="font-display font-bold text-primary text-xl mb-4">Recent Matches</h2>
              <div className="space-y-3">
                {recentResults.filter(m => m.teamA.id === team.id || m.teamB.id === team.id).slice(0, 3).map(match => (
                  <div key={match.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm">
                    <span className="text-xs text-slate-400 w-16 flex-shrink-0">{format(new Date(match.date), 'dd MMM')}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-700">{match.teamA.name} vs {match.teamB.name}</p>
                      <p className="text-xs text-slate-400">{match.teamAScore} — {match.teamBScore}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                      match.winnerName === team.name ? 'bg-secondary/10 text-secondary' : 'bg-red-50 text-red-500'
                    }`}>
                      {match.winnerName === team.name ? 'Won' : 'Lost'}
                    </span>
                  </div>
                ))}
                {recentResults.filter(m => m.teamA.id === team.id || m.teamB.id === team.id).length === 0 && (
                  <p className="text-slate-400 text-sm text-center py-4">No recent matches.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="font-display font-bold text-primary mb-4">Team Info</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Captain', value: team.captain },
                  { label: 'Vice Captain', value: team.viceCaptain || '—' },
                  { label: 'Coach', value: team.coach || '—' },
                  { label: 'Manager', value: team.manager || '—' },
                  { label: 'Home Ground', value: team.homeGround || '—' },
                  { label: 'Division', value: team.division },
                  { label: 'Players', value: String(team.playerCount) },
                ].map(item => (
                  <div key={item.label} className="flex items-start justify-between gap-2">
                    <span className="text-slate-400 text-xs">{item.label}</span>
                    <span className="font-semibold text-slate-700 text-xs text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
