interface MetricCardProps {
  label: string
  value: string
  detail: string
  tone: 'neutral' | 'hot' | 'warm'
}

export function MetricCard({ label, value, detail, tone }: MetricCardProps) {
  return (
    <article className={`metric-card metric-${tone}`}>
      <div className="metric-label"><span className="metric-dot" />{label}</div>
      <strong>{value}</strong>
      <span className="metric-detail">{detail}</span>
    </article>
  )
}