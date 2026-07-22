import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'

const STAT_CARDS = [
  { val: '4K', label: 'Video Capture Quality' },
  { val: '24-48h', label: 'Standard Turnaround' },
  { val: '9:16', label: 'Vertical Format Focus' },
  { val: 'Remote', label: 'Worldwide Setup' },
]

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Eyebrow & Headline matching Kazi Reference */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#181124] font-utility text-[10px] font-bold uppercase tracking-widest border border-black/10">
            • ABOUT
          </div>
          <h2 className="font-body text-4xl sm:text-6xl font-black text-[#181124] tracking-tight leading-tight max-w-2xl">
            I turn briefs into <span className="text-[#A124DB]">frames that feel</span>.
          </h2>
        </div>

        {/* 2-Column Layout matching Kazi Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 Cols): Bio + 4 Stat Cards */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <p className="font-body text-lg text-[#6D637C] leading-relaxed">
              I edit reels for creators and small businesses — fast cuts, clean transitions, stuff that holds attention. Every cut is engineered for pacing and visual impact.
            </p>

            {/* 4 Factual Stat Cards matching reference */}
            <div className="grid grid-cols-2 gap-4">
              {STAT_CARDS.map((st) => (
                <div key={st.label} className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-body text-3xl sm:text-4xl font-black text-[#A124DB]">{st.val}</p>
                  <p className="font-utility text-[10px] text-[#6D637C] font-bold uppercase tracking-wider mt-1">{st.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 Cols): Testimonial Card in Purple/Magenta Accent */}
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#A124DB] to-[#8014B6] text-white shadow-xl flex flex-col justify-between relative overflow-hidden w-full min-h-[320px]"
            >
              <Quote className="w-12 h-12 text-white/20 absolute top-6 right-6 pointer-events-none" />
              
              <div className="relative z-10 space-y-4 pt-2">
                <p className="font-body text-xl font-bold leading-relaxed">
                  "Mahesh delivered our reel edit in less than 24 hours. The kinetic text overlays and audio beat timing made our content stand out immediately."
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-white text-sm">
                  M
                </div>
                <div>
                  <p className="font-body font-bold text-sm">Creator Client</p>
                  <p className="font-utility text-[10px] text-white/80">Short-Form Content</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
