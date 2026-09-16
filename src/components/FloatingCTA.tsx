import { Calendar } from 'lucide-react';

export default function FloatingCTA() {
  const wpLink = "https://wa.me/5569993190030?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Kaluan%20Costa";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      <a
        href={wpLink}
        target="_blank" rel="noopener noreferrer"
        aria-label="Agendar Consulta"
        className="btn-cta p-3 sm:py-3.5 sm:px-6 text-sm md:text-base"
      >
        <Calendar className="w-6 h-6 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Agendar Consulta</span>
      </a>
    </div>
  );
}
