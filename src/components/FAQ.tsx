import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "O Dr. Kaluan atende convênios?",
    answer: "Os atendimentos no Hospital Prontocordis são particulares com emissão completa de relatório médico e nota fiscal para solicitação de reembolso junto ao seu plano de saúde."
  },
  {
    question: "Quando é o momento de operar o joelho ou quadril?",
    answer: "A cirurgia de prótese é indicada quando a dor e a perda funcional já não respondem aos tratamentos clínicos e afetam diretamente a sua autonomia e qualidade de vida."
  },
  {
    question: "Como funciona a primeira consulta?",
    answer: "Avaliação física detalhada e análise criteriosa dos seus exames de raio-x e ressonância para fechar o diagnóstico e indicar o tratamento exato."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-12"
          {...fadeUp}
        >
          Dúvidas Frequentes
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'border-accent/50 shadow-sm' : 'border-slate-200 hover:border-accent/30'}`}
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
            >
              <button
                id={`faq-btn-${index}`}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-accent' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-primary/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
