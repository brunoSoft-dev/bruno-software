import { motion } from 'framer-motion';
import { Layers, Zap, Search, Target } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Discovery",
    description: "Mapeamento profundo de fluxos críticos e métricas de sucesso.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Architecture",
    description: "Design modular focado em escalabilidade e baixa latência.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Engineering",
    description: "Desenvolvimento iterativo com rigor técnico e segurança.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Impact",
    description: "Análise pós-deploy e evolução contínua baseada em dados.",
  }
];

const Process = () => {
  return (
    <section id="processo" className="py-40 relative px-6">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-dark min-h-[280px] p-10 md:p-12 lg:p-14 hover:bg-white/[0.015] transition-colors duration-700 group flex flex-col"
            >
              <div className="w-12 h-12 border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-slate-500 group-hover:text-slate-200 transition-colors duration-500 mb-16">
                {step.icon}
              </div>
              <div className="space-y-5 mt-auto">
                <span className="text-[10px] font-bold text-slate-600 tracking-[0.24em] uppercase">Phase 0{index + 1}</span>
                <h4 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">{step.title}</h4>
                <p className="text-slate-400 text-base font-light leading-7 group-hover:text-slate-300 transition-colors">
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
