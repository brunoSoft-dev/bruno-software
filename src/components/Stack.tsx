import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Terminal, Cloud, Database, Globe, ChevronRight } from 'lucide-react';
import ContactCTA from './ContactCTA';

const stacks = [
  {
    category: "Backend",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    color: "rgba(96, 165, 250, 0.08)",
    description: "ConstruÃ§Ã£o de APIs, serviÃ§os e rotinas de processamento com foco em estabilidade, clareza e manutenÃ§Ã£o.",
    technologies: [
      {
        name: "Python",
        rationale: "Uso em automaÃ§Ãµes, APIs, integraÃ§Ãµes e soluÃ§Ãµes com foco em produtividade, dados e inteligÃªncia artificial."
      },
      {
        name: "Go",
        rationale: "Boa escolha para serviÃ§os concorrentes, rotinas intensivas e componentes que exigem previsibilidade em produÃ§Ã£o."
      },
      {
        name: "C#",
        rationale: "Aplicado em sistemas corporativos, APIs robustas e soluÃ§Ãµes que pedem organizaÃ§Ã£o, tipagem forte e manutenÃ§Ã£o contÃ­nua."
      }
    ]
  },
  {
    category: "Infraestrutura & Cloud",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    color: "rgba(52, 211, 153, 0.08)",
    description: "Ambientes versionados, deploys consistentes e operaÃ§Ã£o preparada para crescimento gradual do produto.",
    technologies: [
      {
        name: "Docker",
        rationale: "PadronizaÃ§Ã£o de ambientes, empacotamento de serviÃ§os e execuÃ§Ã£o mais previsÃ­vel entre desenvolvimento e produÃ§Ã£o."
      },
      {
        name: "Railway, Vercel & Render",
        rationale: "Deploy e hospedagem de aplicaÃ§Ãµes web, APIs e serviÃ§os com velocidade, praticidade e integraÃ§Ã£o com fluxos modernos."
      },
      {
        name: "Google Cloud",
        rationale: "Base para hospedar aplicaÃ§Ãµes, integrar serviÃ§os gerenciados e preparar soluÃ§Ãµes para escala e operaÃ§Ã£o em nuvem."
      }
    ]
  },
  {
    category: "Dados & SeguranÃ§a",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: "rgba(192, 132, 252, 0.08)",
    description: "Modelagem, persistÃªncia, cache e autenticaÃ§Ã£o tratados como partes centrais da arquitetura.",
    technologies: [
      {
        name: "MySQL",
        rationale: "Banco relacional para persistÃªncia estruturada, consultas consistentes e organizaÃ§Ã£o de dados de negÃ³cio."
      },
      {
        name: "Redis",
        rationale: "Usado para cache, sessÃµes, filas leves e reduÃ§Ã£o de carga em operaÃ§Ãµes acessadas com frequÃªncia."
      },
      {
        name: "Criptografia, JWT & OAuth 2.0",
        rationale: "ImplementaÃ§Ã£o de autenticaÃ§Ã£o, autorizaÃ§Ã£o e proteÃ§Ã£o de dados com tokens, escopos e boas prÃ¡ticas de seguranÃ§a."
      }
    ]
  },
  {
    category: "ExperiÃªncia Frontend",
    icon: <Globe className="w-5 h-5 text-rose-400" />,
    color: "rgba(251, 113, 133, 0.08)",
    description: "Interfaces responsivas, acessÃ­veis e consistentes, com atenÃ§Ã£o Ã  experiÃªncia de uso e performance.",
    technologies: [
      {
        name: "React, Next.js & Vite",
        rationale: "Base para interfaces componentizadas, renderizaÃ§Ã£o eficiente e produtos web com boa organizaÃ§Ã£o de cÃ³digo."
      },
      {
        name: "Tailwind CSS",
        rationale: "Facilita a criaÃ§Ã£o de interfaces consistentes, com estilos reutilizÃ¡veis e ajustes rÃ¡pidos sem CSS excessivo."
      },
      {
        name: "HTML/CSS",
        rationale: "FundaÃ§Ã£o para marcaÃ§Ã£o semÃ¢ntica, responsividade, acessibilidade e refinamento visual de interfaces."
      }
    ]
  }
];

function StackCard({ stack, index }: { stack: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative p-8 md:p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${stack.color},
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-1000" />

      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:scale-110 group-hover:rotate-[3deg] transition-all duration-500 shadow-xl">
            {stack.icon}
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-white font-display group-hover:text-white/90 transition-colors">{stack.category}</h4>
        </div>

        <p className="text-slate-400 text-base leading-7 mb-8 pb-8 border-b border-white/5 group-hover:border-white/10 transition-colors duration-500">
          {stack.description}
        </p>

        <div className="space-y-2">
          {stack.technologies.map((tech: any, i: number) => (
            <div key={i} className="group/item flex gap-4 p-4 -mx-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 cursor-default">
              <div className="mt-1 shrink-0">
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover/item:text-blue-400 group-hover/item:translate-x-1 group-hover/item:scale-110 transition-all duration-300" />
              </div>
              <div>
                <h5 className="text-white font-medium text-base mb-1.5 group-hover/item:text-white transition-colors">{tech.name}</h5>
                <p className="text-slate-500 text-base leading-7 group-hover/item:text-slate-300 transition-colors">
                  {tech.rationale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const Stack = () => {
  return (
    <section id="stack" className="py-32 relative px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
            >
              Capabilities
            </motion.h2>
            <h3 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tight">
              Ecossistema <span className="text-slate-600 italic">tÃ©cnico.</span>
            </h3>
            <p className="mt-6 text-slate-400 text-lg font-light">
              Tecnologias que utilizo para construir produtos estÃ¡veis, evolutivos e preparados para operaÃ§Ã£o real, da arquitetura Ã  interface.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <ContactCTA
              buttonLabel="Contato"
              buttonClassName="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stacks.map((stack, index) => (
            <StackCard key={index} stack={stack} index={index} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <ContactCTA
            buttonLabel="[ contato técnico ]"
            buttonClassName="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Stack;
