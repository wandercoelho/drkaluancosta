import { Calendar} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function FooterCTA() {
  const wpLink = "https://wa.me/5569993190030?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Kaluan%20Costa";

  return (
    <footer className="bg-[#0B131E] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-20"
        {...fadeUp}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Não deixe a dor limitar o seu dia a dia.</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Recupere sua independência de movimentos. Agende sua avaliação e dê o primeiro passo para uma vida sem dor.
        </p>
        <a 
          href={wpLink} 
          target="_blank" rel="noopener noreferrer"
          className="btn-cta px-8 py-5 text-base md:text-lg"
        >
          <Calendar size={22} />
          Agendar Consulta
        </a>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 text-center text-sm text-slate-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="mb-2 font-semibold text-slate-300">Dr. Kaluan de Oliveira Costa | Ortopedia e Traumatologia</p>
        <p className="mb-2 tracking-widest text-xs">CRM-RO 3309 • RQE 1489 • TEOT 148</p>
        <p>Atendimento no Hospital Prontocordis: Rua Marechal Deodoro, 1947 - Centro, Porto Velho - RO.</p>
        <p className="mt-8 text-xs opacity-50">© {new Date().getFullYear()} Dr. Kaluan Costa. Todos os direitos reservados.</p>
      </motion.div>
    </footer>
  );
}
