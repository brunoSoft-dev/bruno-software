import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MapPin, ExternalLink } from 'lucide-react';
import ContactCTA from './ContactCTA';

const steps = [
  {
    id: 'name',
    question: "Vamos comeÃ§ar pelo bÃ¡sico. Qual o seu nome?",
    placeholder: "Seu nome completo...",
    type: "text"
  },
  {
    id: 'email',
    question: "Prazer em te conhecer, {name}. Qual o seu melhor e-mail?",
    placeholder: "seu@email.com",
    type: "email"
  },
  {
    id: 'message',
    question: "Como posso ajudar no seu prÃ³ximo desafio tÃ©cnico?",
    placeholder: "Descreva brevemente o projeto ou ideia...",
    type: "textarea"
  }
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [steps[currentStep].id]: e.target.value });
  };

  const currentStepData = steps[currentStep];
  const questionText = currentStepData.question.replace('{name}', formData.name || 'amigo');

  return (
    <section id="contato" className="py-32 relative px-6 min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {!isSubmitted ? (
          <div className="space-y-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="flex gap-2 max-w-[200px]">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-blue-500' : 'bg-white/5'}`} 
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-10"
              >
                <h3 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                  {questionText}
                </h3>

                <ContactCTA
                  buttonLabel="Canais diretos"
                  buttonClassName="inline-flex w-fit items-center justify-center rounded-none border-b border-white/20 pb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-slate-300 transition hover:border-white hover:text-white"
                />

                <div className="relative group">
                  {currentStepData.type === 'textarea' ? (
                    <textarea
                      value={formData[currentStepData.id as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={currentStepData.placeholder}
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-3xl text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-800 min-h-[150px] resize-none"
                    />
                  ) : (
                    <input
                      type={currentStepData.type}
                      value={formData[currentStepData.id as keyof typeof formData]}
                      onChange={handleInputChange}
                      onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                      placeholder={currentStepData.placeholder}
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-4xl text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-800"
                    />
                  )}

                  <div className="absolute right-0 bottom-6">
                    <button 
                      onClick={handleNext}
                      className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-blue-50 transition-all active:scale-95 group"
                    >
                      {currentStep === steps.length - 1 ? 'Enviar' : 'PrÃ³ximo'}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-700">
              Pressione <span className="text-slate-500">Enter â†µ</span> para continuar
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-10">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
              Mensagem <br /> <span className="text-slate-400 italic">processada.</span>
            </h3>
            <p className="text-slate-400 text-lg font-light max-w-md mx-auto">
              Obrigado, {formData.name}. Recebi seus dados e entrarei em contato em breve para discutirmos seu projeto.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={() => { setIsSubmitted(false); setCurrentStep(0); setFormData({ name: '', email: '', message: '' }); }}
                className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
              >
                Enviar outra mensagem
              </button>

              <ContactCTA
                buttonLabel="Abrir canais"
                buttonClassName="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition hover:bg-slate-200"
              />
            </div>
          </motion.div>
        )}

        {!isSubmitted && (
          <div className="mt-32 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:brunosilribeiro04@gmail.com"
              className="flex items-center gap-4 group"
            >
              <Mail className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">brunosilribeiro04@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-ribeiro-778243264/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <div className="flex items-center gap-4 group">
              <MapPin className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Brasil | Remoto</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
