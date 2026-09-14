import { ClientsSection } from './components/ClientsSection'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteHeader } from './components/SiteHeader'
import './App.css'

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
      </main>
      <footer className="site-footer">
        <span className="brand-mark">N</span>
        <p>Nexova Solutions</p>
        <span>Talent, supported by intelligence.</span>
      </footer>
    </div>
  )
}

export default App
