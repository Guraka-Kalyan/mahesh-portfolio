import { motion } from 'framer-motion'

const tools = [
  'ADOBE PREMIERE PRO',
  'AFTER EFFECTS',
  'DAVINCI RESOLVE',
  'CAPCUT PRO',
]

export default function ToolsRow() {
  return (
    <div className="py-6 bg-[#F5E8FF] border-y border-black/5 select-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-utility text-xs font-extrabold text-[#181124] uppercase tracking-widest text-center"
      >
        {tools.map((t, index) => (
          <div key={t} className="flex items-center gap-8">
            <span>{t}</span>
            {index < tools.length - 1 && (
              <span className="text-[#A124DB] font-bold">◆</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
