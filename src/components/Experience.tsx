import { motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Zap } from 'lucide-react';
import ContactCTA from './ContactCTA';

const experiences = [
  {
    company: "Resultados360Â°",
    role: "Software Developer Pleno",
    period: "2024 â€” Presente",
    description: "Liderando iniciativas de IA e arquitetura de sistemas crÃ­ticos para o ecossistema de comunicaÃ§Ã£o empresarial.",
    impacts: [
      {
        title: "InovaÃ§Ã£o em IA",
        problem: "Processamento manual de milhares de chamadas impossibilitava a extraÃ§Ã£o de dados estratÃ©gicos.",
        action: "Arquitetei o Call360Â° AI, integrando transcriÃ§Ã£o em tempo real e anÃ¡lise preditiva via LLMs.",
        result: "ReduÃ§Ã£o de 70% no tempo operacional de auditoria e criaÃ§Ã£o de uma nova linha de receita para a empresa."
      },
      {
        title: "Escalabilidade & SeguranÃ§a",
        problem: "Instabilidade em picos de trÃ¡fego e falta de um padrÃ£o de identidade robusto.",
        action: "Migrei o core de autenticaÃ§Ã£o para OAuth 2.0 e implementei padrÃµes de concorrÃªncia em Go.",
        result: "Estabilidade de 99.9% em picos de 5x o trÃ¡fego normal e conformidade total com protocolos de seguranÃ§a enterprise."
      }
    ]
  },
  {
    company: "Projetos EstratÃ©gicos & Consultoria",
    role: "Software Engineer",
    period: "2022 â€” 2023",
    description: "AtuaÃ§Ã£o em projetos complexos focados em backend, seguranÃ§a de dados e integraÃ§Ãµes crÃ­ticas.",
    impacts: [
      {
        title: "Ecossistemas de Dados",
        problem: "Gargalos de processamento em pipelines de dados legados.",
        action: "OtimizaÃ§Ã£o de queries complexas e implementaÃ§Ã£o de cache inteligente com Redis.",
        result: "Melhoria de 400% na velocidade de resposta das APIs de relatÃ³rios."
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-32 relative px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 flex flex-col gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
            >
              Track Record
            </motion.h2>
            <h3 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
              ExperiÃªncia focada <br /> em <span className="text-slate-400 italic">gerar valor.</span>
            </h3>
          </div>

          <div className="flex justify-center md:justify-end">
            <ContactCTA
              buttonLabel="Contato"
              buttonClassName="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5"
            />
          </div>
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

                <div className="w-full md:w-2/3 space-y-8">
                  {exp.impacts.map((impact, i) => (
                    <div key={i} className="group border border-white/[0.08] bg-white/[0.015] p-7 md:p-9 rounded-xl transition-colors duration-300 hover:border-white/[0.16] hover:bg-white/[0.025]">
                      <div className="flex items-start gap-5 mb-8">
                        <div className="w-10 h-10 rounded-md border border-white/[0.08] bg-white/[0.03] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white transition-colors duration-300">
                          <Target className="w-4 h-4" />
                        </div>
                        <h5 className="text-2xl font-semibold text-white tracking-tight mt-1">{impact.title}</h5>
                      </div>

                      <div className="grid grid-cols-1 gap-7">
                        <div className="space-y-2 border-t border-white/[0.06] pt-5">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">O Problema</span>
                          <p className="text-slate-400 text-base leading-7">{impact.problem}</p>
                        </div>
                        <div className="space-y-2 border-t border-white/[0.06] pt-5">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Minha AtuaÃ§Ã£o</span>
                          <p className="text-slate-400 text-base leading-7">{impact.action}</p>
                        </div>
                        <div className="space-y-2 border-t border-white/[0.1] pt-5">
                          <div className="flex items-center gap-2 mb-2 text-slate-300">
                            <Zap className="w-4 h-4" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">Resultado Gerado</span>
                          </div>
                          <p className="text-slate-200 font-medium text-base leading-7">{impact.result}</p>
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
