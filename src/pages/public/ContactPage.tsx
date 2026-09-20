import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactCategories = ['General', 'Tournament', 'Membership', 'Academy', 'Facilities', 'Sponsorship', 'Media'];

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Contact</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Contact Us</h1>
          <p className="text-white/75 text-lg max-w-xl">Get in touch with the Apex Cricket Association team.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="card p-6">
              <h2 className="font-display font-bold text-primary text-xl mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Address</p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      No. 45, Apex Sports Complex,<br />
                      Colombo 07, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Telephone</p>
                    <a href="tel:+94112345678" className="text-slate-500 text-sm hover:text-secondary transition-colors">+94 11 234 5678</a>
                    <br />
                    <a href="tel:+94771234567" className="text-slate-500 text-sm hover:text-secondary transition-colors">+94 77 123 4567</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Email</p>
                    <a href="mailto:info@apexcricket.lk" className="text-slate-500 text-sm hover:text-secondary transition-colors">info@apexcricket.lk</a>
                    <br />
                    <a href="mailto:academy@apexcricket.lk" className="text-slate-500 text-sm hover:text-secondary transition-colors">academy@apexcricket.lk</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">Office Hours</p>
                    <p className="text-slate-500 text-sm">Mon – Fri: 9:00 AM – 5:00 PM</p>
                    <p className="text-slate-500 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                    <p className="text-slate-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card overflow-hidden">
              <div className="bg-slate-200 h-48 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Apex Cricket Ground</p>
                  <p className="text-xs">Colombo 07, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-6 lg:p-8">
              <h2 className="font-display font-bold text-primary text-2xl mb-2">Send us a Message</h2>
              <p className="text-slate-500 text-sm mb-6">We typically respond within 1–2 business days.</p>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input type="text" className="form-input" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="+94 7X XXX XXXX" />
                  </div>
                  <div>
                    <label className="form-label">Category *</label>
                    <select className="form-select">
                      <option>Select Category</option>
                      {contactCategories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Subject *</label>
                  <input type="text" className="form-input" placeholder="Brief subject" />
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea className="form-input" rows={6} placeholder="Your message..." />
                </div>
                <button type="submit" className="btn-secondary w-full justify-center py-3.5">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
