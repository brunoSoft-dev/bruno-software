import Hero from './components/Hero'
import Projects from './components/Projects'
import Process from './components/Process'
import Experience from './components/Experience'
import About from './components/About'
import Stack from './components/Stack'
import Contact from './components/Contact'
import LiquidEther from '../@/components/LiquidEther'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <main className="bg-bg-dark min-h-screen text-slate-50 relative">
      {/* LiquidEther Background */}
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <LiquidEther
          colors={[ '#4f7effff', '#000000ff', '#058fffff' ]}
          mouseForce={15}
          cursorSize={95}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
      />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 pointer-events-none">
        {/* Navigation - Clean & Highly Visible */}
        <nav className="fixed top-0 w-full z-50 pt-8 pb-12 px-6 pointer-events-none bg-gradient-to-b from-[#020617]/80 to-transparent">
          <div className="container mx-auto flex justify-between items-center pointer-events-auto">
            <div className="text-sm font-black tracking-[0.4em] text-white uppercase drop-shadow-md">BRUNO</div>

            <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 drop-shadow-md">
              <a href="#hero" className="hover:text-white transition-colors">Intro</a>
              <a href="#projetos" className="hover:text-white transition-colors">Work</a>
              <a href="#processo" className="hover:text-white transition-colors">Method</a>
              <a href="#experiencia" className="hover:text-white transition-colors">Exp</a>
              <a href="#sobre" className="hover:text-white transition-colors">About</a>
              <a href="#stack" className="hover:text-white transition-colors">Stack</a>
              <a href="#contato" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4 pointer-events-auto">
              <ContactCTA
                buttonLabel="Contato"
                buttonClassName="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5"
              />
              <div className="w-12 h-px bg-white/20 hidden lg:block" />
            </div>
          </div>
        </nav>

        {/* Content Sections (Restore pointer events to auto here so sections are clickable) */}
        <div className="pointer-events-auto">
          <Hero />
          <Projects />
          <Process />
          <Experience />
          <About />
          <Stack />
          <Contact />
        </div>
      </div>
    </main>
  )
}






export default App
