import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Instagram, Calendar } from 'lucide-react';
import drKaluanImg from '../assets/Image-DrKaluan-Transparent.png';
import goniometroImg from '../assets/image-goniometro-transparent.png';

// Contador numérico animado fluido
function AnimatedCounter({ end, duration = 1.8 }: { end: number; duration?: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Easing suave (easeOutExpo)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(Math.floor(ease * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setVal(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{val.toLocaleString('pt-BR')}</span>;
}

export default function HeroScrollTrack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Controle de carregamento com contador de porcentagem para PC e Tablet
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isTabletOrDesktop = window.innerWidth >= 768;

    if (!isTabletOrDesktop) {
      setIsLoaded(true);
      setProgress(100);
      return;
    }

    // Carregamento de ~2.0 segundos (nunca ultrapassando 3s)
    const duration = 2000;
    const startTime = performance.now();
    let timeoutId: number | undefined;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        timeoutId = window.setTimeout(() => {
          setIsLoaded(true);
        }, 200);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => {
      cancelAnimationFrame(animId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const wpLink = "https://wa.me/5569993190030?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Kaluan%20Costa";

  // Cena 1 & 2: Hero Triptych e Efeito Túnel (0% a 30%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroXLeft = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  // Dr Kaluan Túnel (0% a 30%)
  const kaluanScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.15]);
  const kaluanOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const kaluanBlur = useTransform(scrollYProgress, [0, 0.25], ["blur(0px)", "blur(10px)"]);

  // Cena 3: Goniômetro (30% a 70%)
  const goniometroX = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [300, 0, 0, -300]);
  const goniometroOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  const goniometroRotate = useTransform(scrollYProgress, [0.35, 0.65], [30, 135]);
  
  // Marcadores do Goniômetro
  const mark1Opacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]);
  const mark2Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [0, 1, 0]);
  const mark3Opacity = useTransform(scrollYProgress, [0.55, 0.6, 0.65], [0, 1, 1]);

  // Cena 4: Retorno Dr. Kaluan e Card (70% a 100%)
  const returnY = useTransform(scrollYProgress, [0.75, 0.85], [100, 0]);
  const returnOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
  const returnDoctorX = useTransform(scrollYProgress, [0.75, 0.85], [-300, 0]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-background w-full">
      {/* SIMULAÇÃO DE CARREGAMENTO COM CONTADOR DE PORCENTAGEM (PC e Tablet) */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center pointer-events-auto"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          >
            <motion.div 
              className="flex flex-col items-center max-w-sm px-6 text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary/60 font-semibold mb-4">
                Dr. Kaluan Costa • Ortopedia
              </span>
              
              <div className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6 tabular-nums">
                {progress}%
              </div>

              {/* Barra de progresso ultra-fina minimalista */}
              <div className="w-48 md:w-64 h-[2px] bg-primary/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center pt-14 sm:pt-20"
        style={{ height: '100dvh' }}
      >
        
        {/* ================= CENA 1 & 2 ================= */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 z-10 pointer-events-none pt-14 sm:pt-20 lg:pt-16 pb-12 sm:pb-6 md:pb-8"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between flex-1">
            {/* Esquerda: Título elevado + Subtítulo logo abaixo */}
            <motion.div 
              style={{ x: heroXLeft }} 
              className="w-full flex-1 text-center lg:text-left max-w-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 sm:mb-5 pointer-events-auto">
                RECUPERE A LIBERDADE DO<br/><span className="text-accent">SEU MOVIMENTO.</span>
              </h1>
              
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-primary/80 leading-relaxed max-w-lg mx-auto lg:mx-0 pointer-events-auto">
                Cirurgia avançada de quadril e joelho com foco na recuperação precoce da marcha e no alívio definitivo da dor.
              </p>
            </motion.div>

            {/* Espaço central para o médico */}
            <div className="hidden lg:block w-32 xl:w-48"></div>

            {/* Direita: Apenas visível em Desktop/Tablet (oculto no mobile) */}
            <motion.div 
              className="hidden md:flex flex-1 flex-col items-end justify-center pt-8 lg:pt-28 text-right pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              <div className="flex flex-col items-end text-primary/70 text-xs sm:text-sm font-medium animate-pulse">
                <span>Role para explorar o movimento</span>
                <span className="text-accent font-bold text-base mt-1">↓</span>
              </div>
            </motion.div>
          </div>

          {/* BARRA DE MÉTRICAS: Empilhada à esquerda no mobile e horizontal contínua no desktop */}
          <motion.div 
            className="w-full pointer-events-auto z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          >
            {/* Modo Mobile: Empilhado do lado esquerdo, elevado para visibilidade total */}
            <div className="flex md:hidden flex-col items-start gap-2 max-w-[210px]">
              <div className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-primary shadow-xs border border-slate-200/80 backdrop-blur-md flex items-center gap-1">
                <span className="text-accent font-bold">+</span>
                {isLoaded && <AnimatedCounter end={10000} duration={1.8} />}
                <span>Pacientes</span>
              </div>

              <div className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-primary shadow-xs border border-slate-200/80 backdrop-blur-md flex items-center gap-1">
                <span className="text-accent font-bold">+</span>
                {isLoaded && <AnimatedCounter end={5000} duration={1.8} />}
                <span>h/cirurgias</span>
              </div>

              <div>
                <a 
                  href="https://www.instagram.com/drkaluancosta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass px-3 py-1.5 rounded-xl text-xs font-semibold text-primary hover:text-accent shadow-xs border border-slate-200/80 backdrop-blur-md inline-flex items-center gap-1.5 transition-colors"
                >
                  <Instagram size={14} className="text-accent shrink-0" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Modo Desktop / Tablet: Barra horizontal com divisores de linha contínuos */}
            <div className="hidden md:flex items-center justify-between gap-4 md:gap-6 text-sm lg:text-base font-normal tracking-wide text-primary">
              <div className="flex-1 min-w-[14px] h-[1.5px] bg-primary"></div>
              
              <div className="whitespace-nowrap flex items-center gap-1 font-medium">
                <span>+</span>
                {isLoaded && <AnimatedCounter end={10000} duration={1.8} />}
                <span className="ml-1">Pacientes</span>
              </div>

              <div className="flex-1 min-w-[14px] h-[1.5px] bg-primary"></div>

              <div className="whitespace-nowrap flex items-center gap-1 font-medium">
                <span>+</span>
                {isLoaded && <AnimatedCounter end={5000} duration={1.8} />}
                <span className="ml-1">h/cirurgias</span>
              </div>

              <div className="flex-1 min-w-[14px] h-[1.5px] bg-primary"></div>

              <a 
                href="https://www.instagram.com/drkaluancosta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Instagram
              </a>

              <div className="flex-1 min-w-[14px] h-[1.5px] bg-primary"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Médico Centro / Túnel: Container estático com elevação e escala ampliadas no mobile */}
        <div className="absolute bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 z-0 h-[72dvh] sm:h-[80vh] lg:h-[88vh] pointer-events-none flex items-end justify-center">
          <motion.div 
            className="h-full w-auto origin-bottom"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            style={{ 
              scale: kaluanScale, 
              opacity: kaluanOpacity,
              filter: kaluanBlur
            }}
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full"></div>
            <img 
              src={drKaluanImg} 
              alt="Dr. Kaluan Costa" 
              className="h-full w-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* ================= CENA 3: GONIÔMETRO ================= */}
        <motion.div 
          id="biomecanica"
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{ x: goniometroX, opacity: goniometroOpacity }}
        >
          <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex-1 flex justify-center lg:justify-end pr-0 lg:pr-12">
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <img src={goniometroImg} alt="Base" className="absolute top-0 left-0 w-full h-full object-contain opacity-50" />
                <motion.img 
                  src={goniometroImg} 
                  alt="Haste Móvel" 
                  className="absolute top-0 left-0 w-full h-full object-contain origin-bottom-left drop-shadow-xl"
                  style={{ rotate: goniometroRotate }}
                />
              </div>
            </div>
            
            <div className="flex-1 mt-12 lg:mt-0 text-center lg:text-left px-6 relative h-32">
              <motion.div style={{ opacity: mark1Opacity }} className="absolute inset-x-6 top-0">
                <h3 className="text-3xl font-bold font-serif text-slate-400">30°</h3>
                <p className="text-xl">Dor e Rigidez Articular</p>
              </motion.div>
              <motion.div style={{ opacity: mark2Opacity }} className="absolute inset-x-6 top-0">
                <h3 className="text-4xl font-bold font-serif text-accent">90°</h3>
                <p className="text-xl">Recuperação Funcional</p>
              </motion.div>
              <motion.div style={{ opacity: mark3Opacity }} className="absolute inset-x-6 top-0">
                <h3 className="text-5xl font-bold font-serif text-primary">135°</h3>
                <p className="text-xl font-medium">Liberdade de Movimento</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ================= CENA 4: RETORNO ================= */}
        <motion.div 
          id="sobre"
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 z-30 pointer-events-none"
          style={{ y: returnY, opacity: returnOpacity }}
        >
          <motion.div 
            className="hidden md:block flex-1 h-[50vh] lg:h-[80vh] relative mb-8 lg:mb-0"
            style={{ x: returnDoctorX }}
          >
            <img 
              src={drKaluanImg} 
              alt="Dr. Kaluan Costa" 
              className="h-full w-auto object-contain absolute bottom-0 left-0 drop-shadow-2xl pointer-events-auto"
            />
          </motion.div>
          
          <div className="flex-1 pointer-events-auto w-full max-w-lg lg:max-w-none">
            <div className="dark-glass p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-3 sm:mb-6">Excelência Cirúrgica & Rigor Científico</h2>
              <ul className="space-y-2 sm:space-y-4 text-xs sm:text-sm md:text-base text-slate-300 mb-5 sm:mb-8">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0"></div>
                  <span>Especialização em Cirurgia de Quadril e Joelho — UFPR</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0"></div>
                  <span>Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0"></div>
                  <span>Residência Médica — CEOT-PR</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0"></div>
                  <span>Professor de Ortopedia no Centro Universitário São Lucas (UNISL)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 shrink-0"></div>
                  <span>Corpo Clínico do Hospital Prontocordis</span>
                </li>
              </ul>
              <a 
                href={wpLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-cta w-full py-3.5 sm:py-4 text-center text-sm sm:text-base"
              >
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                <span>Agendar Avaliação</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
