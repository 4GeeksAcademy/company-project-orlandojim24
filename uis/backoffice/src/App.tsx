import { LeadTable } from './components/LeadTable'
import { MetricCard } from './components/MetricCard'
import { Sidebar } from './components/Sidebar'
import { leads } from './mockLeads'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="workspace" id="top">
        <header className="workspace-header">
          <div>
            <p className="breadcrumb">Sales workspace / Lead qualification</p>
            <h1>Lead intelligence</h1>
            <p className="header-description">
              Prioritize the conversations most likely to move forward.
            </p>
          </div>
          <div className="header-actions">
            <span className="sync-status"><span /> Sample data</span>
            <button className="avatar" type="button" aria-label="Open user menu">MC</button>
          </div>
        </header>

        <section className="metrics-grid" aria-label="Lead pipeline summary">
          <MetricCard label="Total qualified leads" value="128" detail="+12% from last month" tone="neutral" />
          <MetricCard label="Hot confidence" value="24" detail="18.7% of qualified leads" tone="hot" />
          <MetricCard label="Needs follow-up" value="17" detail="3 conversations inactive" tone="warm" />
        </section>

        <section className="table-section" id="leads" aria-labelledby="lead-table-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">AI-assisted pipeline</p>
              <h2 id="lead-table-title">Qualified leads</h2>
            </div>
            <button className="filter-button" type="button">All confidence <span aria-hidden="true">⌄</span></button>
          </div>
          <LeadTable leads={leads} />
        </section>
      </main>
    </div>
  )
}

export default App
