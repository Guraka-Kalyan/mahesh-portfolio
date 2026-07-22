import { motion, useReducedMotion } from 'framer-motion'
import { Play, ArrowUpRight, Star, Film, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#A124DB]/15 blur-[140px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* LEFT COLUMN: Circular Portrait Frame with Aura Glow & Floating Badges */}
        <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center relative">
          
          {/* Circular Portrait Wrapper */}
          <div className="relative group cursor-pointer">
            
            {/* Background Purple/Magenta Aura Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A124DB] to-[#E052FF] blur-xl opacity-60 scale-105 group-hover:scale-110 transition-transform duration-700" />

            {/* Circular Frame */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white z-10">
              <img
                src="/mahesh_portrait.png"
                alt="Mahesh Video Editor"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* TOP-LEFT FLOATING BADGE: DELIVERED • 4K 9:16 */}
            <div className="absolute -top-2 -left-4 z-20 bg-white/95 backdrop-blur-md text-[#181124] px-4 py-2 rounded-full border border-black/10 shadow-lg flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-[#A124DB]" />
              <span className="font-utility text-[10px] font-extrabold uppercase tracking-widest">
                DELIVERED • 4K 9:16
              </span>
            </div>

            {/* BOTTOM-RIGHT FLOATING BADGE: RATING • 5.0 ★★★★★ */}
            <div className="absolute -bottom-2 -right-4 z-20 bg-white/95 backdrop-blur-md text-[#181124] px-5 py-2.5 rounded-full border border-black/10 shadow-xl flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-utility text-[10px] font-extrabold uppercase tracking-widest text-[#181124]">
                5.0 RATING
              </span>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: Copywriting & Action Buttons */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          {/* Availability Status Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-utility text-xs tracking-wider text-[#181124] font-bold uppercase">
              Available for freelance work
            </span>
          </motion.div>

          {/* Main Headline matching Kazi Reference */}
          <motion.div variants={itemVariants} className="space-y-1">
            <h1 className="font-body text-5xl sm:text-7xl lg:text-8xl font-black text-[#181124] tracking-tight leading-[0.95]">
              Hi, I am <span className="text-[#A124DB]">Mahesh</span>
            </h1>
            <p className="font-utility text-xs sm:text-sm font-bold tracking-widest text-[#6D637C] uppercase pt-2">
              VIDEO EDITOR | VIDEOGRAPHER
            </p>
          </motion.div>

          {/* 2-Line Intro Sentence in Mahesh's Voice */}
          <motion.p variants={itemVariants} className="font-body text-base sm:text-lg text-[#6D637C] max-w-xl leading-relaxed">
            I edit reels for creators and small businesses — fast cuts, clean transitions, stuff that holds attention.
          </motion.p>

          {/* Action Buttons matching Kazi Reference */}
          <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4 items-center">
            {/* Primary Solid Dark Button */}
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 px-8 py-4 font-body font-bold text-xs text-white bg-[#181124] hover:bg-[#A124DB] rounded-full transition-all duration-300 shadow-md uppercase tracking-wider"
            >
              <span>View my work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Secondary Outline Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-7 py-4 font-body font-bold text-xs text-[#181124] hover:text-[#A124DB] bg-white border border-black/15 rounded-full hover:border-[#A124DB] transition-all duration-300 shadow-sm uppercase tracking-wider"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch showreel</span>
            </a>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}
