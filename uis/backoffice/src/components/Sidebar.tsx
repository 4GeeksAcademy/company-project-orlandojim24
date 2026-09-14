const navigation = [
  { label: 'Overview', icon: '▦' },
  { label: 'Leads', icon: '◎', active: true },
  { label: 'Sequences', icon: '↗' },
  { label: 'Accounts', icon: '□' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="sidebar-brand" href="#top">
        <span className="sidebar-mark">N</span>
        <span>Nexova <small>workspace</small></span>
      </a>
      <div className="sidebar-label">Sales operations</div>
      <nav className="sidebar-nav" aria-label="Workspace navigation">
        {navigation.map((item) => (
          <a className={item.active ? 'active' : ''} href="#leads" key={item.label}>
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
            {item.active && <span className="nav-count">24</span>}
          </a>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <a href="#settings"><span className="nav-icon" aria-hidden="true">⚙</span>Settings</a>
        <div className="workspace-user">
          <span className="user-avatar">MC</span>
          <span><strong>Megan Clarke</strong><small>Sales lead</small></span>
        </div>
      </div>
    </aside>
  )
}