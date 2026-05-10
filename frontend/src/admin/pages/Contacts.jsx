import { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../components/AdminLayout'
import { useTheme } from '../components/ThemeContext'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })
const statusColor = { new: '#c4ff4d', in_progress: '#009ef7', resolved: '#50cd89' }
const statusLabel = { new: 'New', in_progress: 'In Progress', resolved: 'Resolved' }

export default function Contacts() {
  const { theme } = useTheme()
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const token = localStorage.getItem('access_token')
  const headers = { Authorization: `Bearer ${token}` }

  useEffect(() => {
    api.get('/contacts/', { headers }).then(r => setContacts(r.data)).finally(() => setLoading(false))
  }, [])

  const updateStatus = async (id, status) => {
    await api.patch(`/contacts/${id}/`, { status }, { headers })
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c))
  }

  const filtered = filter === 'all' ? contacts : contacts.filter(c => c.status === filter)

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Contacts</h1>
          <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{contacts.length} total inquiries</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['all', 'new', 'in_progress', 'resolved'].map(s => (
            <button key={s} onClick={() => setFilter(s)} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '500', backgroundColor: filter === s ? '#c4ff4d' : theme.border, color: filter === s ? '#000' : theme.textMuted, transition: 'all 0.15s ease' }}>
              {s === 'all' ? 'All' : statusLabel[s]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'background 0.2s ease' }}>
        {loading ? (
          <div style={{ padding: '60px', textAlign: 'center', color: theme.textFaint }}>Loading...</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: theme.textLabel }}>No contacts found</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['Name', 'Email', 'Company', 'Message', 'Status', 'Date'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px', color: theme.text, fontSize: '14px', fontWeight: '500' }}>{c.name}</td>
                  <td style={{ padding: '16px', color: theme.textMuted, fontSize: '14px' }}>{c.email}</td>
                  <td style={{ padding: '16px', color: theme.textMuted, fontSize: '14px' }}>{c.company || '—'}</td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '13px', maxWidth: '200px' }}>
                    <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.message || '—'}</span>
                  </td>
                  <td style={{ padding: '16px' }}>
                    <select value={c.status} onChange={e => updateStatus(c.id, e.target.value)}
                      style={{ backgroundColor: `${statusColor[c.status]}20`, color: statusColor[c.status], border: `1px solid ${statusColor[c.status]}40`, borderRadius: '6px', padding: '4px 8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', outline: 'none' }}>
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '13px' }}>{new Date(c.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}
