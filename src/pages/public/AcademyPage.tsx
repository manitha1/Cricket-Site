import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Award, Users, Star, ArrowRight } from 'lucide-react';
import { coaches } from '../../data/mockData';

const programs = [
  { level: 'Beginner', ages: '6–9 yrs', description: 'Introduction to cricket fundamentals, basic batting and bowling techniques.', color: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  { level: 'Junior', ages: '10–12 yrs', description: 'Structured skill development, team concepts, and mini-tournaments.', color: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-700' },
  { level: 'Intermediate', ages: '13–15 yrs', description: 'Competitive training, match simulation, and position-specific coaching.', color: 'bg-yellow-50 border-yellow-200', badge: 'bg-yellow-100 text-yellow-700' },
  { level: 'Advanced', ages: '16–17 yrs', description: 'High-performance coaching, video analysis, and inter-school competition.', color: 'bg-orange-50 border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  { level: 'Elite', ages: '18+ yrs', description: 'Professional-level training for talented players targeting club and district cricket.', color: 'bg-purple-50 border-purple-200', badge: 'bg-purple-100 text-purple-700' },
];

const schedule = [
  { day: 'Monday', time: '4:00 PM – 6:00 PM', groups: 'Beginner & Junior' },
  { day: 'Wednesday', time: '4:00 PM – 6:00 PM', groups: 'Intermediate & Advanced' },
  { day: 'Saturday', time: '8:00 AM – 11:00 AM', groups: 'All Groups — Full Training' },
  { day: 'Sunday', time: '8:00 AM – 10:00 AM', groups: 'Elite Group Only' },
];

export default function AcademyPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Academy</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Apex Cricket Academy</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Developing the next generation of cricket talent through world-class coaching and professional training.
          </p>
        </div>
      </section>

      {/* About Academy */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-badge"><Award className="w-4 h-4" /> About</div>
              <h2 className="section-title mb-4">About the Academy</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Apex Cricket Academy is the development arm of Apex Cricket Association. Established in 2017, the academy has trained over 500 young cricketers across all age groups and skill levels.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our ICC-certified coaches bring professional-level expertise to every session, ensuring every student receives personalized attention and a structured development pathway.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <p className="text-3xl font-black font-display text-primary">4</p>
                  <p className="text-xs text-slate-500 mt-1">Coaches</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <p className="text-3xl font-black font-display text-secondary">150+</p>
                  <p className="text-xs text-slate-500 mt-1">Students</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-2xl">
                  <p className="text-3xl font-black font-display text-accent">5</p>
                  <p className="text-xs text-slate-500 mt-1">Programs</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-56">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop" alt="Academy Training" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-28">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop" alt="Fitness" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-24">
                  <img src="https://images.unsplash.com/photo-1473976345543-9fce928c1d6e?w=400&auto=format&fit=crop" alt="Ground" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Star className="w-4 h-4" /> Programs</div>
            <h2 className="section-title">Academy Programs</h2>
            <p className="section-subtitle mx-auto">From first-timers to elite players — we have a program for every level.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {programs.map(prog => (
              <div key={prog.level} className={`card p-5 border-2 ${prog.color} group hover:-translate-y-1 transition-transform duration-200`}>
                <span className={`badge text-xs mb-3 ${prog.badge}`}>{prog.ages}</span>
                <h3 className="font-display font-bold text-slate-800 text-base mb-2">{prog.level}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{prog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Users className="w-4 h-4" /> Team</div>
            <h2 className="section-title">Coaching Staff</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coaches.map(coach => (
              <div key={coach.id} className="card p-5 text-center group card-hover">
                <img src={coach.photo} alt={coach.name} className="w-20 h-20 rounded-2xl mx-auto mb-4 border-2 border-slate-100 group-hover:border-secondary transition-colors duration-200" />
                <h3 className="font-display font-bold text-slate-800 text-base mb-1">{coach.name}</h3>
                <p className="text-secondary text-xs font-semibold mb-1">{coach.specialization}</p>
                <p className="text-slate-400 text-xs mb-1">{coach.qualification}</p>
                <p className="text-slate-400 text-xs">{coach.experience} Experience</p>
                {coach.bio && <p className="text-slate-500 text-xs mt-3 leading-relaxed">{coach.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-badge mx-auto mb-4"><Clock className="w-4 h-4" /> Schedule</div>
            <h2 className="section-title">Training Schedule</h2>
          </div>
          <div className="card overflow-hidden">
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr><th>Day</th><th>Time</th><th>Groups</th></tr>
                </thead>
                <tbody>
                  {schedule.map(s => (
                    <tr key={s.day}>
                      <td className="font-bold text-primary">{s.day}</td>
                      <td className="text-slate-600">{s.time}</td>
                      <td><span className="badge badge-ongoing text-xs">{s.groups}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section bg-white" id="register">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-badge mx-auto mb-4"><CheckCircle2 className="w-4 h-4" /> Enroll</div>
            <h2 className="section-title">Academy Registration</h2>
            <p className="section-subtitle mx-auto">Register your child for the 2026/27 season. Limited slots available.</p>
          </div>
          <div className="card p-6 lg:p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Student Name *</label>
                  <input type="text" className="form-input" placeholder="Full name" />
                </div>
                <div>
                  <label className="form-label">Date of Birth *</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Parent / Guardian Name *</label>
                  <input type="text" className="form-input" placeholder="Parent or guardian" />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="+94 7X XXX XXXX" />
                </div>
              </div>
              <div>
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-input" placeholder="email@example.com" />
              </div>
              <div>
                <label className="form-label">Home Address *</label>
                <input type="text" className="form-input" placeholder="Street, City" />
              </div>
              <div>
                <label className="form-label">Emergency Contact *</label>
                <input type="text" className="form-input" placeholder="Name & Phone" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Program *</label>
                  <select className="form-select">
                    <option>Select Program</option>
                    {programs.map(p => <option key={p.level}>{p.level}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Age Group *</label>
                  <select className="form-select">
                    {['U10', 'U12', 'U14', 'U16', 'U18', 'Open'].map(ag => <option key={ag}>{ag}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="form-label">Previous Cricket Experience</label>
                <textarea className="form-input" rows={3} placeholder="Describe any previous cricket training or experience..." />
              </div>
              <button type="submit" className="btn-secondary w-full justify-center py-3.5">
                Submit Registration <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-400 text-center">
                Our Academy Director will contact you within 2 business days to confirm enrollment.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
