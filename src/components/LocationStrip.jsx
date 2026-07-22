import { motion } from 'framer-motion'

export default function LocationStrip() {
  return (
    <div className="py-6 px-4 bg-white border-y border-black/5 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="font-utility text-xs tracking-widest text-[#6D637C] font-semibold uppercase"
      >
        Available for freelance projects worldwide • Short-form video editing & shoots
      </motion.p>
    </div>
  )
}
