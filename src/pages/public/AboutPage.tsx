import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle2, Users, Trophy, Shield } from 'lucide-react';
import { committee } from '../../data/mockData';

const objectives = [
  'Promote cricket at all levels across the community',
  'Develop young players through structured coaching programs',
  'Organize competitive tournaments for all skill levels',
  'Support cricket clubs with resources and guidance',
  'Develop qualified coaches and cricket officials',
  'Provide world-class facilities for training and matches',
  'Encourage sportsmanship, fair play and teamwork',
  'Build a strong, inclusive cricket community',
];

const timeline = [
  { year: '2014', event: 'Apex Cricket Association founded with 5 founding teams' },
  { year: '2015', event: 'First Apex Premier League conducted with 8 teams' },
  { year: '2017', event: 'Academy established with Level 3 certified coaching staff' },
  { year: '2019', event: 'Main Cricket Ground upgraded with floodlights and turf wicket' },
  { year: '2021', event: 'Membership surpassed 500 members; Women\'s cricket division launched' },
  { year: '2023', event: 'Indoor cricket facility opened; Corporate Sixes tournament inaugurated' },
  { year: '2026', event: '12th anniversary with 28 teams, 1,245+ members, 8 annual tournaments' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; About</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">About ACA</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Learn about our history, vision, and the dedicated people behind Apex Cricket Association.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge">
                <Shield className="w-4 h-4" /> Our Story
              </div>
              <h2 className="section-title mb-5">Who We Are</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Apex Cricket Association (ACA) was founded in 2014 with a simple but powerful vision — to create a professional, community-driven cricket organisation that develops players, promotes competitive cricket and strengthens the cricket community.
                </p>
                <p>
                  Over the past 12 years, we have grown from a small group of cricket enthusiasts to a fully-fledged cricket association with over 28 registered teams, 1,245 members and 8 annual tournaments, including our flagship Apex Premier League.
                </p>
                <p>
                  Our association operates a world-class cricket academy, manages the Apex Cricket Ground and Indoor Nets facility, and provides a platform for players from grassroots to elite levels to compete and develop their skills.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-56">
                <img src="https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=600&auto=format&fit=crop" alt="ACA Ground" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-28">
                  <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop" alt="Academy" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-24">
                  <img src="https://images.unsplash.com/photo-1595872994752-1eb0f21f9bb6?w=600&auto=format&fit=crop" alt="Community" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-secondary">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold font-display text-primary mb-4">Our Vision</h2>
              <blockquote className="text-slate-600 text-lg leading-relaxed italic border-l-2 border-secondary/30 pl-4">
                "To become a leading cricket association that develops players, promotes competitive cricket and strengthens the cricket community."
              </blockquote>
            </div>
            <div className="card p-8 border-l-4 border-accent">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold font-display text-primary mb-4">Our Mission</h2>
              <blockquote className="text-slate-600 text-lg leading-relaxed italic border-l-2 border-accent/30 pl-4">
                "To provide professional opportunities, quality facilities and structured competitions for players of all levels."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Trophy className="w-4 h-4" /> Goals</div>
            <h2 className="section-title">Our Objectives</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="card p-5 group hover:border-secondary border border-transparent transition-colors duration-200">
                <CheckCircle2 className="w-6 h-6 text-secondary mb-3 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-slate-700 text-sm font-medium leading-snug">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Trophy className="w-4 h-4" /> History</div>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary to-primary/20" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-black font-display text-secondary text-sm">{item.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-green mt-0.5" />
                  </div>
                  <div className="card p-4 flex-1 -mt-1">
                    <p className="text-slate-700 text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Users className="w-4 h-4" /> Leadership</div>
            <h2 className="section-title">Management Committee</h2>
            <p className="section-subtitle mx-auto">Meet the dedicated team driving Apex Cricket Association forward.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {committee.map((member) => (
              <div key={member.id} className="card card-hover p-6 text-center group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-slate-100 group-hover:border-secondary transition-colors duration-200">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-slate-800 text-base mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-semibold mb-2">{member.position}</p>
                {member.bio && (
                  <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
