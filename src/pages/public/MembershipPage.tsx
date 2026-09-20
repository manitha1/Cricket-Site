import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Trophy, Star, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const memberships = [
  {
    type: 'Full Member',
    icon: Star,
    price: 'LKR 5,000',
    period: '/ year',
    color: 'border-primary bg-primary',
    benefits: [
      'Voting rights at AGM',
      'Access to all facilities',
      'Member dashboard access',
      'Tournament registration discounts',
      'Academy discounts',
      'Monthly newsletter',
      'Priority booking',
    ],
  },
  {
    type: 'Player Member',
    icon: Trophy,
    price: 'LKR 3,000',
    period: '/ year',
    color: 'border-secondary bg-secondary',
    benefits: [
      'Player profile on website',
      'Tournament participation',
      'Access to facilities',
      'Player statistics tracking',
      'Coaching resources',
      'Match notifications',
    ],
  },
  {
    type: 'Associate Member',
    icon: Users,
    price: 'LKR 2,000',
    period: '/ year',
    color: 'border-accent bg-accent',
    benefits: [
      'Facility booking access',
      'Event invitations',
      'Member newsletter',
      'Academy discounts',
      'Community access',
    ],
  },
  {
    type: 'Corporate Member',
    icon: Briefcase,
    price: 'LKR 25,000',
    period: '/ year',
    color: 'border-slate-700 bg-slate-800',
    benefits: [
      'Sponsorship recognition',
      'Corporate box at events',
      'Advertising opportunities',
      'Company logo on website',
      '5 staff player memberships',
      'Annual corporate function invite',
      'Priority facility bookings',
    ],
    highlight: true,
  },
  {
    type: 'Academy Member',
    icon: GraduationCap,
    price: 'LKR 8,000',
    period: '/ year',
    color: 'border-blue-600 bg-blue-700',
    benefits: [
      'Academy program enrollment',
      'Coaching sessions included',
      'Academy tournaments',
      'Progress reports',
      'Coaching resources',
      'Parent portal access',
    ],
  },
];

export default function MembershipPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Membership</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Membership</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Join the Apex Cricket Association and become part of our growing cricket community.
          </p>
        </div>
      </section>

      {/* Membership Types */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge mx-auto mb-4"><Star className="w-4 h-4" /> Plans</div>
            <h2 className="section-title">Membership Plans</h2>
            <p className="section-subtitle mx-auto">Choose the membership that's right for you.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {memberships.map(mem => (
              <div key={mem.type} className={`card overflow-hidden group ${mem.highlight ? 'ring-2 ring-accent' : ''}`}>
                {mem.highlight && (
                  <div className="bg-accent text-primary text-center text-xs font-black py-1.5">MOST POPULAR</div>
                )}
                <div className={`${mem.color} p-5 text-white`}>
                  <mem.icon className="w-8 h-8 mb-3 opacity-80" />
                  <h3 className="font-display font-bold text-lg mb-2">{mem.type}</h3>
                  <div>
                    <span className="text-3xl font-black font-display">{mem.price}</span>
                    <span className="text-white/70 text-sm">{mem.period}</span>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2.5 mb-5">
                    {mem.benefits.map(b => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/membership/apply"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-secondary transition-colors duration-200">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-slate-50" id="apply">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="section-badge mx-auto mb-4"><Users className="w-4 h-4" /> Apply</div>
            <h2 className="section-title">Membership Application</h2>
            <p className="section-subtitle mx-auto">Complete the form below to apply for ACA membership.</p>
          </div>
          <div className="card p-6 lg:p-8">
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="As per NIC/Passport" />
                </div>
                <div>
                  <label className="form-label">Date of Birth *</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">NIC / Passport Number *</label>
                  <input type="text" className="form-input" placeholder="NIC or Passport" />
                </div>
                <div>
                  <label className="form-label">Occupation</label>
                  <input type="text" className="form-input" placeholder="Your occupation" />
                </div>
              </div>
              <div>
                <label className="form-label">Address *</label>
                <input type="text" className="form-input" placeholder="Full address" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-input" placeholder="+94 7X XXX XXXX" />
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-input" placeholder="email@example.com" />
                </div>
              </div>
              <div>
                <label className="form-label">Membership Type *</label>
                <select className="form-select">
                  <option>Select Membership Type</option>
                  {memberships.map(m => <option key={m.type}>{m.type}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">Emergency Contact *</label>
                <input type="text" className="form-input" placeholder="Name & Phone Number" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Profile Photo</label>
                  <input type="file" accept="image/*" className="form-input text-sm" />
                </div>
                <div>
                  <label className="form-label">Identity Document</label>
                  <input type="file" accept=".pdf,.jpg,.png" className="form-input text-sm" />
                </div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-xl text-sm text-secondary">
                <p className="font-semibold mb-1">After Submission:</p>
                <p>You will receive an application ID and your application status will be <strong>Pending Review</strong>. An ACA administrator will review and respond within 5 business days.</p>
              </div>
              <button type="submit" className="btn-secondary w-full justify-center py-3.5">
                Submit Application <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
