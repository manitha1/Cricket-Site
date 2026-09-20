import { useState } from 'react';
import { Plus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { teams } from '../../data/mockData';

export default function AdminTeamsPage() {
  const [search, setSearch] = useState('');

  const filtered = teams.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.captain.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Teams</h2>
          <p className="text-slate-500">Manage registered teams and squads.</p>
        </div>
        <button className="btn-secondary">
          <Plus className="w-4 h-4" />
          Add Team
        </button>
      </div>

      <div className="card overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between bg-slate-50/50">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search teams or captains..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
            />
          </div>
          <select className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-secondary">
            <option>All Divisions</option>
            <option>Premier League</option>
            <option>Division A</option>
            <option>Division B</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Team Name</th>
                <th className="px-6 py-4 font-semibold">Division</th>
                <th className="px-6 py-4 font-semibold">Captain</th>
                <th className="px-6 py-4 font-semibold">Players</th>
                <th className="px-6 py-4 font-semibold">Founded</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(t => (
                <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={t.logo} alt={t.name} className="w-8 h-8 rounded-lg border border-slate-200" />
                      <p className="font-bold text-slate-800">{t.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">
                      {t.division}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{t.captain}</td>
                  <td className="px-6 py-4 text-slate-600">{t.playerCount}</td>
                  <td className="px-6 py-4 text-slate-600">{t.founded || '—'}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No teams found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
