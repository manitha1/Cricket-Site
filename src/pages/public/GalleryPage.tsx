import { useState } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../data/mockData';

const categories = ['All', 'Matches', 'Tournaments', 'Academy', 'Community', 'Events', 'Awards', 'Facilities'];

export default function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = galleryImages.filter(img =>
    (category === 'All' || img.category === category) &&
    (!search || (img.title || '').toLowerCase().includes(search.toLowerCase()))
  );

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % filtered.length : null);

  return (
    <div>
      <section className="page-hero">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-white/60 mb-3">Home &rsaquo; Gallery</div>
          <h1 className="text-4xl md:text-5xl font-black font-display mb-3">Gallery</h1>
          <p className="text-white/75 text-lg">Highlights from our matches, events, academy and facilities.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search photos..." value={search}
                onChange={e => setSearch(e.target.value)} className="form-input pl-10" />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  category === cat ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, index) => (
              <div key={img.id}
                className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl relative group"
                onClick={() => openLightbox(index)}>
                <img src={img.url} alt={img.alt || img.title || 'Gallery'}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-xs font-semibold">{img.title}</p>
                    <p className="text-white/70 text-xs">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">No images found.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200 z-10">
            <X className="w-5 h-5" />
          </button>
          <button onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200 z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors duration-200 z-10">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-16" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].url} alt={filtered[lightbox].alt || ''}
              className="max-w-full max-h-[80vh] object-contain rounded-xl" />
            <div className="text-center mt-4">
              <p className="text-white font-semibold">{filtered[lightbox].title}</p>
              <p className="text-white/60 text-sm">{filtered[lightbox].category}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
