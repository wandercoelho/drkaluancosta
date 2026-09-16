import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Especialidades", href: "#especialidades" },
    { label: "Sobre o Médico", href: "#sobre" },
    { label: "Prontocordis", href: "#prontocordis" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-4 md:px-8 py-3 md:py-6 flex flex-col bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none transition-colors border-b border-slate-200/40 md:border-b-0"
    >
      <div className="w-full flex justify-between items-center">
        {/* Lado Esquerdo */}
        <a href="#" className="flex flex-col text-left">
          <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
            Dr. Kaluan Costa
          </span>
          <span className="text-[10px] md:text-xs text-primary/70 tracking-widest uppercase font-medium">
            Cirurgia de Quadril & Joelho
          </span>
        </a>

        {/* Centro - Dynamic Island (Desktop) */}
        <div className="hidden lg:flex gap-8 items-center bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm px-8 py-3 rounded-full text-sm font-medium text-primary">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Lado Direito Desktop */}
        <div className="hidden lg:block w-[140px]"></div>

        {/* Botão Hambúrguer (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          className="lg:hidden p-2.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm text-primary hover:text-accent transition-colors focus:outline-none"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu Sanduíche Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mt-3 w-full bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl rounded-2xl p-5 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2 text-base font-medium text-primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-slate-100 hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-accent text-sm">&rarr;</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
