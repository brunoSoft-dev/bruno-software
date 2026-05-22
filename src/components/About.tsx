import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, BookOpen, Star, Terminal as TerminalIcon } from 'lucide-react';
import profilePic from '../assets/foto_perfil.jpeg';
const CodeSnippet = `import asyncio
from core.engine import DistributedCluster
from core.ai import NeuralNet, setup_nodes

async def initialize_system():
    print("🚀 Bootstrapping Neural Engine...")
    
    # Initialize distributed AI cluster
    cluster = await setup_nodes(
        workers=256,
        gpu_acceleration=True,
        failover=True
    )
    
    engine = DistributedCluster(cluster)
    await engine.load_model("deepseek-v4-flash")
    
    print("⚡ Synapses connected. Cluster ready.")
    print("✅ All systems operational.")

if __name__ == "__main__":
    asyncio.run(initialize_system())
`;

const InteractiveTerminal = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mola (spring) para movimento suave e retorno ao centro
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Rotações com limites seguros
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(CodeSnippet.slice(0, i));
      i++;
      if (i > CodeSnippet.length) {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full aspect-square md:aspect-[4/5] [perspective:1000px] flex items-center justify-center group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background ambient glow - follows mouse subtly */}
      <motion.div 
        style={{ x: useTransform(mouseXSpring, [-300, 300], [-20, 20]), y: useTransform(mouseYSpring, [-300, 300], [-20, 20]) }}
        className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" 
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative rounded-2xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl shadow-2xl overflow-visible flex flex-col"
      >
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02] rounded-t-2xl overflow-hidden">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors cursor-pointer" />
          </div>
          <div className="mx-auto flex items-center gap-2 text-slate-400 text-xs font-mono tracking-wider">
            <TerminalIcon className="w-3 h-3 text-blue-400" /> main.py
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 flex-1 overflow-hidden font-mono text-sm leading-relaxed text-blue-50/80 rounded-b-2xl">
          <pre className="whitespace-pre-wrap break-words">
            <code>
              {displayedText}
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-2 h-4 bg-blue-400 ml-1 align-middle shadow-[0_0_8px_rgba(96,165,250,0.8)]"
              />
            </code>
          </pre>
        </div>
        
        {/* Decorative elements indicating activity */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3 opacity-60">
          <div className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest">SYS: ONLINE</div>
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" 
          />
        </div>

        {/* Scanline overlay for retro effect */}
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.02)_50%,rgba(255,255,255,0)_100%)] bg-[length:100%_4px] pointer-events-none opacity-20" />


      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-40 relative overflow-hidden px-6 bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Minha Filosofia</h2>
                <h3 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                  Minha Visão
                </h3>
              </div>

              <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg max-w-2xl">
                <p>
                  Minha atuação como desenvolvedor de software é construída sobre dedicação, responsabilidade e um profundo respeito pelo impacto da tecnologia nos negócios. Para mim, excelência técnica vai muito além de escrever código: trata-se de projetar <strong className="text-white font-medium">arquiteturas eficientes e performáticas</strong> que garantam a estabilidade e a segurança das aplicações a longo prazo.
                </p>
                <p>
                  A <strong className="text-white font-medium">Inteligência Artificial</strong> entra no meu trabalho como um instrumento de expansão. Meu foco é integrar inteligência de máquina no ecossistema de sistemas robustos para resolver gargalos complexos e otimizar regras de negócio. Isso significa unir a precisão da engenharia de software tradicional com a inovação da IA, mantendo sempre o rigor técnico, a governança dos dados e a performance como prioridades absolutas.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/5">
                {[
                  { label: "Padrão", val: "Clean Arch", icon: <Star className="w-4 h-4" /> },
                  { label: "Foco", val: "AI & Distributed", icon: <BookOpen className="w-4 h-4" /> },
                  { label: "Meta", val: "Maximum Impact", icon: <Award className="w-4 h-4" /> }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-blue-500 bg-blue-500/10 w-8 h-8 rounded-lg flex items-center justify-center">{item.icon}</div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-white tracking-wide">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left group cursor-default"
              >
                <div className="relative shrink-0">
                  {/* Outer animated gradient ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-700" />
                  
                  {/* Rotating dashed ring */}
                  <div className="absolute -inset-3 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite]" />
                  
                  <div className="absolute -inset-3 rounded-full border border-dashed border-blue-500/30 animate-[spin_20s_linear_infinite_reverse]" />
                  
                  <img 
                    src={profilePic}
                    alt="Bruno Ribeiro"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover relative z-10 border-2 border-[#0d1117] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-[#0d1117] z-20 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                </div>
                
                <div className="pt-2">
                  <h4 className="text-white font-display font-bold text-3xl tracking-tight mb-2 group-hover:text-blue-50 transition-colors">Bruno Ribeiro</h4>
                  <p className="text-blue-400 font-medium tracking-wide text-sm uppercase">Software Developer Pleno</p>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-sm">
                    Construindo soluções escaláveis e arquiteturas que importam. Focado em performance, escala e entrega de valor.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Interactive Visual */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 z-10"
            >
              <InteractiveTerminal />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
