import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">


        <motion.h1
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
          }}
          initial="hidden"
          animate="visible"
          className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9] flex flex-col items-center"
        >
          <div className="flex overflow-hidden">
            {"Bruno".split("").map((letter, i) => (
              <motion.span
                key={`b-${i}`}
                variants={{
                  hidden: { opacity: 0, y: "100%", filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          
          <div className="relative flex items-center">
            <div className="flex overflow-hidden pb-2">
              {"Ribeiro".split("").map((letter, i) => (
                <motion.span
                  key={`r-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: "100%", filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
                  }}
                  className="inline-block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0, filter: "blur(10px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="text-blue-500 absolute -right-6 md:-right-8 bottom-4 md:bottom-6"
            >
              .
            </motion.span>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
            <span className="text-white font-medium italic">Desenvolvedor de Software.</span> Sistemas complexos com arquitetura sólida, escalabilidade, regras de negócio e IA integrada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex gap-12 mt-8"
        >
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-emerald-500/50 transition-all duration-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 group-hover:text-emerald-400 transition-colors">Business Logic</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 group-hover:text-blue-400 transition-colors">AI Integration</span>
          </div>
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 group-hover:text-purple-400 transition-colors">System Expansion</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-700">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-700" />
      </motion.div>

      {/* Subtle Noise/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Hero;
