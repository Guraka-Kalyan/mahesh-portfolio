import { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Play, Pause, X, ChevronLeft, ChevronRight, Volume2, VolumeX, MessageSquare, Sparkles, Filter } from 'lucide-react'

// TODO: Replace placeholder cards with real reel video URLs from Mahesh
const REELS_DATA = [
  {
    id: 1,
    title: 'Personal Brand Intro',
    category: 'PERSONAL BRAND',
    niche: 'PERSONAL BRAND',
    duration: '0:45',
    img: '/reel_personal_brand.png',
    techniques: ['Kinetic Captions', 'Sound Design', 'Skin Tone Color Grade'],
    description: 'Fast-cut personal brand intro designed for high retention on Instagram Reels.',
    heightClass: 'aspect-[9/16]',
  },
  {
    id: 2,
    title: 'Luxury Property Tour',
    category: 'REAL ESTATE',
    niche: 'REAL ESTATE',
    duration: '0:32',
    img: '/reel_real_estate.png',
    techniques: ['Speed Ramps', 'Property Walkthrough', 'Ambient Audio Sync'],
    description: 'Vertical luxury home walkthrough edit with smooth speed ramping transitions.',
    heightClass: 'aspect-[9/17]',
  },
  {
    id: 3,
    title: 'Viral Comedy Cut',
    category: 'TRENDING',
    niche: 'TRENDING AUDIO',
    duration: '0:28',
    img: '/reel_personal_brand.png',
    techniques: ['Frame Match Cut', 'Audio Beat Sync', 'Pop Sound FX'],
    description: 'High-energy trend edit synced precisely to viral audio beats.',
    heightClass: 'aspect-[9/15]',
  },
  {
    id: 4,
    title: 'Gym & Fitness Promo',
    category: 'BUSINESS',
    niche: 'BUSINESS PROMO',
    duration: '0:50',
    img: '/reel_fitness_promo.png',
    techniques: ['Cinematic LUT', 'Slow-Mo 60fps', 'Heavy Bass Drops'],
    description: 'Dynamic fitness promo featuring high-contrast color grading and bass drops.',
    heightClass: 'aspect-[9/16]',
  },
  {
    id: 5,
    title: 'Cinematic Vlog Edit',
    category: 'PERSONAL BRAND',
    niche: 'LIFESTYLE VLOG',
    duration: '0:35',
    img: '/reel_lifestyle_vlog.png',
    techniques: ['Film Grain', 'Warm Color Palette', 'Subtle Typography'],
    description: 'Aesthetic day-in-the-life edit with warm cinematic color tones.',
    heightClass: 'aspect-[9/17]',
  },
  {
    id: 6,
    title: 'Kinetic Motion Graphic',
    category: 'MOTION',
    niche: 'MOTION GRAPHICS',
    duration: '0:40',
    img: '/reel_motion_graphics.png',
    techniques: ['Vector Animation', 'Glitch Overlays', 'Typography Timing'],
    description: 'Eye-catching kinetic text overlay showcase built for promotional announcements.',
    heightClass: 'aspect-[9/15]',
  },
]

const CATEGORIES = ['ALL', 'PERSONAL BRAND', 'REAL ESTATE', 'TRENDING', 'BUSINESS', 'MOTION']

export default function ReelRack() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [activeModalReel, setActiveModalReel] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const scrollContainerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  const filteredReels = selectedCategory === 'ALL'
    ? REELS_DATA
    : REELS_DATA.filter((r) => r.category === selectedCategory)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#181124] font-utility text-[10px] font-bold uppercase tracking-widest border border-black/10 mb-2">
              • REEL SHOWCASE
            </div>
            <h2 className="font-body text-4xl sm:text-6xl font-black text-[#181124] tracking-tight">
              Recent Edits & Reels
            </h2>
          </div>
          
          {/* Scroll Navigation Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-black/10 bg-white text-[#181124] hover:bg-[#181124] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-black/10 bg-white text-[#181124] hover:bg-[#181124] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Niche Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-black/5">
          <span className="font-utility text-xs text-[#6D637C] font-bold flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#A124DB]" /> FILTER:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-utility text-xs px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#181124] text-white font-bold shadow-md'
                  : 'bg-white text-[#6D637C] hover:text-[#181124] border border-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vertical Reel Cards Horizontal Shelf */}
        <div
          ref={scrollContainerRef}
          className="flex items-end gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <AnimatePresence mode="popLayout">
            {filteredReels.map((reel) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => {
                  setActiveModalReel(reel)
                  setIsPlaying(true)
                }}
                className="flex-shrink-0 w-[270px] sm:w-[300px] flex flex-col group cursor-pointer"
              >
                {/* 9:16 Card Frame */}
                <div className={`relative ${reel.heightClass} rounded-3xl overflow-hidden bg-white border-2 border-white group-hover:shadow-2xl transition-all duration-300 shadow-md`}>
                  <img
                    src={reel.img}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Play Icon Accent */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-[#181124] flex items-center justify-center shadow-lg group-hover:bg-[#A124DB] group-hover:text-white transition-colors duration-300">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-16">
                    <p className="font-body font-extrabold text-sm text-white leading-tight">
                      {reel.title}
                    </p>
                    <p className="font-utility text-[10px] text-white/80 font-medium mt-0.5">
                      {reel.duration} • {reel.niche}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Video Player Modal Popup */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalReel(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white border border-black/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalReel(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#181124] text-white hover:bg-[#A124DB] transition-all shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* 9:16 Video Player Container */}
              <div className="lg:col-span-6 relative aspect-[9/16] bg-black flex flex-col justify-between p-6 overflow-hidden">
                <img
                  src={activeModalReel.img}
                  alt={activeModalReel.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Lens Viewfinder HUD */}
                <div className="relative z-10 flex justify-between items-center font-utility text-xs text-white">
                  <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    PLAYBACK {activeModalReel.duration}
                  </span>
                  <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {activeModalReel.niche}
                  </span>
                </div>

                {/* Centered Play/Pause Control */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-white text-[#181124] flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                  </button>
                  <p className="mt-4 font-body font-bold text-lg text-white">
                    {activeModalReel.title}
                  </p>
                </div>

                {/* Video Controls Bar */}
                <div className="relative z-10 space-y-3">
                  <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                      animate={isPlaying ? { width: ['0%', '100%'] } : {}}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      className="h-full bg-[#A124DB]"
                    />
                  </div>

                  <div className="flex justify-between items-center font-utility text-xs text-white">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="flex items-center gap-1.5 text-white/80 hover:text-white"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-white" />}
                      <span>{isMuted ? 'MUTED' : 'AUDIO ON'}</span>
                    </button>
                    <span className="text-white/80">9:16 VERTICAL</span>
                  </div>
                </div>
              </div>

              {/* Details Drawer Side */}
              <div className="lg:col-span-6 p-8 flex flex-col justify-between bg-[#F5E8FF] space-y-6 overflow-y-auto">
                <div>
                  <span className="font-utility text-xs tracking-widest text-[#A124DB] uppercase block mb-1 font-bold">
                    • REEL DETAILS •
                  </span>
                  <h3 className="font-body text-3xl font-black uppercase text-[#181124]">
                    {activeModalReel.title}
                  </h3>
                  <p className="font-body text-sm text-[#6D637C] mt-3 leading-relaxed">
                    {activeModalReel.description}
                  </p>

                  {/* Techniques list */}
                  <div className="mt-6">
                    <p className="font-utility text-xs text-[#181124] uppercase tracking-wider mb-3 flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#A124DB]" /> Editing Techniques:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeModalReel.techniques.map((tech) => (
                        <span key={tech} className="font-utility text-xs px-3 py-1.5 rounded-full bg-white border border-black/10 text-[#181124] font-semibold shadow-sm">
                          ✓ {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-6 border-t border-black/10 space-y-3">
                  <a
                    href="https://wa.me/918142845499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-body font-bold text-xs uppercase tracking-wider text-white bg-[#181124] hover:bg-[#A124DB] shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    Request a Reel Like This
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
