import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Trophy, ArrowRight, Play, Calendar, MapPin, Clock,
  Users, Target, Award, Zap, TrendingUp, ChevronRight,
  Dot, Star, CheckCircle2
} from 'lucide-react';
import {
  liveMatches, upcomingMatches, recentResults, tournaments,
  newsArticles, associationStats, sponsors, facilities
} from '../../data/mockData';
import { format } from 'date-fns';

// ============================================================
// Animated Counter Hook
// ============================================================
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const timer = setInterval(() => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress >= 1) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ============================================================
// StatCard
// ============================================================
function StatCard({ value, suffix, label, icon: Icon }: {
  value: number; suffix?: string; label: string; icon: any;
}) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-secondary" />
      </div>
      <div className="text-4xl lg:text-5xl font-black font-display text-primary">
        {count}{suffix}
      </div>
      <div className="text-slate-500 font-medium mt-1 text-sm">{label}</div>
    </div>
  );
}

// ============================================================
// MAIN HOME PAGE
// ============================================================
export default function HomePage() {
  const [activeNewsTab, setActiveNewsTab] = useState('All');
  const newsTabs = ['All', 'News', 'Tournament', 'Academy', 'Announcement'];

  const filteredNews = activeNewsTab === 'All'
    ? newsArticles
    : newsArticles.filter(a => a.category === activeNewsTab);

  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), 'EEE, dd MMM yyyy');
    } catch { return dateStr; }
  };

  return (
    <div>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0B3D2E 0%, #0d4f3a 40%, #16A34A 100%)',
        }}
      >
        {/* Background imagery */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=1920&auto=format&fit=crop&q=80"
            alt="Cricket Stadium"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-20 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Apex Premier League 2026 — Now Live
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-white leading-tight mb-6 animate-fade-up animate-delay-100">
            Elevate the Game.<br />
            <span className="text-accent">Inspire</span> the Future.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animate-delay-200">
            Apex Cricket Association is dedicated to developing competitive cricket, nurturing young talent and building a stronger cricket community.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-300">
            <Link to="/tournaments" className="btn-primary text-base px-8 py-3.5 shadow-gold">
              <Trophy className="w-5 h-5" />
              Explore Tournaments
            </Link>
            <Link to="/membership" className="btn-outline text-base px-8 py-3.5">
              <Users className="w-5 h-5" />
              Join Apex
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce-slow">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIVE MATCH SECTION ===== */}
      <section className="bg-gradient-to-r from-slate-900 to-dark py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {liveMatches.length > 0 ? (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="live-dot" />
                <span className="text-white font-bold text-lg font-display">LIVE NOW</span>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {liveMatches.map((match) => (
                  <div key={match.id} className="card-dark rounded-2xl p-5 border border-red-500/20 relative overflow-hidden">
                    <div className="absolute top-3 right-3">
                      <span className="badge badge-live text-xs px-2 py-0.5">● LIVE</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">{match.tournamentName}</p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <img src={match.teamA.logo} alt={match.teamA.name} className="w-8 h-8 rounded-lg" />
                          <div>
                            <p className="font-bold text-white text-sm font-display">{match.teamA.shortName}</p>
                            <p className="text-accent font-bold text-lg leading-none">{match.teamAScore}</p>
                            <p className="text-slate-400 text-xs">{match.teamAOvers} overs</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-slate-500 font-bold text-sm">VS</div>
                      <div className="flex-1 text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                          <div>
                            <p className="font-bold text-white text-sm font-display">{match.teamB.shortName}</p>
                            <p className="text-slate-300 font-bold text-lg leading-none">{match.teamBScore}</p>
                            <p className="text-slate-400 text-xs">{match.teamBOvers} overs</p>
                          </div>
                          <img src={match.teamB.logo} alt={match.teamB.name} className="w-8 h-8 rounded-lg" />
                        </div>
                      </div>
                    </div>
                    {match.result && (
                      <div className="mt-3 p-2 bg-secondary/10 rounded-lg">
                        <p className="text-secondary text-xs font-semibold text-center">{match.result}</p>
                      </div>
                    )}
                    <Link to={`/matches/${match.id}`}
                      className="mt-3 flex items-center justify-center gap-1 text-xs text-slate-400 hover:text-secondary transition-colors duration-200">
                      View Scorecard <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-400">No live matches currently.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== UPCOMING MATCHES ===== */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-badge">
                <Calendar className="w-4 h-4" /> Fixtures
              </div>
              <h2 className="section-title">Upcoming Matches</h2>
            </div>
            <Link to="/tournaments" className="btn-outline-green btn-sm hidden sm:flex">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {upcomingMatches.map((match) => {
              const dateObj = new Date(match.date);
              return (
                <div key={match.id} className="card card-hover p-4 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-upcoming text-xs">Upcoming</span>
                    <span className="text-xs text-slate-400 font-medium">{match.tournamentName.split(' ').slice(-2).join(' ')}</span>
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      {format(dateObj, 'EEEE')}
                    </p>
                    <p className="text-2xl font-black font-display text-primary">{format(dateObj, 'dd')}</p>
                    <p className="text-xs text-slate-500">{format(dateObj, 'MMMM yyyy')}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="text-center flex-1">
                      <img src={match.teamA.logo} alt={match.teamA.name} className="w-10 h-10 rounded-xl mx-auto mb-1 border border-slate-100" />
                      <p className="text-xs font-bold text-slate-800 leading-tight">{match.teamA.shortName}</p>
                    </div>
                    <div className="text-center px-2">
                      <div className="text-xs font-bold text-slate-400 bg-slate-50 rounded-full px-2 py-0.5">VS</div>
                    </div>
                    <div className="text-center flex-1">
                      <img src={match.teamB.logo} alt={match.teamB.name} className="w-10 h-10 rounded-xl mx-auto mb-1 border border-slate-100" />
                      <p className="text-xs font-bold text-slate-800 leading-tight">{match.teamB.shortName}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-secondary" />
                      {match.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-secondary" />
                      {match.venue}
                    </div>
                  </div>
                  <Link to={`/matches/${match.id}`}
                    className="mt-3 w-full text-center py-2 bg-slate-50 hover:bg-secondary/10 hover:text-secondary rounded-lg text-xs font-semibold text-slate-600 transition-all duration-200 block">
                    Match Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== LATEST RESULTS ===== */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-badge">
                <Trophy className="w-4 h-4" /> Results
              </div>
              <h2 className="section-title">Latest Results</h2>
            </div>
            <Link to="/tournaments" className="btn-outline-green btn-sm hidden sm:flex">
              All Results <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentResults.map((match) => (
              <div key={match.id} className="card p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="text-center flex-shrink-0">
                  <p className="text-xs text-slate-400">{format(new Date(match.date), 'dd MMM')}</p>
                  <p className="text-xs font-semibold text-secondary">{match.tournamentName.split(' ').slice(0, 2).join(' ')}</p>
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex items-center gap-2 flex-1">
                    <img src={match.teamA.logo} alt={match.teamA.name} className="w-8 h-8 rounded-lg border border-slate-100" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{match.teamA.name}</p>
                      <p className={`text-lg font-black font-display ${match.winnerName === match.teamA.name ? 'text-secondary' : 'text-slate-500'}`}>
                        {match.teamAScore}
                      </p>
                      <p className="text-xs text-slate-400">{match.teamAOvers} overs</p>
                    </div>
                  </div>
                  <div className="text-center px-4 flex-shrink-0">
                    <div className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">VS</div>
                  </div>
                  <div className="flex items-center gap-2 flex-1 justify-end text-right">
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{match.teamB.name}</p>
                      <p className={`text-lg font-black font-display ${match.winnerName === match.teamB.name ? 'text-secondary' : 'text-slate-500'}`}>
                        {match.teamBScore}
                      </p>
                      <p className="text-xs text-slate-400">{match.teamBOvers} overs</p>
                    </div>
                    <img src={match.teamB.logo} alt={match.teamB.name} className="w-8 h-8 rounded-lg border border-slate-100" />
                  </div>
                </div>
                <div className="w-full sm:w-auto sm:text-right">
                  <span className="inline-block px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-lg">
                    {match.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOURNAMENTS ===== */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-badge">
                <Trophy className="w-4 h-4" /> Competitions
              </div>
              <h2 className="section-title">Tournaments</h2>
            </div>
            <Link to="/tournaments" className="btn-outline-green btn-sm hidden sm:flex">
              All Tournaments <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tournaments.filter(t => t.status !== 'Completed').slice(0, 3).map((t) => (
              <div key={t.id} className="card card-hover overflow-hidden group">
                <div className="bg-green-gradient p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`badge text-xs mb-2 ${
                        t.status === 'Ongoing' ? 'badge-ongoing' :
                        t.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-300' :
                        'badge-completed'
                      }`}>
                        {t.status}
                      </span>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{t.name}</h3>
                      <p className="text-secondary/70 text-sm mt-1">{t.format}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-2 bg-slate-50 rounded-xl">
                      <p className="text-xl font-black font-display text-primary">{t.teams}</p>
                      <p className="text-xs text-slate-500">Teams</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl">
                      <p className="text-xl font-black font-display text-primary">{t.matches}</p>
                      <p className="text-xs text-slate-500">Matches</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-xl">
                      <p className="text-xl font-black font-display text-primary capitalize text-sm leading-tight">{t.format}</p>
                      <p className="text-xs text-slate-500">Format</p>
                    </div>
                  </div>
                  {t.prize && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-accent/10 rounded-lg px-3 py-2 mb-4">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      Prize: {t.prize}
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
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section bg-green-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-3">
              ACA By The Numbers
            </h2>
            <p className="text-white/70 text-lg">Growing the game, one match at a time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            <StatCard value={associationStats.totalTeams} suffix="+" label="Registered Teams" icon={Users} />
            <StatCard value={associationStats.totalPlayers} suffix="+" label="Players" icon={Target} />
            <StatCard value={associationStats.annualTournaments} label="Annual Tournaments" icon={Trophy} />
            <StatCard value={associationStats.matchesPerYear} suffix="+" label="Matches Per Year" icon={Zap} />
            <StatCard value={associationStats.totalMembers} suffix="+" label="Members" icon={Award} />
            <StatCard value={associationStats.yearsEstablished} suffix="+" label="Years Established" icon={TrendingUp} />
          </div>
        </div>
      </section>

      {/* ===== NEWS & EVENTS ===== */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="section-badge">
                <Star className="w-4 h-4" /> Latest
              </div>
              <h2 className="section-title">News & Events</h2>
            </div>
            <Link to="/news" className="btn-outline-green btn-sm hidden sm:flex">
              All News <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
            {newsTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveNewsTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeNewsTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNews.slice(0, 3).map((article) => (
              <article key={article.id} className="card card-hover overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge bg-secondary/10 text-secondary text-xs">{article.category}</span>
                    <span className="text-xs text-slate-400">{format(new Date(article.publishedAt), 'dd MMM yyyy')}</span>
                  </div>
                  <h3 className="font-display font-bold text-slate-800 text-base leading-snug mb-2 line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <Link to={`/news/${article.slug}`}
                    className="flex items-center gap-1 text-secondary text-sm font-semibold hover:gap-2 transition-all duration-200">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACADEMY SECTION ===== */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge">
                <Award className="w-4 h-4" /> Development
              </div>
              <h2 className="section-title mb-4">Apex Cricket Academy</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">
                Our world-class coaching academy develops the next generation of cricket talent. From beginners to elite players, we have a program for everyone.
              </p>
              <div className="space-y-3 mb-8">
                {['Professional ICC-certified coaches', 'Programs for U10 to U18 age groups', 'Modern training facilities', 'Individual skill development plans', 'Tournament preparation & match experience'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/academy" className="btn-secondary">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/academy#register" className="btn-outline-green">
                  Register Now
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-40">
                  <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&auto=format&fit=crop" alt="Academy" className="w-full h-full object-cover" />
                </div>
                <div className="card p-4 text-center">
                  <p className="text-3xl font-black font-display text-primary">5</p>
                  <p className="text-sm text-slate-500">Programs</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card p-4 text-center">
                  <p className="text-3xl font-black font-display text-secondary">150+</p>
                  <p className="text-sm text-slate-500">Students Enrolled</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-40">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop" alt="Training" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FACILITIES ===== */}
      <section className="section bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-badge">
                <MapPin className="w-4 h-4" /> Venues
              </div>
              <h2 className="section-title">Our Facilities</h2>
            </div>
            <Link to="/facilities" className="btn-outline-green btn-sm hidden sm:flex">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.slice(0, 3).map((facility) => (
              <div key={facility.id} className="card card-hover overflow-hidden group">
                <div className="h-44 overflow-hidden">
                  <img
                    src={facility.images[0]}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display font-bold text-slate-800 text-base">{facility.name}</h3>
                    <span className={`badge text-xs flex-shrink-0 ${facility.status === 'Available' ? 'badge-ongoing' : 'badge-completed'}`}>
                      {facility.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-3">{facility.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    {facility.openingHours.split('|')[0].trim()}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {facility.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">{f}</span>
                    ))}
                    {facility.features.length > 3 && (
                      <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full">+{facility.features.length - 3} more</span>
                    )}
                  </div>
                  {facility.bookingAvailable && (
                    <Link to="/facilities" className="w-full flex items-center justify-center gap-2 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-secondary transition-colors duration-200">
                      Book Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="section-sm bg-white border-t border-slate-100">
        <div className="container-custom">
          <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-wider">Our Proud Sponsors & Partners</p>
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-marquee w-max">
              {[...sponsors, ...sponsors].map((sponsor, i) => (
                <div key={`${sponsor.id}-${i}`}
                  className="flex flex-col items-center gap-2 px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group cursor-pointer flex-shrink-0">
                  <img src={sponsor.logo} alt={sponsor.name} className="w-12 h-12 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  <div className="text-center">
                    <p className="text-xs font-semibold text-slate-600 group-hover:text-secondary transition-colors">{sponsor.name}</p>
                    <p className="text-xs text-slate-400">{sponsor.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOIN APEX CTA ===== */}
      <section className="section bg-green-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595872994752-1eb0f21f9bb6?w=1920&auto=format&fit=crop&q=60"
            alt="Cricket Community"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-custom relative text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              Be Part of Something Bigger
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white mb-4">
              Join the Apex<br />Cricket Family
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Become part of the Apex cricket community. Access exclusive benefits, connect with players and teams, and be at the heart of competitive cricket.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/membership" className="btn-primary text-base px-8 py-3.5 shadow-gold">
                <Users className="w-5 h-5" />
                Become a Member
              </Link>
              <Link to="/contact" className="btn-outline text-base px-8 py-3.5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
