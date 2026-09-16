import { Map } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function EstruturaHospitalar() {
  return (
    <section id="prontocordis" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Estrutura Hospitalar de Referência</h2>
            <p className="text-lg text-primary/70 mb-8 leading-relaxed">
              O atendimento é realizado no <strong>Hospital Prontocordis</strong>, uma estrutura hospitalar completa no centro de Porto Velho, 
              equipada com centro cirúrgico de alta tecnologia e suporte integral para exames de imagem e laboratoriais, 
              garantindo o máximo de segurança para a sua recuperação.
            </p>
            <div className="bg-accent text-white p-6 rounded-2xl mb-8 shadow-lg shadow-accent/20 border border-white/10">
              <h4 className="font-bold text-white mb-2">Endereço do Atendimento</h4>
              <p className="text-white/90 leading-relaxed">Rua Marechal Deodoro, 1947 - Centro<br/>Porto Velho - RO, CEP: 76804-366</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Hospital+Prontocordis+Porto+Velho" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors"
            >
              <Map size={18} />
              Como Chegar (Google Maps)
            </a>
          </motion.div>
          <motion.div 
            className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200"
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {/* Embed do Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.341595015383!2d-63.90565868471131!3d-8.76182189370776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325c862bc346ad%3A0xc3f63c8a14b03657!2sHospital%20Prontocordis!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Mapa Prontocordis"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
