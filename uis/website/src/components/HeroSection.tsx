export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Human resources, made operational</p>
        <h1>Better talent decisions. <em>Stronger teams.</em></h1>
        <p className="hero-description">
          Nexova helps growing companies find the people they need, support the
          customers they serve, and build the capabilities that keep them moving.
        </p>
        <a className="primary-button" href="#services">
          Explore our services <span aria-hidden="true">↘</span>
        </a>
      </div>
      <div className="hero-visual" aria-label="A connected talent and support network" role="img">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="visual-core">
          <span>N</span>
          <small>People<br />in motion</small>
        </div>
        <span className="visual-label label-one">Find</span>
        <span className="visual-label label-two">Support</span>
        <span className="visual-label label-three">Grow</span>
      </div>
    </section>
  )
}