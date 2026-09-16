import { Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

const fadeLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const fadeRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function AreasAtuacao() {
  return (
    <section id="especialidades" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          {...fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Áreas de Atuação</h2>
          <p className="text-primary/70 text-lg max-w-2xl mx-auto">Tratamentos avançados para recuperar a sua autonomia e qualidade de vida com o máximo de precisão e segurança.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Especialidade Joelho - Desliza da esquerda para o centro */}
          <motion.div 
            className="glass p-8 md:p-12 rounded-3xl border border-accent/20 shadow-[0_20px_50px_rgba(2,132,199,0.14)] hover:shadow-[0_25px_60px_rgba(2,132,199,0.25)] transition-shadow duration-500"
            {...fadeLeft}
            whileHover={{ y: -8 }}
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
              <Activity size={28} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Especialidade Joelho</h3>
            <ul className="space-y-4 text-primary/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Artrose e Desgaste Articular:</strong> Tratamento conservador e cirúrgico</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Prótese Total de Joelho:</strong> Artroplastia de precisão com foco em retorno rápido</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Artroscopia e Lesões de Menisco</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Reconstrução de Ligamento Cruzado:</strong> LCA e LCP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Infiltração com Ácido Hialurônico:</strong> Viscossuplementação</span>
              </li>
            </ul>
          </motion.div>

          {/* Especialidade Quadril - Desliza da direita para o centro */}
          <motion.div 
            className="glass p-8 md:p-12 rounded-3xl border border-accent/20 shadow-[0_20px_50px_rgba(2,132,199,0.14)] hover:shadow-[0_25px_60px_rgba(2,132,199,0.25)] transition-shadow duration-500"
            {...fadeRight}
            whileHover={{ y: -8 }}
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Especialidade Quadril</h3>
            <ul className="space-y-4 text-primary/80">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Artroplastia Total de Quadril:</strong> Prótese com preservação muscular</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Impacto Fêmoro-Acetabular e Lesão de Labrum</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Tratamento de Bursites e Tendinopatias Glúteas</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span><strong>Bloqueios Guiados e Alívio de Dor Crônica</strong></span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
