import { motion } from 'framer-motion';
import { Layers, Zap, Search, Target } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-4 h-4" />,
    title: "Discovery",
    description: "Mapeamento profundo de fluxos críticos e métricas de sucesso.",
  },
  {
    icon: <Layers className="w-4 h-4" />,
    title: "Architecture",
    description: "Design modular focado em escalabilidade e baixa latência.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Engineering",
    description: "Desenvolvimento iterativo com rigor técnico e segurança.",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Impact",
    description: "Análise pós-deploy e evolução contínua baseada em dados.",
  }
];

const Process = () => {
  return (
    <section id="processo" className="py-40 relative px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            Engineering Flow
          </motion.h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Metodologia <span className="text-slate-400 italic">linear.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-dark p-12 hover:bg-white/[0.01] transition-colors duration-700 group"
            >
              <div className="text-slate-700 group-hover:text-blue-500 transition-colors duration-500 mb-12">
                {step.icon}
              </div>
              <div className="space-y-4">
                <span className="text-[9px] font-bold text-slate-800 tracking-[0.2em] uppercase">Phase 0{index + 1}</span>
                <h4 className="font-display text-xl font-bold text-white group-hover:text-slate-300 transition-colors">{step.title}</h4>
                <p className="text-slate-600 text-sm font-light leading-relaxed group-hover:text-slate-500 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
