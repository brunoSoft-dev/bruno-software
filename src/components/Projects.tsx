import { useState, useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, Terminal, Gem, Map, Gamepad2, MessageCircle, Search as SearchIcon } from 'lucide-react';
import ContactCTA from './ContactCTA';

import call360Image1 from '../assets/projects/call360/image1.jpg';
import call360Image2 from '../assets/projects/call360/image2.jpg';
import call360Image3 from '../assets/projects/call360/image3.jpg';
import call360ImageCover from '../assets/projects/call360/cover.png'
import call360Audio from '../assets/projects/call360/Audio-Call360°.wav';
import textMindImage1 from '../assets/projects/text-mind/image1.jpg';
import textMindImage2 from '../assets/projects/text-mind/image2.jpg';
import textMindImage3 from '../assets/projects/text-mind/image3.jpg';
import TextMindImageCover from '../assets/projects/text-mind/cover.png';
import wandreImage1 from '../assets/projects/wandre/image1.jpg';
import wandreImage2 from '../assets/projects/wandre/image2.jpg';
import guiarImage1 from '../assets/projects/guiar/image1.jpg';
import guiarImage2 from '../assets/projects/guiar/image2.jpg';
import recomendacoesJogosImage1 from '../assets/projects/recomendacoes_jogos/image1.jpg';
import recomendacoesJogosImage2 from '../assets/projects/recomendacoes_jogos/image2.jpg';
import recomendacoesJogosCover from '../assets/projects/recomendacoes_jogos/cover.png';
import palantirImage1 from '../assets/projects/palantir/image1.jpg';
import palantirImage2 from '../assets/projects/palantir/image2.jpg';
import palantirImage3 from '../assets/projects/palantir/image3.jpg';

type Project = {
  id: number;
  title: string;
  category: string;
  role: string;
  shortDesc: string;
  context: string;
  decision: string;
  results: string;
  tech: string[];
  coverImage: string;
  images: string[];
  audio?: string;
  icon: ReactNode;
};

const normalizeSearch = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

const projects: Project[] = [
  {
    id: 1,
    title: "Call360° AI",
    category: "Voice AI Platform",
    role: "Liderança técnica e backend",
    shortDesc: "Orquestração de chamadas inteligentes com agentes de IA.",
    context: "Plataforma para automatizar comunicações por voz com agentes orientados a contexto, atendendo cenários de atendimento, qualificação de leads e coleta de feedback.",
    decision: "Estruturei o backend com FastAPI, autenticação, controle de acesso, integração com telefonia e tratamento de eventos assíncronos em tempo real.",
    results: "A aplicação organiza todo o ciclo de vida das chamadas, permite agentes pré-configurados e personalizados, e oferece uma base escalável para evolução contínua do produto.",
    tech: ["FastAPI", "IA Generativa", "Telefonia", "Eventos assíncronos", "Autenticação"],
    coverImage: call360ImageCover,
    images: [call360Image1, call360Image2, call360Image3],
    audio: call360Audio,
    icon: <PhoneCall className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Text-Mind",
    category: "NLP CLI",
    role: "Desenvolvimento Python",
    shortDesc: "Sumarização extrativa e análise de polaridade via terminal.",
    context: "Ferramenta local para triagem de grandes volumes de texto não estruturado, priorizando baixo overhead, velocidade e fidelidade semântica.",
    decision: "Implementei um pipeline com NLTK, filtragem de stopwords, pesos de frequência normalizada e distribuição espacial de sentenças para preservar a linha narrativa.",
    results: "O projeto consolidou uma base limpa para processamento textual, com camada de apresentação separada via Rich e diagnóstico tonal usando TextBlob.",
    tech: ["Python", "NLTK", "TextBlob", "Rich", "CLI"],
    coverImage: TextMindImageCover,
    images: [textMindImage1, textMindImage2, textMindImage3],
    icon: <Terminal className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Wandé Joias",
    category: "Luxury E-commerce",
    role: "API de IA generativa e supervisão",
    shortDesc: "Co-criação de joias personalizadas com IA generativa.",
    context: "Projeto de alta joalheria voltado à hiperpersonalização, conectando escolhas de metais, gemas e significados a modelos visuais gerados por IA.",
    decision: "Atuei no desenvolvimento da API personalizada de geração de imagens, com camadas OpenAI e Gemini para continuidade em caso de falha, além de supervisão técnica do fluxo.",
    results: "A solução reduz o atrito entre inspiração e compra, apoiando o trabalho em equipe e ampliando a personalização dentro de um e-commerce de luxo.",
    tech: ["OpenAI", "Gemini", "Image Generation", "API", "E-commerce"],
    coverImage: wandreImage1,
    images: [wandreImage1, wandreImage2],
    icon: <Gem className="w-4 h-4" />
  },
  {
    id: 4,
    title: "GUIAR",
    category: "Route Optimization",
    role: "Desenvolvimento de mapa e rotas",
    shortDesc: "Sistema para sugerir a melhor rota entre múltiplos pontos de entrega.",
    context: "Projeto apresentado na FECCETEC da ETEC Euro Albino de Souza para empresas que precisam otimizar entregas, tempo de rota e consumo de combustível.",
    decision: "Fui um dos desenvolvedores do sistema, com foco principal na manipulação do mapa, marcações e traçado de rotas usando Leaflet, Leaflet Routing Machine e OpenStreetMap.",
    results: "O sistema foi testado e documentado, demonstrando economia operacional e aprofundando minha experiência com JavaScript, mapas dinâmicos e rotas.",
    tech: ["PHP", "JavaScript", "Leaflet", "OpenStreetMap", "HTML/CSS"],
    coverImage: guiarImage2,
    images: [guiarImage1, guiarImage2],
    icon: <Map className="w-4 h-4" />
  },
  {
    id: 5,
    title: "Recomendações de Jogos",
    category: "Machine Learning",
    role: "Aplicação web e modelo",
    shortDesc: "Recomendação personalizada de jogos com similaridade entre usuários.",
    context: "Aplicação para visualizar usuários, jogos avaliados e sugestões personalizadas a partir de dados de avaliações.",
    decision: "Integrei uma aplicação Flask com Pandas e Scikit-Learn, utilizando Cosine Similarity para calcular proximidade entre perfis de jogadores.",
    results: "O projeto validou a integração entre machine learning e aplicação web em uma solução simples, funcional e clara para recomendação baseada em dados.",
    tech: ["Python", "Flask", "Pandas", "Scikit-Learn", "HTML/CSS"],
    coverImage: recomendacoesJogosCover,
    images: [recomendacoesJogosImage1, recomendacoesJogosImage2],
    icon: <Gamepad2 className="w-4 h-4" />
  },
  {
    id: 6,
    title: "Palantír",
    category: "Conversational AI",
    role: "Arquitetura experimental",
    shortDesc: "Experiência conversacional com personagens e agentes autônomos.",
    context: "Projeto experimental criado na plataforma R360 para testar arquiteturas de IA conversacional com personagens inspirados no universo de J.R.R. Tolkien.",
    decision: "Organizei conectores de IA, agentes independentes, prompts dinâmicos e camadas de roteamento e persistência para modular a experiência de cada personagem.",
    results: "A base permite expandir a experiência para um RPG interativo, com narrativas adaptadas em tempo real e integração futura a canais como WhatsApp e Instagram.",
    tech: ["R360", "Agentes de IA", "Prompts dinâmicos", "Roteamento", "Persistência"],
    coverImage: palantirImage3,
    images: [palantirImage1, palantirImage2, palantirImage3],
    icon: <MessageCircle className="w-4 h-4" />
  }
];

const ProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
          src={project.coverImage} 
          alt="" 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-[#0a0f16]/65 to-transparent" />
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const selectedProject = projects.find(p => p.id === selectedId);
  const selectedProjectImages = selectedProject
    ? selectedProject.images.filter((image) => image !== selectedProject.coverImage)
    : [];
  const normalizedQuery = normalizeSearch(query.trim());
  const filteredProjects = normalizedQuery
    ? projects.filter((project) => {
        const searchableContent = [
          project.title,
          project.category,
          project.role,
          project.shortDesc,
          ...project.tech
        ].join(" ");

        return normalizeSearch(searchableContent).includes(normalizedQuery);
      })
    : projects;

  return (
    <section id="projetos" className="py-40 relative px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
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

          <ContactCTA />
        </div>

        <div className="mb-10 max-w-xl">
          <label htmlFor="project-search" className="sr-only">Pesquisar projetos</label>
          <div className="group flex items-center gap-3 border-b border-white/10 py-3 transition-colors duration-300 focus-within:border-white/30">
            <SearchIcon className="w-4 h-4 text-slate-600 transition-colors duration-300 group-focus-within:text-slate-300" />
            <input
              id="project-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por projeto, tecnologia ou área"
              className="w-full bg-transparent text-sm md:text-base text-white placeholder:text-slate-600 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-sm text-slate-500">
            Nenhum projeto encontrado para essa busca.
          </p>
        )}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-bg-card border border-white/5 rounded-3xl"
            >
              <div className="relative p-8 md:p-12 lg:p-16">
                  <button 
                    onClick={() => setSelectedId(null)}
                    aria-label="Fechar projeto"
                    className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-blue-500 mb-5 block">{selectedProject.category}</span>
                  <h4 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{selectedProject.title}</h4>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-12">{selectedProject.role}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-3">Contexto</h5>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{selectedProject.context}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-3">Solução</h5>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{selectedProject.decision}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-3">Impacto</h5>
                      <p className="text-emerald-400/90 font-medium text-sm leading-relaxed">{selectedProject.results}</p>
                    </div>
                  </div>

                  {selectedProject.audio && (
                    <div className="mt-12 border-t border-white/5 pt-8">
                      <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-4">Demonstração em áudio</h5>
                      <audio controls src={selectedProject.audio} className="w-full" />
                    </div>
                  )}

                  {selectedProjectImages.length > 0 && (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProjectImages.map((image, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedImage(image)}
                          className="group/image overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] cursor-zoom-in"
                          aria-label={`Abrir imagem ${i + 1} do projeto ${selectedProject.title}`}
                        >
                          <img
                            src={image}
                            alt=""
                            className="aspect-video w-full object-cover transition duration-500 group-hover/image:scale-105 group-hover/image:opacity-90"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="mt-12 flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 border border-white/5 text-slate-500 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar imagem"
              className="absolute top-5 right-5 md:top-8 md:right-8 p-3 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              alt=""
              onClick={(event) => event.stopPropagation()}
              className="max-h-[88vh] max-w-[94vw] rounded-xl border border-white/10 object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
