import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowUpRight, Film, Scissors, CheckCircle2 } from 'lucide-react'

const SERVICES_ROWS = [
  {
    id: '01',
    title: 'Visual Reels',
    headlineWord: 'Reels',
    desc: 'Fast-cut vertical edits designed for high engagement on Instagram Reels & YouTube Shorts.',
    linkText: 'View samples ↗',
    images: ['/reel_personal_brand.png', '/reel_lifestyle_vlog.png'],
    reverse: false,
  },
  {
    id: '02',
    title: 'Motion Graphics & Visual Edits',
    headlineWord: 'Edits',
    desc: 'Animated text overlays, kinetic captions, keyframe pops, and graphic callouts that keep eyes locked.',
    linkText: 'Motion showcase ↗',
    images: ['/reel_motion_graphics.png', '/reel_fitness_promo.png'],
    reverse: true,
  },
  {
    id: '03',
    title: 'Trending Video Reels',
    headlineWord: 'Trending',
    desc: 'Fast-paced visual edits synced precisely to current audio trends and viral music beats.',
    linkText: 'Learn process ↗',
    images: ['/reel_real_estate.png', '/reel_personal_brand.png'],
    reverse: false,
  },
]

const TIMELINE_TRACKS = [
  {
    name: 'V2: SUBTITLES & FX',
    color: 'bg-[#A124DB] text-white border-[#A124DB]',
    blocks: [
      { width: 'w-1/4', label: 'Hook Subtitle Pop' },
      { width: 'w-1/3', label: 'Kinetic Text Animation' },
      { width: 'w-1/4', label: 'Subscribe CTA Overlay' },
    ],
  },
  {
    name: 'V1: MAIN CUTS',
    color: 'bg-[#181124] text-white border-[#181124]',
    blocks: [
      { width: 'w-1/5', label: 'Clip 01 [0.0s-1.2s]' },
      { width: 'w-1/4', label: 'Clip 02 [Speed Ramp]' },
      { width: 'w-1/4', label: 'Clip 03 [Whip Cut]' },
      { width: 'w-1/5', label: 'Clip 04 [Outro]' },
    ],
  },
  {
    name: 'A1: DIALOGUE & VO',
    color: 'bg-emerald-600 text-white border-emerald-600',
    blocks: [
      { width: 'w-1/2', label: 'Voiceover [Denoised & Compressed]' },
      { width: 'w-2/5', label: 'Creator Dialogue' },
    ],
  },
  {
    name: 'A2: MUSIC & SFX',
    color: 'bg-purple-300 text-[#181124] border-purple-400',
    blocks: [
      { width: 'w-1/3', label: 'Trending Audio Track' },
      { width: 'w-1/4', label: 'Swoosh SFX' },
      { width: 'w-1/3', label: 'Bass Drop Sync' },
    ],
  },
]

export default function Services() {
  const [playheadPos, setPlayheadPos] = useState(35)

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] border-b border-black/5">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header matching Kazi Reference */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#181124] font-utility text-[10px] font-bold uppercase tracking-widest border border-black/10">
            • WHAT I DO
          </div>
          <h2 className="font-body text-4xl sm:text-6xl lg:text-7xl font-black text-[#181124] tracking-tight leading-tight">
            Edits that hold <span className="text-[#A124DB]">attention</span>.
          </h2>
        </div>

        {/* Alternating Service Rows with Dual 9:16 Mockup Cards */}
        <div className="space-y-24">
          {SERVICES_ROWS.map((row) => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                row.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text side */}
              <div className={`lg:col-span-5 space-y-5 ${row.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="font-body text-3xl sm:text-5xl font-black text-[#181124] tracking-tight leading-tight">
                  {row.title}
                </h3>
                <p className="font-body text-base text-[#6D637C] leading-relaxed">
                  {row.desc}
                </p>
                <a
                  href="#work"
                  className="inline-flex items-center gap-1.5 font-utility text-xs font-bold text-[#A124DB] hover:text-[#181124] uppercase tracking-wider transition-colors pt-2"
                >
                  <span>{row.linkText}</span>
                </a>
              </div>

              {/* Dual 9:16 Mockup Cards side matching reference */}
              <div className={`lg:col-span-7 flex justify-center lg:justify-end gap-4 ${row.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                {row.images.map((imgSrc, i) => (
                  <div
                    key={i}
                    className={`relative w-44 sm:w-56 aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-2 border-white bg-white group ${
                      i === 1 ? 'translate-y-4' : ''
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt="Reel Showcase"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom Play Icon Badge */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-[#181124] flex items-center justify-center shadow-md">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>

                    {i === 0 && (
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white font-utility text-[9px] font-bold px-2 py-0.5 rounded">
                        9:16 RAW
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESTYLED VIDEO EDITOR TIMELINE ENGINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          className="pt-16 border-t border-black/5 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-utility text-xs tracking-widest text-[#A124DB] uppercase block mb-1 font-bold">
                • TIMELINE ENGINE •
              </span>
              <h3 className="font-body text-3xl sm:text-4xl font-black text-[#181124] flex items-center gap-3">
                <Film className="w-7 h-7 text-[#A124DB]" /> Video Editor Timeline Track
              </h3>
            </div>

            {/* Timecode HUD */}
            <div className="flex items-center gap-3 bg-white border border-black/10 px-4 py-2 rounded-full font-utility text-xs shadow-sm">
              <span className="text-[#6D637C]">TIMECODE:</span>
              <span className="text-[#A124DB] font-bold font-mono tracking-widest">
                00:00:04:{Math.floor(playheadPos * 0.6).toString().padStart(2, '0')}
              </span>
              <span className="text-emerald-600 font-bold">• 24.00 FPS</span>
            </div>
          </div>

          {/* Interactive Scrubber Workspace */}
          <div className="p-6 rounded-3xl bg-white border border-black/10 space-y-4 relative shadow-md overflow-hidden">
            {/* Timeline Scrubber Ruler */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const clickX = e.clientX - rect.left
                const newPos = (clickX / rect.width) * 100
                setPlayheadPos(Math.max(0, Math.min(100, newPos)))
              }}
              className="h-8 bg-[#F5E8FF] border border-black/5 rounded-lg relative cursor-pointer flex items-center px-4 justify-between font-utility text-[10px] text-[#6D637C] select-none"
            >
              <span>00:00:00</span>
              <span>00:00:05</span>
              <span>00:00:10</span>
              <span>00:00:15</span>
              <span>00:00:20</span>
              <span>00:00:25</span>
              <span>00:00:30</span>

              {/* Red Vertical Playhead Needle */}
              <div
                style={{ left: `${playheadPos}%` }}
                className="absolute top-0 bottom-0 w-0.5 bg-[#A124DB] shadow-md z-30 transition-all duration-75"
              >
                <div className="w-3 h-3 bg-[#A124DB] rotate-45 -translate-x-1.2 -translate-y-1 rounded-sm" />
              </div>
            </div>

            {/* Multi-Tracks */}
            <div className="space-y-2 font-utility text-xs">
              {TIMELINE_TRACKS.map((track) => (
                <div key={track.name} className="flex items-center gap-3">
                  <div className="w-36 flex-shrink-0 font-bold text-[10px] text-[#6D637C] uppercase">
                    {track.name}
                  </div>
                  <div className="flex-1 flex gap-2 h-9 bg-[#F5E8FF] border border-black/5 rounded-lg p-1 relative overflow-hidden">
                    {track.blocks.map((block, i) => (
                      <div
                        key={i}
                        className={`${block.width} ${track.color} rounded font-bold text-[10px] px-2 flex items-center justify-between border shadow-sm truncate`}
                      >
                        <span className="truncate">{block.label}</span>
                        <Scissors className="w-3 h-3 opacity-70 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-utility text-[10px] text-[#6D637C] text-center pt-2">
              💡 Tip: Click anywhere on the timeline ruler to scrub the playhead across Mahesh's multi-track video structure.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
