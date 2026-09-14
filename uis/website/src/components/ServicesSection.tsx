const services = [
  {
    number: '01',
    title: 'Headhunting',
    description:
      'The right leaders and specialists for the roles that matter most. We combine market reach with a thoughtful, human selection process.',
    accent: 'service-coral',
  },
  {
    number: '02',
    title: 'Customer support outsourcing',
    description:
      'Dedicated support teams that represent your brand with care, clarity, and the operational discipline your customers expect.',
    accent: 'service-olive',
  },
  {
    number: '03',
    title: 'Corporate training',
    description:
      'Practical programmes in leadership, communication, and team management that turn good intentions into everyday capability.',
    accent: 'service-blue',
  },
]

export function ServicesSection() {
  return (
    <section className="content-section services-section" id="services">
      <div className="section-intro">
        <p className="eyebrow">What we do</p>
        <h2>One partner for the people side of growth.</h2>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className={`service-item ${service.accent}`} key={service.number}>
            <span className="service-number">{service.number}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}