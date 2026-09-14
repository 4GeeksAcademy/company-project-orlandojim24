import type { Lead } from '../mockLeads'

interface LeadTableProps {
  leads: Lead[]
}

export function LeadTable({ leads }: LeadTableProps) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Industry</th>
            <th scope="col">Confidence score</th>
            <th scope="col">Last activity</th>
            <th scope="col"><span className="sr-only">Open lead</span></th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.company}>
              <th scope="row">
                <span className="company-avatar">{lead.company.charAt(0)}</span>
                {lead.company}
              </th>
              <td>{lead.industry}</td>
              <td>
                <div className="score-cell">
                  <span className={`confidence-badge ${lead.confidence}`}>
                    <span className="confidence-dot" />{lead.confidence}
                  </span>
                  <span className="score-value">{lead.score}</span>
                </div>
              </td>
              <td className="last-activity">{lead.lastActivity}</td>
              <td><button className="row-action" type="button" aria-label={`Open ${lead.company}`}>→</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}