export function ClientsSection() {
  return (
    <section className="content-section clients-section" id="clients">
      <div className="clients-statement">
        <p className="eyebrow">Who we help</p>
        <h2>Built for companies that are ready to grow with intention.</h2>
      </div>
      <div className="clients-detail">
        <p>
          Our clients are mid-sized organisations in technology, retail, and
          financial services. They are scaling teams, improving service, and
          looking for a partner who understands that people and performance are
          inseparable.
        </p>
        <div className="client-sectors" aria-label="Client sectors">
          <span>Technology</span>
          <span>Retail</span>
          <span>Financial services</span>
        </div>
      </div>
    </section>
  )
}