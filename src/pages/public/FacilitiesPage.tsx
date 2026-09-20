import { Link } from 'react-router-dom';
import { Clock, Users, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { facilities } from '../../data/mockData';

export default function FacilitiesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Facilities</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Our Facilities</h1>
          <p className="text-white/75 text-lg max-w-xl">
            World-class cricket facilities available for training, competitions and events.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {facilities.map((facility, i) => (
            <div key={facility.id} className={`card overflow-hidden flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Images */}
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="h-60 lg:h-full relative">
                  <img
                    src={facility.images[0]}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`badge text-xs ${facility.status === 'Available' ? 'badge-ongoing' : 'badge-completed'}`}>
                      {facility.status}
                    </span>
                  </div>
                  {facility.images.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-1.5">
                      {facility.images.slice(1, 3).map((img, j) => (
                        <img key={j} src={img} alt="" className="w-12 h-12 rounded-lg object-cover border-2 border-white/60" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 lg:p-8">
                <h2 className="text-2xl font-black font-display text-primary mb-3">{facility.name}</h2>
                <p className="text-slate-600 leading-relaxed mb-5">{facility.description}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span>{facility.openingHours}</span>
                  </div>
                  {facility.capacity && (
                    <div className="flex items-center gap-2 text-slate-500">
                      <Users className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>Capacity: {facility.capacity}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {facility.features.map(f => (
                    <div key={f} className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 rounded-full text-xs font-medium text-secondary">
                      <CheckCircle2 className="w-3 h-3" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {facility.bookingAvailable ? (
                  <Link to="/contact" className="btn-secondary">
                    <Calendar className="w-4 h-4" />
                    Request Booking <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <Link to="/contact" className="btn-outline-green">
                    Enquire
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Info */}
      <section className="section bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="card p-6 lg:p-8">
            <h2 className="text-2xl font-black font-display text-primary mb-2">Facility Booking Request</h2>
            <p className="text-slate-500 mb-6">Complete the form below to request a facility booking. Our team will confirm availability and provide a quote.</p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Facility *</label>
                  <select className="form-select">
                    <option>Select Facility</option>
                    {facilities.filter(f => f.bookingAvailable).map(f => <option key={f.id}>{f.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Date *</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Start Time *</label>
                  <input type="time" className="form-input" />
                </div>
                <div>
                  <label className="form-label">End Time *</label>
                  <input type="time" className="form-input" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Number of People</label>
                  <input type="number" className="form-input" placeholder="e.g. 20" />
                </div>
                <div>
                  <label className="form-label">Contact Number *</label>
                  <input type="tel" className="form-input" placeholder="+94 7X XXX XXXX" />
                </div>
              </div>
              <div>
                <label className="form-label">Purpose *</label>
                <input type="text" className="form-input" placeholder="e.g. Practice session, Match, Event" />
              </div>
              <div>
                <label className="form-label">Additional Notes</label>
                <textarea className="form-input" rows={3} placeholder="Any specific requirements..." />
              </div>
              <button type="submit" className="btn-secondary w-full justify-center py-3.5">
                Submit Booking Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
