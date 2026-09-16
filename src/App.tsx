import Navbar from './components/Navbar'
import HeroScrollTrack from './components/HeroScrollTrack'
import AreasAtuacao from './components/AreasAtuacao'
import EstruturaHospitalar from './components/EstruturaHospitalar'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="bg-background relative">
      <Navbar />
      
      {/* O track interativo ocupa a primeira parte do site */}
      <HeroScrollTrack />
      
      {/* O restante do conteúdo flui normalmente */}
      <div className="relative z-40 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <AreasAtuacao />
        <EstruturaHospitalar />
        <FAQ />
      </div>

      <FooterCTA />
      
      <FloatingCTA />
    </div>
  )
}

export default App
