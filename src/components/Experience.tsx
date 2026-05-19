import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Zap } from 'lucide-react';

const experiences = [
  {
    company: "Resultados360°",
    role: "Software Developer Pleno",
    period: "2024 — Presente",
    description: "Liderando iniciativas de IA e arquitetura de sistemas críticos para o ecossistema de comunicação empresarial.",
    impacts: [
      {
        title: "Inovação em IA",
        problem: "Processamento manual de milhares de chamadas impossibilitava a extração de dados estratégicos.",
        action: "Arquitetei o Call360° AI, integrando transcrição em tempo real e análise preditiva via LLMs.",
        result: "Redução de 70% no tempo operacional de auditoria e criação de uma nova linha de receita para a empresa."
      },
      {
        title: "Escalabilidade & Segurança",
        problem: "Instabilidade em picos de tráfego e falta de um padrão de identidade robusto.",
        action: "Migrei o core de autenticação para OAuth 2.0 e implementei padrões de concorrência em Go.",
        result: "Estabilidade de 99.9% em picos de 5x o tráfego normal e conformidade total com protocolos de segurança enterprise."
      }
    ]
  },
  {
    company: "Projetos Estratégicos & Consultoria",
    role: "Software Engineer",
    period: "2022 — 2023",
    description: "Atuação em projetos complexos focados em backend, segurança de dados e integrações críticas.",
    impacts: [
      {
        title: "Ecossistemas de Dados",
        problem: "Gargalos de processamento em pipelines de dados legados.",
        action: "Otimização de queries complexas e implementação de cache inteligente com Redis.",
        result: "Melhoria de 400% na velocidade de resposta das APIs de relatórios."
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-32 relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            Track Record
          </motion.h2>
          <h3 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
            Experiência focada <br /> em <span className="text-slate-400 italic">gerar valor.</span>
          </h3>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-12">
                {/* Left Side: Header */}
                <div className="w-full md:w-1/3">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 text-blue-500 mb-6">
                      <Briefcase className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">{exp.company}</span>
                    </div>
                    <h4 className="text-3xl font-bold text-white mb-4 font-display">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-6">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Right Side: Impact Cards */}
                <div className="w-full md:w-2/3 space-y-8">
                  {exp.impacts.map((impact, i) => (
                    <div key={i} className="p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-blue-400" />
                        </div>
                        <h5 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mt-2">{impact.title}</h5>
                      </div>

                      <div className="grid grid-cols-1 gap-8">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">O Problema</span>
                          <p className="text-slate-400 text-sm leading-relaxed">{impact.problem}</p>
                        </div>
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Minha Atuação</span>
                          <p className="text-slate-400 text-sm leading-relaxed">{impact.action}</p>
                        </div>
                        <div className="space-y-2 p-6 rounded-2xl bg-blue-500/[0.05] border border-blue-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-blue-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Resultado Gerado</span>
                          </div>
                          <p className="text-blue-100/90 font-medium text-sm leading-relaxed">{impact.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
