// TODO: Replace https://www.instagram.com/mahe___03/ and WHATSAPP NUMBER - 8142845499

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Instagram, MessageSquare, Sparkles, X, Send } from 'lucide-react'

export default function Contact() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [serviceType, setServiceType] = useState('Reel Editing')
  const [reelCount, setReelCount] = useState('1-3 Reels')
  const [turnaround, setTurnaround] = useState('Standard (3-5 Days)')
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 25 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 80,
        damping: 15
      },
    },
  }

  // Build dynamic WhatsApp prefilled text
  const customMessage = `Hi Mahesh! I'm interested in working together on ${serviceType}. Quantity: ${reelCount}. Timeline: ${turnaround}.`
  const whatsappUrl = `https://wa.me/918142845499?text=${encodeURIComponent(customMessage)}`

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5E8FF] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* High-End Editorial Contact Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          variants={cardVariants}
          className="p-10 sm:p-16 rounded-[36px] bg-white border border-black/10 shadow-xl text-center space-y-8 relative overflow-hidden"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E8FF] text-[#A124DB] font-utility text-xs font-bold uppercase tracking-widest border border-[#A124DB]/20">
            • GET IN TOUCH
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h2 className="font-body text-4xl sm:text-6xl font-black text-[#181124] tracking-tight leading-tight max-w-2xl mx-auto">
              Have a story worth <span className="text-[#A124DB]">moving</span>?
            </h2>

            <p className="font-body text-base sm:text-lg text-[#6D637C] max-w-xl mx-auto leading-relaxed">
              Got raw footage that needs editing, or want to shoot something together? Let's craft your next high-retention reel.
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto">
            {/* Quick Inquiry Modal Trigger */}
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-bold text-xs uppercase tracking-wider text-white bg-[#181124] hover:bg-[#A124DB] transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#E052FF]" />
              <span>Quick Project Inquiry</span>
            </button>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/918142845499"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-body font-bold text-xs uppercase tracking-wider text-[#181124] bg-white border border-black/15 hover:border-[#A124DB] transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Instagram Button */}
            <a
              href="https://www.instagram.com/mahe___03/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-body font-bold text-xs uppercase tracking-wider text-[#181124] bg-white border border-black/15 hover:border-[#A124DB] transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#A124DB]" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Worldwide Availability Label */}
          <div className="pt-8 border-t border-black/5 font-utility text-xs text-[#6D637C]">
            Available for remote & freelance video editing projects worldwide
          </div>

        </motion.div>
      </div>

      {/* Interactive Project Inquiry Modal */}
      <AnimatePresence>
        {isInquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsInquiryOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white border border-black/15 rounded-3xl p-8 shadow-2xl space-y-6 text-[#181124]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsInquiryOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F5E8FF] text-[#181124] hover:bg-[#A124DB] hover:text-white transition-all shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="font-utility text-xs text-[#A124DB] uppercase tracking-widest block mb-1 font-bold">
                  • INQUIRY BUILDER •
                </span>
                <h3 className="font-body text-3xl font-black uppercase text-[#181124]">
                  Project Quick Builder
                </h3>
              </div>

              {/* Service Choice */}
              <div className="space-y-2 text-left">
                <label className="font-utility text-xs text-[#181124] uppercase tracking-wider block font-bold">
                  Select Service:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Reel Editing', 'Videography Shoot', 'Color Grading', 'Full Content Bundle'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setServiceType(s)}
                      className={`font-body text-xs py-2.5 px-3 rounded-xl border text-left transition-all ${
                        serviceType === s
                          ? 'bg-[#181124] text-white border-[#181124] font-bold'
                          : 'bg-[#F5E8FF] text-[#6D637C] border-black/10 hover:text-[#181124]'
                      }`}
                    >
                      ✓ {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Choice */}
              <div className="space-y-2 text-left">
                <label className="font-utility text-xs text-[#181124] uppercase tracking-wider block font-bold">
                  Reels Quantity:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1-3 Reels', '5 Reels Pack', 'Monthly Retainer'].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setReelCount(q)}
                      className={`font-body text-xs py-2.5 px-3 rounded-xl border text-center transition-all ${
                        reelCount === q
                          ? 'bg-[#181124] text-white border-[#181124] font-bold'
                          : 'bg-[#F5E8FF] text-[#6D637C] border-black/10 hover:text-[#181124]'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Choice */}
              <div className="space-y-2 text-left">
                <label className="font-utility text-xs text-[#181124] uppercase tracking-wider block font-bold">
                  Turnaround Timeline:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Urgent (24-48 Hrs)', 'Standard (3-5 Days)'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTurnaround(t)}
                      className={`font-body text-xs py-2.5 px-3 rounded-xl border text-center transition-all ${
                        turnaround === t
                          ? 'bg-[#181124] text-white border-[#181124] font-bold'
                          : 'bg-[#F5E8FF] text-[#6D637C] border-black/10 hover:text-[#181124]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full font-body font-bold text-xs uppercase tracking-wider text-white bg-[#181124] hover:bg-[#A124DB] shadow-md transition-all"
                >
                  <Send className="w-4 h-4 fill-current" />
                  Send Inquiry on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
