import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, X } from 'lucide-react';

type ContactLink = {
  href: string;
  icon: typeof MessageCircle;
  label: string;
  value: string;
};

type ContactCTAProps = {
  buttonClassName?: string;
  buttonLabel?: string;
};

const contactLinks: ContactLink[] = [
  {
    href: 'https://wa.me/5519990154225',
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(19) 99015-4225'
  },
  {
    href: 'https://github.com/BrunoRS17',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/BrunoRS17'
  },
  {
    href: 'https://www.linkedin.com/in/bruno-ribeiro-778243264/',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bruno-ribeiro-778243264'
  },
  {
    href: 'mailto:brunosilribeiro04@gmail.com',
    icon: Mail,
    label: 'Email',
    value: 'brunosilribeiro04@gmail.com'
  }
];

const defaultButtonClassName =
  'inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5';

const ContactCTA = ({
  buttonClassName = defaultButtonClassName,
  buttonLabel = 'Contato'
}: ContactCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={buttonClassName}>
        {buttonLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6"
          >
            <button
              type="button"
              aria-label="Fechar contato"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-[#0d1117]/95 p-6 md:p-8 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-cta-title"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.36em] text-slate-500">
                    Contato
                  </p>
                  <h3 id="contact-cta-title" className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                    Fale Comigo
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Fechar modal"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-white transition hover:bg-white/5"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {contactLinks.map(({ href, icon: Icon, label, value }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-white transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
                        {label}
                      </p>
                      <p className="truncate text-sm text-white md:text-base">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactCTA;
