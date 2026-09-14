export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Nexova Solutions home">
        <span className="brand-mark">N</span>
        <span>Nexova</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#clients">Who we help</a>
        <a className="header-cta" href="#contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}