import { Users, Trophy, Flag, Activity } from 'lucide-react';
import { teams, players, tournaments, upcomingMatches } from '../../data/mockData';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Members', value: '1,245', icon: Users, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Registered Teams', value: teams.length.toString(), icon: Flag, color: 'text-emerald-500', bg: 'bg-emerald-100' },
    { title: 'Active Players', value: players.length.toString(), icon: Users, color: 'text-purple-500', bg: 'bg-purple-100' },
    { title: 'Ongoing Tournaments', value: tournaments.filter(t => t.status === 'Ongoing').length.toString(), icon: Trophy, color: 'text-amber-500', bg: 'bg-amber-100' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
          <p className="text-slate-500">Welcome back to the ACA Admin Portal.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex items-start justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity / Pending Requests Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-200">
            <h3 className="font-bold text-slate-800">Pending Approvals</h3>
          </div>
          <div className="p-5 text-center text-slate-500 py-12">
            No pending membership or academy applications.
          </div>
        </div>

        {/* Upcoming Matches */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Upcoming Fixtures</h3>
            <a href="/admin/matches" className="text-sm text-secondary font-medium">View All</a>
          </div>
          <div className="divide-y divide-slate-100">
            {upcomingMatches.slice(0, 3).map(match => (
              <div key={match.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-800">{match.teamA.name} vs {match.teamB.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{match.date} • {match.venue}</p>
                </div>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                  Upcoming
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
