import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Trophy, Flag, Activity, Home, Menu,
  MessageSquare, Settings, LogOut, BookOpen, MapPin, 
  Image as ImageIcon, Briefcase, GraduationCap
} from 'lucide-react';

const sidebarLinks = [
  { section: 'Dashboard' },
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  
  { section: 'Cricket Management' },
  { name: 'Tournaments', href: '/admin/tournaments', icon: Trophy },
  { name: 'Matches', href: '/admin/matches', icon: Activity },
  { name: 'Teams', href: '/admin/teams', icon: Flag },
  { name: 'Players', href: '/admin/players', icon: Users },
  
  { section: 'Administration' },
  { name: 'Members', href: '/admin/members', icon: Users },
  { name: 'Academy', href: '/admin/academy', icon: GraduationCap },
  { name: 'Facilities', href: '/admin/facilities', icon: MapPin },
  
  { section: 'Content' },
  { name: 'News & Events', href: '/admin/news', icon: BookOpen },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Sponsors', href: '/admin/sponsors', icon: Briefcase },
  
  { section: 'System' },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-dark-card border-r border-dark-border 
        flex flex-col transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-6 border-b border-dark-border bg-dark">
          <Link to="/" className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <ShieldIcon className="w-5 h-5 text-accent" />
            </div>
            <span className="font-display font-bold">ACA Admin</span>
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-hide">
          {sidebarLinks.map((link, index) => {
            if (link.section) {
              return (
                <div key={index} className="sidebar-section">
                  {link.section}
                </div>
              );
            }
            
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            return (
              <Link 
                key={link.name} 
                to={link.href!}
                onClick={() => setSidebarOpen(false)}
                className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-dark-border">
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors w-full px-2 py-2">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-semibold">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-slate-800 hidden sm:block">
              {sidebarLinks.find(l => l.href === location.pathname)?.name || 'Admin Portal'}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-slate-500 hover:text-primary font-medium flex items-center gap-2 hidden sm:flex">
              <Home className="w-4 h-4" /> View Site
            </Link>
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
              A
            </div>
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-x-hidden p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Inline icon just for the sidebar header
function ShieldIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/>
    </svg>
  );
}
