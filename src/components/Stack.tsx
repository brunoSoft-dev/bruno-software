import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Terminal, Cloud, Database, Globe, ChevronRight } from 'lucide-react';

const stacks = [
  {
    category: "Backend",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
    color: "rgba(96, 165, 250, 0.08)",
    description: "Construção de APIs, serviços e rotinas de processamento com foco em estabilidade, clareza e manutenção.",
    technologies: [
      {
        name: "Python",
        rationale: "Uso em automações, APIs, integrações e soluções com foco em produtividade, dados e inteligência artificial."
      },
      {
        name: "Go",
        rationale: "Boa escolha para serviços concorrentes, rotinas intensivas e componentes que exigem previsibilidade em produção."
      },
      {
        name: "C#",
        rationale: "Aplicado em sistemas corporativos, APIs robustas e soluções que pedem organização, tipagem forte e manutenção contínua."
      }
    ]
  },
  {
    category: "Infraestrutura & Cloud",
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    color: "rgba(52, 211, 153, 0.08)",
    description: "Ambientes versionados, deploys consistentes e operação preparada para crescimento gradual do produto.",
    technologies: [
      {
        name: "Docker",
        rationale: "Padronização de ambientes, empacotamento de serviços e execução mais previsível entre desenvolvimento e produção."
      },
      {
        name: "Railway, Vercel & Render",
        rationale: "Deploy e hospedagem de aplicações web, APIs e serviços com velocidade, praticidade e integração com fluxos modernos."
      },
      {
        name: "Google Cloud",
        rationale: "Base para hospedar aplicações, integrar serviços gerenciados e preparar soluções para escala e operação em nuvem."
      }
    ]
  },
  {
    category: "Dados & Segurança",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: "rgba(192, 132, 252, 0.08)",
    description: "Modelagem, persistência, cache e autenticação tratados como partes centrais da arquitetura.",
    technologies: [
      {
        name: "MySQL",
        rationale: "Banco relacional para persistência estruturada, consultas consistentes e organização de dados de negócio."
      },
      {
        name: "Redis",
        rationale: "Usado para cache, sessões, filas leves e redução de carga em operações acessadas com frequência."
      },
      {
        name: "Criptografia, JWT & OAuth 2.0",
        rationale: "Implementação de autenticação, autorização e proteção de dados com tokens, escopos e boas práticas de segurança."
      }
    ]
  },
  {
    category: "Experiência Frontend",
    icon: <Globe className="w-5 h-5 text-rose-400" />,
    color: "rgba(251, 113, 133, 0.08)",
    description: "Interfaces responsivas, acessíveis e consistentes, com atenção à experiência de uso e performance.",
    technologies: [
      {
        name: "React, Next.js & Vite",
        rationale: "Base para interfaces componentizadas, renderização eficiente e produtos web com boa organização de código."
      },
      {
        name: "Tailwind CSS",
        rationale: "Facilita a criação de interfaces consistentes, com estilos reutilizáveis e ajustes rápidos sem CSS excessivo."
      },
      {
        name: "HTML/CSS",
        rationale: "Fundação para marcação semântica, responsividade, acessibilidade e refinamento visual de interfaces."
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
      {/* Dynamic Mouse Spotlight Layer */}
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

      {/* Corner subtle glow (static fallback/ambient) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-1000" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:scale-110 group-hover:rotate-[3deg] transition-all duration-500 shadow-xl">
            {stack.icon}
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-white font-display group-hover:text-white/90 transition-colors">{stack.category}</h4>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base leading-7 mb-8 pb-8 border-b border-white/5 group-hover:border-white/10 transition-colors duration-500">
          {stack.description}
        </p>

        {/* Interactive Technologies List */}
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
              Ecossistema <span className="text-slate-600 italic">técnico.</span>
            </h3>
            <p className="mt-6 text-slate-400 text-lg font-light">
              Tecnologias que utilizo para construir produtos estáveis, evolutivos e preparados para operação real, da arquitetura à interface.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stacks.map((stack, index) => (
            <StackCard key={index} stack={stack} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
