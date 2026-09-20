import { BrowserRouter, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public Layouts & Pages
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import TournamentsPage from './pages/public/TournamentsPage';
import TournamentDetailPage from './pages/public/TournamentDetailPage';
import TeamsPage from './pages/public/TeamsPage';
import TeamDetailPage from './pages/public/TeamDetailPage';
import PlayersPage from './pages/public/PlayersPage';
import PlayerProfilePage from './pages/public/PlayerProfilePage';
import AcademyPage from './pages/public/AcademyPage';
import FacilitiesPage from './pages/public/FacilitiesPage';
import NewsPage from './pages/public/NewsPage';
import NewsArticlePage from './pages/public/NewsArticlePage';
import GalleryPage from './pages/public/GalleryPage';
import MembershipPage from './pages/public/MembershipPage';
import ContactPage from './pages/public/ContactPage';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Admin Layouts & Pages
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

// Placeholder pages
function MatchDetailPage() {
  const { id } = useParams();
  return (
    <div className="page-hero">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-black font-display text-white">Match #{id}</h1>
        <p className="text-white/70 mt-2">Full scorecard and match details coming soon.</p>
      </div>
    </div>
  );
}

function AdminPlaceholder() {
  const location = useLocation();
  const title = location.pathname.split('/').pop()?.replace('-', ' ') || 'Admin Page';
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-800 capitalize mb-2">{title} Management</h2>
      <p className="text-slate-500">This module is currently under development.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-black font-display text-primary mb-4">404</div>
        <h2 className="text-2xl font-bold text-slate-700 mb-2">Page not found</h2>
        <p className="text-slate-500 mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-secondary">Back to Home</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ className: 'font-sans text-sm', duration: 4000 }} />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Public website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/tournaments/:id" element={<TournamentDetailPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:id" element={<TeamDetailPage />} />
          <Route