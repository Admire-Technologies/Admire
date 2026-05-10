import { useEffect, useState } from 'react'
import axios from 'axios'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import AdminLayout from '../components/AdminLayout'
import StatCard from '../components/StatCard'
import { useTheme } from '../components/ThemeContext'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })

const monthlyData = [
  { month: 'Jan', contacts: 4, projects: 2 },
  { month: 'Feb', contacts: 7, projects: 3 },
  { month: 'Mar', contacts: 5, projects: 1 },
  { month: 'Apr', contacts: 12, projects: 4 },
  { month: 'May', contacts: 9, projects: 3 },
  { month: 'Jun', contacts: 15, projects: 5 },
]

const statusColor = { new: '#c4ff4d', in_progress: '#009ef7', resolved: '#50cd89' }
const statusLabel = { new: 'New', in_progress: 'In Progress', resolved: 'Resolved' }

export default function Dashboard() {
  const { theme } = useTheme()
  const [contacts, setContacts] = useState([])
  const [projects, setProjects] = useState([])
  const [clients, setClients] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    const headers = { Authorization: `Bearer ${token}` }
    Promise.all([
      api.get('/contacts/', { headers }),
      api.get('/projects/'),
      api.get('/clients/'),
      api.get('/subscribers/', { headers }),
    ]).then(([c, p, cl, s]) => {
      setContacts(c.data)
      setProjects(p.data)
      setClients(cl.data)
      setSubscribers(s.data)
    }).finally(() => setLoading(false))
  }, [])

  const newContacts = contacts.filter(c => c.status === 'new').length

  if (loading) return (
    <AdminLayout>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <div style={{ color: theme.textFaint, fontSize: '16px' }}>Loading dashboard...</div>
      </div>
    </AdminLayout>
  )

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Dashboard</h1>
        <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>Welcome back! Here's what's happening.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '28px' }}>
        <StatCard label="Total Contacts" value={contacts.length} icon="✉" color="#009ef7" change={12} />
        <StatCard label="New Inquiries" value={newContacts} icon="🔔" color="#c4ff4d" change={8} />
        <StatCard label="Projects" value={projects.length} icon="◈" color="#7239ea" change={5} />
        <StatCard label="Subscribers" value={subscribers.length} icon="◎" color="#50cd89" change={20} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '28px' }}>
        <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '24px', transition: 'background 0.2s ease' }}>
          <h3 style={{ color: theme.text, fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>Monthly Overview</h3>
          <p style={{ color: theme.textFaint, fontSize: '13px', margin: '0 0 20px 0' }}>Contacts & Projects over 6 months</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorContacts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#009ef7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#009ef7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c4ff4d" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#c4ff4d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.chartGrid} />
              <XAxis dataKey="month" stroke={theme.chartGrid} tick={{ fill: theme.chartTick, fontSize: 12 }} />
              <YAxis stroke={theme.chartGrid} tick={{ fill: theme.chartTick, fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: theme.tooltipBg, border: `1px solid ${theme.border}`, borderRadius: '8px', color: theme.text }} />
              <Area type="monotone" dataKey="contacts" stroke="#009ef7" fill="url(#colorContacts)" strokeWidth={2} />
              <Area type="monotone" dataKey="projects" stroke="#c4ff4d" fill="url(#colorProjects)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '24px', transition: 'background 0.2s ease' }}>
          <h3 style={{ color: theme.text, fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>Projects by Month</h3>
          <p style={{ color: theme.textFaint, fontSize: '13px', margin: '0 0 20px 0' }}>Delivery rate</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.chartGrid} />
              <XAxis dataKey="month" stroke={theme.chartGrid} tick={{ fill: theme.chartTick, fontSize: 12 }} />
              <YAxis stroke={theme.chartGrid} tick={{ fill: theme.chartTick, fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: theme.tooltipBg, border: `1px solid ${theme.border}`, borderRadius: '8px', color: theme.text }} />
              <Bar dataKey="projects" fill="#c4ff4d" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '24px', transition: 'background 0.2s ease' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3 style={{ color: theme.text, fontSize: '16px', fontWeight: '600', margin: 0 }}>Recent Inquiries</h3>
            <p style={{ color: theme.textFaint, fontSize: '13px', margin: '4px 0 0 0' }}>Latest contact form submissions</p>
          </div>
          <a href="/admin/contacts" style={{ color: '#009ef7', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>View all →</a>
        </div>
        {contacts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: theme.textLabel }}>No inquiries yet</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}` }}>
                {['Name', 'Email', 'Company', 'Status', 'Date'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 12px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.slice(0, 6).map(c => (
                <tr key={c.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '14px 12px', color: theme.text, fontSize: '14px', fontWeight: '500' }}>{c.name}</td>
                  <td style={{ padding: '14px 12px', color: theme.textMuted, fontSize: '14px' }}>{c.email}</td>
                  <td style={{ padding: '14px 12px', color: theme.textMuted, fontSize: '14px' }}>{c.company || '—'}</td>
                  <td style={{ padding: '14px 12px' }}>
                    <span style={{ backgroundColor: `${statusColor[c.status]}20`, color: statusColor[c.status], padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
                      {statusLabel[c.status]}
                    </span>
                  </td>
                  <td style={{ padding: '14px 12px', color: theme.textFaint, fontSize: '13px' }}>{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}
