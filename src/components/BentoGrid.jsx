import { motion } from 'framer-motion'
import { Play, ArrowUpRight, Sparkles } from 'lucide-react'

export default function BentoGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] border-b border-black/5">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header matching Kazi Reference */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#181124] font-utility text-[10px] font-bold uppercase tracking-widest border border-black/10">
            • SELECTED WORK
          </div>
          <h2 className="font-body text-4xl sm:text-6xl font-black text-[#181124] tracking-tight leading-tight">
            A short reel of <span className="text-[#A124DB]">longer stories</span>.
          </h2>
        </div>

        {/* Bento Grid Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Large Left Card (8 Cols) - Solid Dark Card (#181124) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="lg:col-span-7 bg-[#181124] text-white p-8 sm:p-12 rounded-[32px] shadow-xl flex flex-col justify-between relative overflow-hidden group min-h-[420px]"
          >
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 font-utility text-[10px] font-bold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#A124DB]" /> FEATURED EDIT
              </div>
              <h3 className="font-body text-4xl sm:text-6xl font-black tracking-tight leading-none pt-4">
                Creator Brand Showcase
              </h3>
              <p className="font-body text-base text-white/80 max-w-xl leading-relaxed">
                Pacing, kinetic typography, and precision audio beat sync crafted for high engagement across mobile platforms.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-white/15 relative z-10 font-utility text-xs">
              <div className="font-utility text-xs font-bold uppercase tracking-wider text-white/80">
                4K 60FPS • CINEMATIC IDENT
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-[#181124] flex items-center justify-center group-hover:bg-[#A124DB] group-hover:text-white transition-colors duration-300 shadow-lg">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Right 2 Stacked Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Card - White Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="bg-white p-8 rounded-[32px] border border-black/10 shadow-md flex-1 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div className="space-y-3">
                <span className="font-utility text-[10px] text-[#A124DB] uppercase tracking-widest font-extrabold">
                  • STORYTELLING •
                </span>
                <h4 className="font-body text-2xl sm:text-3xl font-black text-[#181124] tracking-tight">
                  Turning raw footage into clear engaging stories.
                </h4>
              </div>
              <div className="pt-4 font-utility text-[10px] text-[#6D637C] font-bold uppercase tracking-wider">
                ✓ High Retention Structure
              </div>
            </motion.div>

            {/* Bottom Right Card - Single Muted Teal Accent Card (#1E7585) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="bg-[#1E7585] text-white p-8 rounded-[32px] shadow-lg flex-1 flex flex-col justify-between hover:opacity-95 transition-opacity"
            >
              <div className="space-y-3">
                <span className="font-utility text-[10px] text-white/80 uppercase tracking-widest font-bold">
                  • COLOR & AUDIO SYSTEM •
                </span>
                <h4 className="font-body text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  Integrated color & sound design system.
                </h4>
              </div>
              <div className="pt-4 font-utility text-[10px] text-white/90 font-bold uppercase tracking-wider">
                ✓ DaVinci Skin Match & SFX
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}
