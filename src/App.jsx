import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToolsRow from './components/ToolsRow'
import Services from './components/Services'
import ReelRack from './components/ReelRack'
import BentoGrid from './components/BentoGrid'
import About from './components/About'
import LocationStrip from './components/LocationStrip'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#F5E8FF] text-[#181124] min-h-screen antialiased">
      {/* Custom Camera Viewfinder Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ToolsRow />
        <Services />
        <ReelRack />
        <BentoGrid />
        <About />
        <LocationStrip />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white py-10 border-t border-black/5 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg tracking-wider text-[#181124] font-bold">
            MAHESH EDITS
          </p>
          <p className="font-utility text-[10px] tracking-widest text-[#6D637C] uppercase font-bold">
            © {new Date().getFullYear()} • SHORT-FORM VIDEO & EDITING • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
