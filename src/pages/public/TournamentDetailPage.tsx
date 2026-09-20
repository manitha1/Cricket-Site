import { useParams, Link } from 'react-router-dom';
import { Trophy, Calendar, MapPin, Users, ArrowLeft, Clock } from 'lucide-react';
import { tournaments, upcomingMatches, recentResults, pointsTable, teams, players } from '../../data/mockData';
import { format } from 'date-fns';
import { useState } from 'react';

export default function TournamentDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const tournament = tournaments.find(t => t.id === id) || tournaments[0];
  const tabs = ['Overview', 'Matches', 'Points Table', 'Teams', 'Players', 'Results'];

  return (
    <div>
      {/* Header */}
      <section className="bg-green-gradient pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/tournaments" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" /> All Tournaments
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-10 h-10 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`badge text-xs ${
                  tournament.status === 'Ongoing' ? 'badge-ongoing' :
                  tournament.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-300' : 'badge-completed'
                }`}>
                  {tournament.status === 'Ongoing' && <span className="w-1.5 h-1.5 rounded-full bg-current mr-1 animate-pulse inline-block" />}
                  {tournament.status}
                </span>
                <span className="badge bg-white/10 text-white/80 text-xs">{tournament.format}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black font-display text-white mb-1">{tournament.name}</h1>
              <p className="text-white/70">{tournament.organizer} · Season {tournament.season}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-0 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeTab === tab.toLowerCase().replace(' ', '-')
                    ? 'border-secondary text-secondary'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="card p-6">
                  <h2 className="font-display font-bold text-primary text-xl mb-4">Tournament Overview</h2>
                  <p className="text-slate-600 leading-relaxed">{tournament.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-3xl font-black font-display text-primary">{tournament.teams}</p>
                      <p className="text-xs text-slate-500 mt-1">Teams</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-3xl font-black font-display text-primary">{tournament.matches}</p>
                      <p className="text-xs text-slate-500 mt-1">Matches</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-xl font-black font-display text-secondary">{tournament.format}</p>
                      <p className="text-xs text-slate-500 mt-1">Format</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-xl">
                      <p className="text-xl font-black font-display text-accent text-sm">{tournament.season}</p>
                      <p className="text-xs text-slate-500 mt-1">Season</p>
                    </div>
                  </div>
                </div>

                {/* Quick Points Table Preview */}
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display font-bold text-primary text-xl">Points Table</h2>
                    <button onClick={() => setActiveTab('points-table')} className="text-secondary text-sm font-semibold hover:underline">View Full</button>
                  </div>
                  <div className="table-wrapper">
                    <table className="table">
                      <thead><tr>
                        <th>Pos</th><th>Team</th><th>P</th><th>W</th><th>L</th><th>Pts</th><th>NRR</th>
                      </tr></thead>
                      <tbody>
                        {pointsTable.slice(0, 5).map(row => (
                          <tr key={row.position}>
                            <td className="font-bold text-slate-500">{row.position}</td>
                            <td>
                              <div className="flex items-center gap-2">
                                <img src={row.team.logo} alt={row.team.name} className="w-6 h-6 rounded" />
                                <span className="font-semibold text-slate-800">{row.team.name}</span>
                              </div>
                            </td>
                            <td>{row.played}</td>
                            <td className="text-secondary font-semibold">{row.won}</td>
                            <td className="text-red-500">{row.lost}</td>
                            <td className="font-bold text-primary">{row.points}</td>
                            <td className={row.nrr.startsWith('+') ? 'text-secondary font-semibold' : 'text-red-500 font-semibold'}>{row.nrr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="card p-5">
                  <h3 className="font-display font-bold text-primary mb-4">Tournament Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2.5 text-slate-600">
                      <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400">Start Date</p>
                        <p className="font-semibold">{format(new Date(tournament.startDate), 'dd MMMM yyyy')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-600">
                      <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400">End Date</p>
                        <p className="font-semibold">{format(new Date(tournament.endDate), 'dd MMMM yyyy')}</p>
                      </div>
                    </div>
                    {tournament.venue && (
                      <div className="flex items-center gap-2.5 text-slate-600">
                        <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-slate-400">Venue</p>
                          <p className="font-semibold">{tournament.venue}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-2.5 text-slate-600">
                      <Users className="w-4 h-4 text-secondary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400">Organizer</p>
                        <p className="font-semibold">{tournament.organizer}</p>
                      </div>
                    </div>
                    {tournament.prize && (
                      <div className="p-3 bg-accent/10 rounded-xl text-center">
                        <p className="text-xs text-slate-500 mb-1">Prize Pool</p>
                        <p className="font-black font-display text-amber-700 text-xl">{tournament.prize}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* POINTS TABLE */}
          {activeTab === 'points-table' && (
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-display font-bold text-primary text-xl">{tournament.name} — Points Table</h2>
              </div>
              <div className="table-wrapper">
                <table className="table">
                  <thead><tr>
                    <th>Pos</th><th>Team</th><th>Played</th><th>Won</th><th>Lost</th><th>N/R</th><th>Points</th><th>NRR</th>
                  </tr></thead>
                  <tbody>
                    {pointsTable.map(row => (
                      <tr key={row.position} className={row.position <= 4 ? 'bg-secondary/5' : ''}>
                        <td>
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            row.position <= 2 ? 'bg-secondary text-white' :
                            row.position <= 4 ? 'bg-primary/10 text-primary' : 'text-slate-500'
                          }`}>{row.position}</span>
                        </td>
                        <td>
                          <div className="flex items-center gap-2">
                            <img src={row.team.logo} alt={row.team.name} className="w-7 h-7 rounded-lg" />
                            <div>
                              <p className="font-bold text-slate-800 text-sm">{row.team.name}</p>
                              <p className="text-xs text-slate-400">{row.team.division}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center">{row.played}</td>
                        <td className="text-center font-bold text-secondary">{row.won}</td>
                        <td className="text-center font-bold text-red-500">{row.lost}</td>
                        <td className="text-center">{row.noResult}</td>
                        <td className="text-center">
                          <span className="font-black font-display text-primary text-lg">{row.points}</span>
                        </td>
                        <td className={`text-center font-bold ${row.nrr.startsWith('+') ? 'text-secondary' : 'text-red-500'}`}>{row.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 text-xs text-slate-400 flex gap-4">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-secondary inline-block" /> Top 2 — Playoff</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary/10 inline-block" /> Top 4 — Semi Finals</span>
              </div>
            </div>
          )}

          {/* TEAMS */}
          {activeTab === 'teams' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teams.slice(0, tournament.teams).map(team => (
                <Link key={team.id} to={`/teams/${team.id}`} className="card card-hover p-5 text-center group">
                  <img src={team.logo} alt={team.name} className="w-16 h-16 rounded-2xl mx-auto mb-3 border-2 border-slate-100 group-hover:border-secondary transition-colors duration-200" />
                  <h3 className="font-display font-bold text-slate-800 text-sm">{team.name}</h3>
                  <p className="text-secondary text-xs mt-1">{team.division}</p>
                  <p className="text-slate-400 text-xs mt-1">Captain: {team.captain}</p>
                  <p className="text-slate-400 text-xs">{team.playerCount} Players</p>
                </Link>
              ))}
            </div>
          )}

          {/* MATCHES (Upcoming) */}
          {activeTab === 'matches' && (
            <div className="space-y-3">
              <h2 className="font-display font-bold text-primary text-xl mb-4">Upcoming Fixtures</h2>
              {upcomingMatches.map(match => (
                <Link key={match.id} to={`/matches/${match.id}`} className="card p-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200 block">
                  <div className="text-center flex-shrink-0 w-16">
                    <p className="text-xs font-semibold text-slate-400">{format(new Date(match.date), 'EEE')}</p>
                    <p className="text-2xl font-black font-display text-primary">{format(new Date(match.date), 'dd')}</p>
                    <p className="text-xs text-slate-400">{format(new Date(match.date), 'MMM')}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <img src={match.teamA.logo} alt={match.teamA.name} className="w-8 h-8 rounded-lg" />
                      <span className="font-bold text-slate-800 text-sm">{match.teamA.name}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400 px-2 py-1 bg-slate-100 rounded-full">VS</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{match.teamB.name}</span>
                      <img src={match.teamB.logo} alt={match.teamB.name} className="w-8 h-8 rounded-lg" />
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 hidden sm:block">
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-1"><Clock className="w-3 h-3" />{match.time}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500"><MapPin className="w-3 h-3" />{match.venue}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* RESULTS */}
          {activeTab === 'results' && (
            <div className="space-y-3">
              <h2 className="font-display font-bold text-primary text-xl mb-4">Recent Results</h2>
              {recentResults.map(match => (
                <div key={match.id} className="card p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-center flex-shrink-0 w-16">
                    <p className="text-xs text-slate-400">{format(new Date(match.date), 'dd MMM')}</p>
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <img src={match.teamA.logo} alt={match.teamA.name} className="w-8 h-8 rounded-lg" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{match.teamA.name}</p>
                        <p className={`text-lg font-black font-display ${match.winnerName === match.teamA.name ? 'text-secondary' : 'text-slate-400'}`}>{match.teamAScore}</p>
                        <p className="text-xs text-slate-400">{match.teamAOvers} ov</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-400">VS</span>
                    <div className="flex items-center gap-2">
                      <img src={match.teamB.logo} alt={match.teamB.name} className="w-8 h-8 rounded-lg" />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{match.teamB.name}</p>
                        <p className={`text-lg font-black font-display ${match.winnerName === match.teamB.name ? 'text-secondary' : 'text-slate-400'}`}>{match.teamBScore}</p>
                        <p className="text-xs text-slate-400">{match.teamBOvers} ov</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-lg">{match.result}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* PLAYERS */}
          {activeTab === 'players' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {players.map(player => (
                <Link key={player.id} to={`/players/${player.id}`} className="card card-hover p-4 group">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={player.photo} alt={player.name} className="w-12 h-12 rounded-xl border border-slate-100" />
                    <div>
                      <h3 className="font-display font-bold text-slate-800 text-sm group-hover:text-secondary transition-colors duration-200">{player.name}</h3>
                      <p className="text-xs text-secondary">{player.role}</p>
                      <p className="text-xs text-slate-400">{player.teamName}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center border-t border-slate-100 pt-3">
                    <div>
                      <p className="text-base font-black font-display text-primary">{player.stats.runs}</p>
                      <p className="text-xs text-slate-400">Runs</p>
                    </div>
                    <div>
                      <p className="text-base font-black font-display text-primary">{player.stats.wickets}</p>
                      <p className="text-xs text-slate-400">Wkts</p>
                    </div>
                    <div>
                      <p className="text-base font-black font-display text-primary">{player.stats.matches}</p>
                      <p className="text-xs text-slate-400">Matches</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
