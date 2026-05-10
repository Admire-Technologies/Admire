import { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../components/AdminLayout'
import { useTheme } from '../components/ThemeContext'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import FormField, { Input, Textarea } from '../components/FormField'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })

// ─── SERVICES ────────────────────────────────────────────────────────────────
export function Services() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ label: '', count: 0, order: 0 })
  const [editId, setEditId] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [toast, setToast] = useState(null)
  const token = localStorage.getItem('access_token')
  const headers = { Authorization: `Bearer ${token}` }

  const load = () => api.get('/services/').then(r => setItems(r.data)).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const openCreate = () => { setForm({ label: '', count: 0, order: 0 }); setEditId(null); setModal('form') }
  const openEdit = (item) => { setForm(item); setEditId(item.id); setModal('form') }

  const handleSave = async () => {
    try {
      if (editId) await api.patch(`/services/${editId}/`, form, { headers })
      else await api.post('/services/', form, { headers })
      setModal(null); load()
      setToast({ message: editId ? 'Service updated!' : 'Service created!', type: 'success' })
    } catch { setToast({ message: 'Failed to save.', type: 'error' }) }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/services/${deleteId}/`, { headers })
      setDeleteId(null); load()
      setToast({ message: 'Service deleted.', type: 'success' })
    } catch { setToast({ message: 'Failed to delete.', type: 'error' }) }
  }

  return (
    <AdminLayout>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Services</h1>
          <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} services</p>
        </div>
        <button onClick={openCreate} style={{ backgroundColor: '#c4ff4d', color: '#000', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Add Service</button>
      </div>

      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['Label', 'Count', 'Order', 'Actions'].map(h => (
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
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => openEdit(s)} style={{ backgroundColor: theme.border, color: theme.text, border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => setDeleteId(s.id)} style={{ backgroundColor: '#f64e6020', color: '#f64e60', border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', cursor: 'pointer' }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modal === 'form' && (
        <Modal title={editId ? 'Edit Service' : 'New Service'} onClose={() => setModal(null)}>
          <FormField label="Label"><Input value={form.label} onChange={e => setForm({ ...form, label: e.target.value })} placeholder="e.g. BRANDING" /></FormField>
          <FormField label="Count"><Input type="number" value={form.count} onChange={e => setForm({ ...form, count: +e.target.value })} /></FormField>
          <FormField label="Order"><Input type="number" value={form.order} onChange={e => setForm({ ...form, order: +e.target.value })} /></FormField>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button onClick={handleSave} style={{ backgroundColor: '#c4ff4d', color: '#000', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{editId ? 'Update' : 'Create'}</button>
            <button onClick={() => setModal(null)} style={{ backgroundColor: 'transparent', color: theme.textMuted, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </Modal>
      )}
      {deleteId && <DeleteConfirm onConfirm={handleDelete} onCancel={() => setDeleteId(null)} theme={theme} />}
    </AdminLayout>
  )
}

// ─── CLIENTS ─────────────────────────────────────────────────────────────────
export function Clients() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState({ name: '', description: '', order: 0 })
  const [editId, setEditId] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [toast, setToast] = useState(null)
  const token = localStorage.getItem('access_token')
  const headers = { Authorization: `Bearer ${token}` }

  const load = () => api.get('/clients/').then(r => setItems(r.data)).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const openCreate = () => { setForm({ name: '', description: '', order: 0 }); setEditId(null); setModal('form') }
  const openEdit = (item) => { setForm(item); setEditId(item.id); setModal('form') }

  const handleSave = async () => {
    try {
      if (editId) await api.patch(`/clients/${editId}/`, form, { headers })
      else await api.post('/clients/', form, { headers })
      setModal(null); load()
      setToast({ message: editId ? 'Client updated!' : 'Client created!', type: 'success' })
    } catch { setToast({ message: 'Failed to save.', type: 'error' }) }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/clients/${deleteId}/`, { headers })
      setDeleteId(null); load()
      setToast({ message: 'Client deleted.', type: 'success' })
    } catch { setToast({ message: 'Failed to delete.', type: 'error' }) }
  }

  return (
    <AdminLayout>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Clients</h1>
          <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} clients</p>
        </div>
        <button onClick={openCreate} style={{ backgroundColor: '#c4ff4d', color: '#000', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Add Client</button>
      </div>

      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['Name', 'Description', 'Order', 'Actions'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 16px', color: theme.textFaint, fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(c => (
                <tr key={c.id} style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <td style={{ padding: '16px', color: theme.text, fontSize: '15px', fontWeight: '600' }}>{c.name}</td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '13px', maxWidth: '300px' }}>
                    <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.description}</span>
                  </td>
                  <td style={{ padding: '16px', color: theme.textFaint, fontSize: '14px' }}>{c.order}</td>
                  <td style={{ padding: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => openEdit(c)} style={{ backgroundColor: theme.border, color: theme.text, border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', cursor: 'pointer' }}>Edit</button>
                      <button onClick={() => setDeleteId(c.id)} style={{ backgroundColor: '#f64e6020', color: '#f64e60', border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', cursor: 'pointer' }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modal === 'form' && (
        <Modal title={editId ? 'Edit Client' : 'New Client'} onClose={() => setModal(null)}>
          <FormField label="Name"><Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Client name" /></FormField>
          <FormField label="Description"><Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Short description..." /></FormField>
          <FormField label="Order"><Input type="number" value={form.order} onChange={e => setForm({ ...form, order: +e.target.value })} /></FormField>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <button onClick={handleSave} style={{ backgroundColor: '#c4ff4d', color: '#000', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{editId ? 'Update' : 'Create'}</button>
            <button onClick={() => setModal(null)} style={{ backgroundColor: 'transparent', color: theme.textMuted, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </Modal>
      )}
      {deleteId && <DeleteConfirm onConfirm={handleDelete} onCancel={() => setDeleteId(null)} theme={theme} />}
    </AdminLayout>
  )
}

// ─── SUBSCRIBERS ─────────────────────────────────────────────────────────────
export function Subscribers() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState(null)
  const [toast, setToast] = useState(null)
  const token = localStorage.getItem('access_token')
  const headers = { Authorization: `Bearer ${token}` }

  const load = () => api.get('/subscribers/', { headers }).then(r => setItems(r.data)).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const handleDelete = async () => {
    try {
      await api.delete(`/subscribers/${deleteId}/`, { headers })
      setDeleteId(null); load()
      setToast({ message: 'Subscriber removed.', type: 'success' })
    } catch { setToast({ message: 'Failed to delete.', type: 'error' }) }
  }

  return (
    <AdminLayout>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Subscribers</h1>
          <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} email subscribers</p>
        </div>
        <button
          onClick={() => {
            const csv = 'Email,Date\n' + items.map(s => `${s.email},${new Date(s.created_at).toLocaleDateString()}`).join('\n')
            const a = document.createElement('a'); a.href = 'data:text/csv,' + encodeURIComponent(csv); a.download = 'subscribers.csv'; a.click()
          }}
          style={{ backgroundColor: theme.border, color: theme.text, border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
        >
          ↓ Export CSV
        </button>
      </div>

      <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden' }}>
        {loading ? <div style={{ padding: '40px', textAlign: 'center', color: theme.textFaint }}>Loading...</div> : items.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center', color: theme.textLabel }}>No subscribers yet</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${theme.border}`, backgroundColor: theme.cardAlt }}>
                {['#', 'Email', 'Subscribed On', 'Actions'].map(h => (
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
                  <td style={{ padding: '16px' }}>
                    <button onClick={() => setDeleteId(s.id)} style={{ backgroundColor: '#f64e6020', color: '#f64e60', border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', cursor: 'pointer' }}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {deleteId && <DeleteConfirm onConfirm={handleDelete} onCancel={() => setDeleteId(null)} theme={theme} />}
    </AdminLayout>
  )
}

// ─── SHARED DELETE CONFIRM ────────────────────────────────────────────────────
function DeleteConfirm({ onConfirm, onCancel, theme }) {
  return (
    <Modal title="Confirm Delete" onClose={onCancel}>
      <p style={{ color: theme.textMuted, fontSize: '14px', margin: '0 0 20px 0' }}>Are you sure? This action cannot be undone.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={onConfirm} style={{ backgroundColor: '#f64e60', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Delete</button>
        <button onClick={onCancel} style={{ backgroundColor: 'transparent', color: theme.textMuted, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
      </div>
    </Modal>
  )
}
