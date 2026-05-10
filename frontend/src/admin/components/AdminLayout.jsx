import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from './ThemeContext'

const navItems = [
  { path: '/admin/dashboard', icon: '⊞', label: 'Dashboard' },
  { path: '/admin/contacts', icon: '✉', label: 'Contacts' },
  { path: '/admin/projects', icon: '◈', label: 'Projects' },
  { path: '/admin/services', icon: '⚙', label: 'Services' },
  { path: '/admin/clients', icon: '◉', label: 'Clients' },
  { path: '/admin/subscribers', icon: '◎', label: 'Subscribers' },
]

export default function AdminLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const { theme, mode, toggle } = useTheme()

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    navigate('/admin/login')
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: theme.bg, fontFamily: "'Inter', sans-serif", transition: 'background 0.2s ease' }}>

      {/* Sidebar */}
      <aside style={{
        width: collapsed ? '72px' : '260px',
        backgroundColor: theme.sidebar,
        borderRight: `1px solid ${theme.border}`,
        display: 'flex', flexDirection: 'column',
        transition: 'width 0.2s ease, background 0.2s ease',
        flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
      }}>
        {/* Brand */}
        <div style={{ padding: '24px 20px', borderBottom: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '36px', height: '36px', backgroundColor: '#c4ff4d', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '16px', color: '#000', flexShrink: 0 }}>A</div>
          {!collapsed && <span style={{ color: theme.text, fontWeight: '700', fontSize: '18px', whiteSpace: 'nowrap' }}>Admire CMS</span>}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
          {!collapsed && <p style={{ color: theme.textLabel, fontSize: '11px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', padding: '0 8px', marginBottom: '8px' }}>Main Menu</p>}
          {navItems.map(item => {
            const active = location.pathname === item.path
            return (
              <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 12px', borderRadius: '8px', marginBottom: '4px',
                  backgroundColor: active ? 'rgba(196,255,77,0.1)' : 'transparent',
                  borderLeft: active ? '3px solid #c4ff4d' : '3px solid transparent',
                  transition: 'all 0.15s ease', cursor: 'pointer',
                }}>
                  <span style={{ fontSize: '18px', color: active ? '#c4ff4d' : theme.textFaint, flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && <span style={{ color: active ? '#c4ff4d' : theme.textMuted, fontSize: '14px', fontWeight: active ? '600' : '400', whiteSpace: 'nowrap' }}>{item.label}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '16px 12px', borderTop: `1px solid ${theme.border}` }}>
          <div onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px', color: '#f64e60' }}>⏻</span>
            {!collapsed && <span style={{ color: '#f64e60', fontSize: '14px', fontWeight: '500' }}>Logout</span>}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Topbar */}
        <header style={{ backgroundColor: theme.sidebar, borderBottom: `1px solid ${theme.border}`, padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, transition: 'background 0.2s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', color: theme.textFaint, fontSize: '20px', cursor: 'pointer', padding: '4px' }}>☰</button>
            <span style={{ color: theme.textMuted, fontSize: '14px' }}>
              {navItems.find(n => n.path === location.pathname)?.label || 'Dashboard'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/" target="_blank" style={{ textDecoration: 'none', color: theme.textFaint, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>↗</span> View Site
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              style={{
                width: '40px', height: '22px', borderRadius: '11px', border: 'none', cursor: 'pointer', position: 'relative',
                backgroundColor: mode === 'dark' ? '#c4ff4d' : '#e4e6ef',
                transition: 'background 0.2s ease', flexShrink: 0,
              }}
            >
              <span style={{
                position: 'absolute', top: '3px',
                left: mode === 'dark' ? '21px' : '3px',
                width: '16px', height: '16px', borderRadius: '50%',
                backgroundColor: mode === 'dark' ? '#000' : '#fff',
                transition: 'left 0.2s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '9px',
              }}>
                {mode === 'dark' ? '🌙' : '☀'}
              </span>
            </button>

            <div style={{ width: '36px', height: '36px', backgroundColor: '#c4ff4d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', color: '#000' }}>A</div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '28px', transition: 'background 0.2s ease' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
