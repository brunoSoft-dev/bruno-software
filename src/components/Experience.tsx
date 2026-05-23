import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, Calendar, Target, Zap, Maximize2, ChevronDown } from 'lucide-react';

import joiaImage from '../assets/experience/joia.png';
import agentesImage from '../assets/experience/Agentes_de_IA_Cognitivos_Preditivos.png';
import webhookImage from '../assets/experience/webhook.png';
import r360LandingImage from '../assets/experience/r360_landingPage.png';
import epiImage from '../assets/experience/epi.png';

const experiences = [
  {
    company: "Resultados360°",
    role: "Software Developer Pleno",
    period: "Fevereiro/2026 — Presente",
    description: "Liderança técnica e arquitetura de sistemas no ecossistema enterprise da Resultados360°. Projetando soluções de alto desempenho que unem inteligência artificial generativa/preditiva com orquestração assíncrona de telefonia, motores distribuídos de Webhooks, APIs de checkout financeiro com integridade ACID e desenvolvimento de landing pages modernas com React, Vite e Tailwind CSS v4.",
    impacts: [
      {
        title: "Call360° AI — Orquestrador de Voz",
        problem: "Desenvolver um ecossistema altamente resiliente para automatização de comunicações corporativas por voz via agentes de IA dinâmicos, com tratamento de eventos de telefonia assíncronos e em tempo real.",
        action: "Liderei e atuei como principal engenheiro backend no desenvolvimento da plataforma utilizando FastAPI. Criei sistemas de orquestração de chamadas orientadas a contexto, integrei canais de telefonia com processamento reativo e estruturei fluxos robustos de autenticação, ORM e RBAC.",
        result: "Provisionamento de chamadas inteligentes de alta performance, permitindo a criação de agentes personalizados com separação estrita de responsabilidades e manutenibilidade contínua."
      },
      {
        title: "API Generativa & Failover Dual-LLM",
        problem: "Garantir a materialização de designs únicos de joias em segundos de forma esteticamente impecável e com alta confiabilidade operacional em APIs de imagens.",
        action: "Desenvolvi uma API de geração de imagens personalizada integrada ao e-commerce de luxo, implementando uma arquitetura de failover em duas camadas com OpenAI e Gemini (onde uma assume na ausência ou erro da outra).",
        result: "Zero indisponibilidade no motor de co-criação de joias e remoção de atritos entre a inspiração visual do cliente e a finalização da compra.",
        image: joiaImage
      },
      {
        title: "Agentes de IA Cognitivos & Preditivos",
        problem: "Identificar, analisar e notificar erros de infraestrutura silenciosos em larga escala de forma proativa antes que impactem a operação.",
        action: "Desenvolvi um sistema de agentes cognitivos que analisa logs de infraestrutura, integrado a Zabbix, Prometheus, Jira e fluxos de relatórios. Implementei um fluxo de aprendizado contínuo recursivo baseado na usabilidade do sistema.",
        result: "Diagnósticos preventivos avançados com maior precisão na resolução automatizada de incidentes críticos conforme o sistema é utilizado.",
        image: agentesImage
      },
      {
        title: "Checkout de Assinaturas & Motor ACID",
        problem: "Desenvolver um fluxo transacional completo para assinaturas recorrentes com tratamento de tolerância a inadimplência e controle de afiliações.",
        action: "Desenvolvi uma API completa de checkout com faturamento automático, controle de prazo de tolerância de pagamentos, cancelamento preventivo e regras de repasse para afiliados integrados ao gateway da Greenn, aplicando práticas estritas de transações ACID e concorrência com FastAPI.",
        result: "Processamento seguro e livre de race conditions de transações financeiras simultâneas, mantendo registros integros e consistência total de dados."
      },
      {
        title: "Webhook Builder Platform",
        problem: "Permitir que usuários finais configurem disparadores automáticos para fluxos da plataforma R360 de maneira segura, controlada e com contagem precisa.",
        action: "Desenvolvi uma aplicação robusta de Webhooks integrada à plataforma Resultados360° utilizando FastAPI e SQLAlchemy. Implementei tratamento avançado de concorrência, contagem atômica de requisições por webhook e transações ACID integradas à Greenn para controle de pacotes de dados contratados.",
        result: "Disparo de fluxos externos em tempo real com excelente taxa de vazão e total controle financeiro sobre o consumo e volumetria das requisições.",
        image: webhookImage
      },
      {
        title: "Landing Page R360 (React & Tailwind v4)",
        problem: "Construir uma página web de conversão de alto impacto e carregamento extremamente rápido para a venda de assinaturas do ecossistema R360.",
        action: "Desenvolvi uma landing page moderna estruturada por seções com React, Vite, Tailwind CSS v4 e animações de alta performance com a biblioteca React Bits, focando na eliminação de atritos visuais e melhores práticas de conversão UI/UX.",
        result: "Interface fluida de carregamento instantâneo com forte apelo visual, alinhada às melhores métricas de conversão e taxas de conversão de novos usuários.",
        image: r360LandingImage
      }
    ]
  },
  {
    company: "Resultados360°",
    role: "Software Developer Júnior",
    period: "Julho/2025 — Fevereiro/2026",
    description: "Desenvolvimento de ponta a ponta de novas features voltadas para inteligência artificial corporativa, com modelagem de APIs robustas e práticas ágeis.",
    impacts: [
      {
        title: "Integração de LLMs e ML",
        problem: "Ausência de ferramentas integradas para análise preditiva automatizada e processamento estruturado de informações internas não estruturadas.",
        action: "Desenvolvi aplicações robustas integradas a Large Language Models (LLMs) usando Python e frameworks modernos com Agno e LangChain.",
        result: "Automatização completa dos fluxos de tomada de decisão internos e otimização drástica no tempo operacional de processamento de relatórios."
      },
      {
        title: "Construção de APIs e POO",
        problem: "Necessidade de expor microsserviços e lógica corporativa de forma isolada, segura e performática.",
        action: "Projetei e otimizei APIs RESTful e componentes de lógica com Python e POO (Programação Orientada a Objetos), utilizando Node.js/Go em rotinas específicas integradas a bancos de dados.",
        result: "Entrega ágil de features complexas rigorosamente no prazo, mantendo alto controle de versão via Git e manutenibilidade estrutural."
      }
    ]
  },
  {
    company: "In-Haus Industrial",
    role: "Auxiliar de Tecnologia e Administração",
    period: "Janeiro/2025 — Junho/2025",
    description: "Otimização de processos administrativos e digitais, organization de fluxos de documentos no SharePoint e engenharia de software aplicada à gestão física de EPIs.",
    impacts: [
      {
        title: "Organização & Fluxo de Processos",
        problem: "Fluxos desordenados de relatórios (Financeiro/RH), rastreabilidade precária de certificados corporativos e dificuldades de acessos dos colaboradores.",
        action: "Estruturei documentos digitais no SharePoint garantindo rastreabilidade, coordenei certificados/treinamentos e liderei o suporte de contas de usuário.",
        result: "Aprimoramento da eficiência administrativa, busca de informações cruciais com maior facilidade e organização e governança de acessos simplificada."
      },
      {
        title: "Desenvolvimento de Web App de EPIs",
        problem: "Falta de controle centralizado e digitalizado em tempo real sobre a movimentação, entrada, saída e requisições de EPIs.",
        action: "Desenvolvi integralmente um website para gestão de EPIs com React, Python e MySQL, permitindo requisições autônomas por colaborador e alertas automatizados de estoque crítico para compras preventivas.",
        result: "Estoque de EPIs 100% digitalizado, eliminação de desvios operacionais e compras administrativas otimizadas de forma proativa.",
        image: epiImage
      }
    ]
  },
  {
    company: "Desenvolvedor Freelancer",
    role: "Full Stack Developer",
    period: "Junho/2024 — Novembro/2025",
    description: "Desenvolvimento de soluções web personalizadas e sistemas sob medida, focado em arquitetura de servidor confiável, processamento de dados e entrega ágil.",
    impacts: [
      {
        title: "Processamento de Dados & APIs",
        problem: "Empresas e clientes necessitavam de relatórios automatizados, extração de métricas de bancos de dados e exposição segura de APIs.",
        action: "Desenvolvi rotinas analíticas em Python para geração automática de gráficos analíticos com matplotlib",
        result: "Aplicações de alto desempenho facilitando análises corporativas ricas e tomadas de decisão orientadas a dados."
      },
      {
        title: "Sistema FECCETEC",
        problem: "O processo de avaliação de projetos da feira de ciências da ETEC de Mogi Guaçu precisava de digitalização segura de notas, modelagem de dados dinâmica e evolução incremental, o que antes era feito tudo no papel.",
        action: "Planejei a modelagem de dados com MySQL, criei endpoints e programei a lógica avaliativa da feira (2024) com PHP, evoluindo a aplicação continuamente com melhorias incrementais em 2025, e alterando stack para Node.js",
        result: "Substituição completa do fluxo analógico por digitalização total das avaliações, resultando em excelente performance e notas definidas logo após o evento, o que antes demorava semanas."
      }
    ]
  }
];

const CollapsibleSection = ({ label, variant = 'default', children }: { label: string; variant?: 'default' | 'result'; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isResult = variant === 'result';

  return (
    <div className={`border-t ${isResult ? 'border-white/[0.1]' : 'border-white/[0.06]'}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group/collapse cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {isResult && <Zap className="w-4 h-4 text-slate-300" />}
          <span className={`text-[11px] font-bold uppercase tracking-widest ${isResult ? 'text-slate-300' : 'text-slate-500'} group-hover/collapse:text-slate-300 transition-colors duration-300`}>
            {label}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-600 group-hover/collapse:text-slate-400 transition-colors duration-300" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="experiencia" className="py-32 relative px-6">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
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
              Experiências
            </h3>
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
                      <div className="flex items-start justify-between gap-5 mb-2">
                        <div className="flex items-start gap-5">
                          <div className="w-10 h-10 rounded-md border border-white/[0.08] bg-white/[0.03] flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white transition-colors duration-300">
                            <Target className="w-4 h-4" />
                          </div>
                          <h5 className="text-2xl font-semibold text-white tracking-tight mt-1">{impact.title}</h5>
                        </div>

                        {'image' in impact && impact.image && (
                          <button
                            onClick={() => setSelectedImage(impact.image)}
                            className="relative w-14 h-9 md:w-16 md:h-10 rounded-md overflow-hidden border border-white/10 bg-[#0d1117]/50 cursor-zoom-in transition-all duration-500 hover:border-blue-500/40 hover:scale-105 shrink-0 shadow-lg flex items-center justify-center group/thumb"
                            title="Clique para ver em tela cheia"
                            type="button"
                          >
                            <img 
                              src={impact.image} 
                              alt="Ver preview"
                              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/0 transition-colors duration-500" />
                            
                            {/* Tiny hover icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 bg-black/20">
                              <Maximize2 className="w-3.5 h-3.5 text-white drop-shadow-md" />
                            </div>
                          </button>
                        )}
                      </div>

                      <CollapsibleSection label="O Problema" variant="default">
                        <p className="text-slate-400 text-base leading-7">{impact.problem}</p>
                      </CollapsibleSection>
                      <CollapsibleSection label="Minha Atuação" variant="default">
                        <p className="text-slate-400 text-base leading-7">{impact.action}</p>
                      </CollapsibleSection>
                      <CollapsibleSection label="Resultado Gerado" variant="result">
                        <p className="text-slate-200 font-medium text-base leading-7">{impact.result}</p>
                      </CollapsibleSection>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking image container
            >
              <img 
                src={selectedImage} 
                alt="Visualização do Projeto" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl bg-slate-950"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 border border-white/10 px-5 py-2.5 rounded-full transition hover:bg-white/10"
                type="button"
              >
                Fechar [ESC]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
