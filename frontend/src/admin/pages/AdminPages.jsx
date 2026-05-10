import { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../components/AdminLayout'
import { useTheme } from '../components/ThemeContext'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })

export function Projects() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/projects/').then(r => setItems(r.data)).finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Projects</h1>
        <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} portfolio projects</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {loading ? <div style={{ color: theme.textFaint }}>Loading...</div> : items.map(p => (
          <div key={p.id} style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'background 0.2s ease' }}>
            <div style={{ height: '160px', backgroundColor: theme.cardAlt, overflow: 'hidden' }}>
              {p.image_url && <img src={p.image_url} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
            <div style={{ padding: '16px' }}>
              <p style={{ color: theme.textFaint, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px 0' }}>{p.category}</p>
              <h3 style={{ color: theme.text, fontSize: '15px', fontWeight: '600', margin: 0 }}>{p.title}</h3>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                {(p.tags || []).map(tag => (
                  <span key={tag} style={{ backgroundColor: theme.border, color: theme.textMuted, padding: '3px 8px', borderRadius: '4px', fontSize: '11px' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}

export function Services() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/services/').then(r => setItems(r.data)).finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Services</h1>
        <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} services listed</p>
      </div>
      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'background 0.2s ease' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['Label', 'Count', 'Order'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(s => (
                <tr key={s.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px', color: theme.text, fontSize: '15px', fontWeight: '600' }}>{s.label}</td>
                  <td style={{ padding: '16px' }}><span style={{ backgroundColor: '#c4ff4d20', color: '#c4ff4d', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>{s.count}</span></td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '14px' }}>{s.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export function Clients() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/clients/').then(r => setItems(r.data)).finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Clients</h1>
        <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} clients</p>
      </div>
      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'background 0.2s ease' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['Name', 'Description', 'Order'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px', color: theme.text, fontSize: '15px', fontWeight: '600' }}>{c.name}</td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '13px', maxWidth: '400px' }}>
                    <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.description}</span>
                  </td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '14px' }}>{c.order}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}

export function Subscribers() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    api.get('/subscribers/', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => setItems(r.data)).finally(() => setLoading(false))
  }, [])

  return (
    <AdminLayout>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Subscribers</h1>
        <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} email subscribers</p>
      </div>
      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'background 0.2s ease' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : items.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: theme.textLabel }}>No subscribers yet</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['#', 'Email', 'Subscribed On'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px', color: theme.textLabel, fontSize: '13px' }}>{i + 1}</td>
                  <td style={{ padding: '16px', color: theme.text, fontSize: '14px' }}>{s.email}</td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '13px' }}>{new Date(s.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  )
}
