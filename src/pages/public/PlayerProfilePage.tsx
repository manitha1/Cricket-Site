import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Flag, User, Activity } from 'lucide-react';
import { players } from '../../data/mockData';
import { format } from 'date-fns';

export default function PlayerProfilePage() {
  const { id } = useParams();
  const player = players.find(p => p.id === id) || players[0];
  const s = player.stats;

  const battingStats = [
    { label: 'Matches', value: s.matches },
    { label: 'Innings', value: s.innings },
    { label: 'Runs', value: s.runs },
    { label: 'Highest Score', value: s.highestScore },
    { label: 'Average', value: s.battingAverage },
    { label: 'Strike Rate', value: s.strikeRate },
    { label: '50s', value: s.fifties },
    { label: '100s', value: s.hundreds },
    { label: 'Fours', value: s.fours },
    { label: 'Sixes', value: s.sixes },
  ];

  const bowlingStats = [
    { label: 'Wickets', value: s.wickets },
    { label: 'Average', value: s.bowlingAverage || '—' },
    { label: 'Economy', value: s.economy || '—' },
    { label: 'Best Bowling', value: s.bestBowling },
    { label: '5-Wicket Hauls', value: s.fiveWicketHauls },
  ];

  const fieldingStats = [
    { label: 'Catches', value: s.catches },
    { label: 'Stumpings', value: s.stumpings },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-green-gradient pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/players" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-6 transition-colors duration-200">
            <ArrowLeft className="w-4 h-4" /> All Players
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <img src={player.photo} alt={player.name} className="w-24 h-24 rounded-2xl border-4 border-white/20" />
              {player.jerseyNumber && (
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary text-xs font-black">#{player.jerseyNumber}</span>
                </div>
              )}
            </div>
            <div>
              <span className="badge bg-white/10 text-white/80 text-xs mb-2">{player.role}</span>
              <h1 className="text-3xl md:text-4xl font-black font-display text-white mb-1">{player.name}</h1>
              <p className="text-white/70">{player.teamName} · {player.nationality}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Batting */}
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-secondary" />
                <h2 className="font-display font-bold text-primary text-xl">Batting Statistics</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 divide-x divide-y divide-slate-100">
                {battingStats.map(stat => (
                  <div key={stat.label} className="p-4 text-center">
                    <p className="text-2xl font-black font-display text-primary">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bowling */}
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" />
                <h2 className="font-display font-bold text-primary text-xl">Bowling Statistics</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-0 divide-x divide-y divide-slate-100">
                {bowlingStats.map(stat => (
                  <div key={stat.label} className="p-4 text-center">
                    <p className="text-2xl font-black font-display text-primary">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fielding */}
            <div className="card overflow-hidden">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-display font-bold text-primary text-xl">Fielding Statistics</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-slate-100">
                {fieldingStats.map(stat => (
                  <div key={stat.label} className="p-4 text-center">
                    <p className="text-2xl font-black font-display text-primary">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="card p-5">
              <h3 className="font-display font-bold text-primary mb-4">Player Details</h3>
              <div className="space-y-3 text-sm">
                {[
                  { icon: User, label: 'Full Name', value: player.name },
                  { icon: Flag, label: 'Nationality', value: player.nationality },
                  { icon: Calendar, label: 'Date of Birth', value: format(new Date(player.dateOfBirth), 'dd MMMM yyyy') },
                  { icon: Activity, label: 'Role', value: player.role },
                  { icon: Activity, label: 'Batting Style', value: player.battingStyle },
                  { icon: Activity, label: 'Bowling Style', value: player.bowlingStyle },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <item.icon className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400">{item.label}</p>
                      <p className="font-semibold text-slate-700 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link to={`/teams/${player.teamId}`}
              className="card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-200 block group">
              <img src={`https://ui-avatars.com/api/?name=${player.teamName.slice(0, 2)}&background=0B3D2E&color=F5B301&size=48`}
                alt={player.teamName} className="w-12 h-12 rounded-xl" />
              <div>
                <p className="text-xs text-slate-400">Team</p>
                <p className="font-bold text-slate-800 group-hover:text-secondary transition-colors duration-200">{player.teamName}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
