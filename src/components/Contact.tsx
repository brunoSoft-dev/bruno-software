import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, CheckCircle2, Mail, MapPin, ExternalLink } from 'lucide-react';

const steps = [
  {
    id: 'name',
    question: "Vamos começar pelo básico. Qual o seu nome?",
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
    question: "Como posso ajudar no seu próximo desafio técnico?",
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
      {/* Background Spotlight */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {!isSubmitted ? (
          <div className="space-y-12">
            {/* Progress Bar */}
            <div className="flex gap-2 max-w-[200px]">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= currentStep ? 'bg-blue-500' : 'bg-white/5'}`} 
                />
              ))}
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
                      {currentStep === steps.length - 1 ? 'Enviar' : 'Próximo'}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-700">
              Pressione <span className="text-slate-500">Enter ↵</span> para continuar
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
            <button 
              onClick={() => { setIsSubmitted(false); setCurrentStep(0); setFormData({ name: '', email: '', message: '' }); }}
              className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        )}

        {/* Footer Contact Info */}
        {!isSubmitted && (
          <div className="mt-32 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <Mail className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">ribeiro.bruno.dev@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-blue-500 transition-colors" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">linkedin.com/in/bruno-ribeiro</span>
            </div>
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
