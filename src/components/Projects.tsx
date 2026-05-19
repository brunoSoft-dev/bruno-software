import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, ShieldAlert, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Call360° AI",
    category: "AI Engineering",
    shortDesc: "Real-time voice processing & predictive analysis.",
    context: "Processamento de áudio em tempo real com extração de insights estratégicos via LLM.",
    decision: "Arquitetura baseada em microsserviços Node.js e Redis para processamento assíncrono.",
    results: "70% de redução no tempo de auditoria e novos fluxos de receita baseados em dados.",
    tech: ["OpenAI", "Node.js", "Redis", "K8s"],
    image: "https://images.unsplash.com/photo-1551288049-bbb65181ef9b?q=80&w=2070&auto=format&fit=crop",
    icon: <Cpu className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Security Identity",
    category: "Cybersecurity",
    shortDesc: "Enterprise IAM & Identity Protocol Engine.",
    context: "Protocolo de identidade centralizado para ecossistemas multi-produto.",
    decision: "Implementação de OAuth 2.0 / OIDC com foco em segurança granular e alta disponibilidade.",
    results: "Gestão de +100k usuários com zero incidentes de segurança reportados.",
    tech: ["OAuth 2.0", "Java", "Docker", "IAM"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2013&auto=format&fit=crop",
    icon: <ShieldAlert className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Data Nexus API",
    category: "Systems Design",
    shortDesc: "High-throughput data core for telemetry.",
    context: "Motor de agregação de dados de telemetria para sistemas de alta carga.",
    decision: "Uso de Go e InfluxDB para otimização de escrita e leitura em tempo real.",
    results: "Aumento de 300% no throughput de dados processados sem aumento de custo.",
    tech: ["Go", "InfluxDB", "gRPC", "Prometheus"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    icon: <Layers className="w-4 h-4" />
  }
];

const ProjectCard = ({ project, onClick }: { project: typeof projects[0], onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="relative group cursor-pointer aspect-[4/5] md:aspect-[4/3] flex flex-col justify-end p-8 md:p-10 rounded-3xl border border-white/10 bg-[#0d1117] hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt="" 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-[#0a0f16]/60 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_800px_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_40%)] transition-opacity duration-500" />
      </div>
      
      <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0a0f16]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-500">
            {project.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-blue-400 transition-colors duration-500">
            {project.category}
          </span>
        </div>
        <h4 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
          {project.title}
        </h4>
        <p className="text-sm text-slate-400 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.shortDesc}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projetos" className="py-40 relative px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6"
          >
            Curated Work
          </motion.h2>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
            Projetos & <span className="text-slate-400 italic">Resultados.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl bg-bg-card border border-white/5 rounded-[3rem] overflow-hidden"
            >
              <div className="p-12 md:p-20">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-10 right-10 p-2 text-slate-600 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-blue-500 mb-6 block">{selectedProject.category}</span>
                <h4 className="font-display text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight">{selectedProject.title}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-700 mb-3">Contexto</h5>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{selectedProject.context}</p>
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-700 mb-3">Solução</h5>
                    <p className="text-slate-400 text-xs leading-relaxed font-light">{selectedProject.decision}</p>
                  </div>
                  <div>
                    <h5 className="text-[9px] font-bold uppercase tracking-widest text-emerald-900 mb-3">Impacto</h5>
                    <p className="text-emerald-500/80 font-medium text-xs leading-relaxed">{selectedProject.results}</p>
                  </div>
                </div>

                <div className="mt-16 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-1 border border-white/5 text-slate-600 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
