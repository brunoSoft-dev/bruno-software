import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

type ContactLink = {
  href: string;
  icon: 'whatsapp' | 'github' | 'linkedin' | 'email';
  title: string;
  detail?: string;
};

type ContactCTAProps = {
  buttonClassName?: string;
  buttonLabel?: string;
};

const contactLinks: ContactLink[] = [
  {
    href: 'https://wa.me/5519990154225',
    icon: 'whatsapp',
    title: 'Fale comigo'
  },
  {
    href: 'https://github.com/BrunoRS17',
    icon: 'github',
    title: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/bruno-ribeiro-778243264/',
    icon: 'linkedin',
    title: 'LinkedIn'
  },
  {
    href: 'mailto:brunosilribeiro04@gmail.com',
    icon: 'email',
    title: 'Email',
    detail: 'brunosilribeiro04@gmail.com'
  }
];

const defaultButtonClassName =
  'inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white transition hover:border-white/30 hover:bg-white/5';

const BootstrapIcon = ({ name }: { name: ContactLink['icon'] }) => {
  const commonProps = {
    className: 'h-5 w-5 text-white',
    fill: 'currentColor',
    viewBox: '0 0 16 16',
    xmlns: 'http://www.w3.org/2000/svg'
  };

  if (name === 'whatsapp') {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.607M7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.58 6.591-6.58a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.958 6.588-6.592 6.588" />
        <path d="M11.033 9.437c-.17-.085-1.009-.497-1.165-.553-.156-.057-.27-.085-.383.085-.114.17-.44.553-.539.667-.099.113-.198.128-.368.042-.17-.085-.718-.264-1.367-.843-.505-.45-.846-1.006-.945-1.176-.099-.17-.011-.262.074-.347.076-.075.17-.198.255-.297.085-.099.113-.17.17-.284.057-.113.028-.212-.014-.297-.042-.085-.383-.922-.525-1.263-.138-.332-.278-.287-.383-.292l-.326-.006a.63.63 0 0 0-.454.212c-.156.17-.596.582-.596 1.418s.61 1.645.695 1.758c.085.113 1.201 1.834 2.91 2.571.407.176.724.281.971.36.408.13.779.112 1.073.068.327-.049 1.009-.412 1.151-.809.142-.397.142-.738.099-.809-.042-.071-.156-.113-.326-.198" />
      </svg>
    );
  }

  if (name === 'github') {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 0 1 8 3.86c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    );
  }

  if (name === 'linkedin') {
    return (
      <svg {...commonProps} aria-hidden="true">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708C16 15.487 15.474 16 14.825 16H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.225 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} aria-hidden="true">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8zm0 1.383v6.634l5.803-3.482zm6.761 3.727L0 13.166V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.834L9.239 9.11 8 9.854zm3.436-.575L16 12.017V5.383z" />
    </svg>
  );
};

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
                {contactLinks.map(({ href, icon, title, detail }) => (
                  <a
                    key={title}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-white transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10">
                      <BootstrapIcon name={icon} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold uppercase tracking-[0.24em] text-white md:text-base">
                        {title}
                      </p>
                      {detail && (
                        <p className="truncate text-sm text-slate-400 md:text-base">{detail}</p>
                      )}
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
