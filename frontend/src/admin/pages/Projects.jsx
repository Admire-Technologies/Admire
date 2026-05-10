import { useEffect, useState } from 'react'
import axios from 'axios'
import AdminLayout from '../components/AdminLayout'
import { useTheme } from '../components/ThemeContext'
import Modal from '../components/Modal'
import Toast from '../components/Toast'
import FormField, { Input, Select } from '../components/FormField'

const api = axios.create({ baseURL: 'http://localhost:8000/api' })
const CATEGORIES = ['Webdesign', 'Motion', 'Product design', 'Mobile apps']
const empty = { title: '', category: 'Webdesign', image_url: '', tags: '' }

export function Projects() {
  const { theme } = useTheme()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null) // null | 'create' | 'edit'
  const [form, setForm] = useState(empty)
  const [editId, setEditId] = useState(null)
  const [toast, setToast] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const token = localStorage.getItem('access_token')
  const headers = { Authorization: `Bearer ${token}` }

  const load = () => api.get('/projects/').then(r => setItems(r.data)).finally(() => setLoading(false))
  useEffect(() => { load() }, [])

  const openCreate = () => { setForm(empty); setEditId(null); setModal('form') }
  const openEdit = (item) => { setForm({ ...item, tags: (item.tags || []).join(', ') }); setEditId(item.id); setModal('form') }

  const handleSave = async () => {
    const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) }
    try {
      if (editId) await api.patch(`/projects/${editId}/`, payload, { headers })
      else await api.post('/projects/', payload, { headers })
      setModal(null)
      load()
      setToast({ message: editId ? 'Project updated!' : 'Project created!', type: 'success' })
    } catch { setToast({ message: 'Failed to save project.', type: 'error' }) }
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/projects/${deleteId}/`, { headers })
      setDeleteId(null)
      load()
      setToast({ message: 'Project deleted.', type: 'success' })
    } catch { setToast({ message: 'Failed to delete.', type: 'error' }) }
  }

  const btn = (label, onClick, color = '#c4ff4d', textColor = '#000') => (
    <button onClick={onClick} style={{ backgroundColor: color, color: textColor, border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{label}</button>
  )

  return (
    <AdminLayout>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: theme.text, fontSize: '24px', fontWeight: '700', margin: 0 }}>Projects</h1>
          <p style={{ color: theme.textFaint, fontSize: '14px', margin: '6px 0 0 0' }}>{items.length} portfolio projects</p>
        </div>
        {btn('+ Add Project', openCreate)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {loading ? <div style={{ color: theme.textFaint }}>Loading...</div> : items.map(p => (
          <div key={p.id} style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ height: '160px', backgroundColor: theme.cardAlt, overflow: 'hidden', position: 'relative' }}>
              {p.image_url
                ? <img src={p.image_url} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: theme.textLabel, fontSize: '13px' }}>No image</div>
              }
            </div>
            <div style={{ padding: '16px' }}>
              <p style={{ color: theme.textFaint, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 4px 0' }}>{p.category}</p>
              <h3 style={{ color: theme.text, fontSize: '15px', fontWeight: '600', margin: '0 0 10px 0' }}>{p.title}</h3>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                {(p.tags || []).map(tag => (
                  <span key={tag} style={{ backgroundColor: theme.border, color: theme.textMuted, padding: '3px 8px', borderRadius: '4px', fontSize: '11px' }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => openEdit(p)} style={{ flex: 1, backgroundColor: theme.border, color: theme.text, border: 'none', borderRadius: '6px', padding: '8px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Edit</button>
                <button onClick={() => setDeleteId(p.id)} style={{ flex: 1, backgroundColor: '#f64e6020', color: '#f64e60', border: 'none', borderRadius: '6px', padding: '8px', fontSize: '12px', fontWeight: '500', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal === 'form' && (
        <Modal title={editId ? 'Edit Project' : 'New Project'} onClose={() => setModal(null)}>
          <FormField label="Title"><Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Project title" /></FormField>
          <FormField label="Category">
            <Select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </Select>
          </FormField>
          <FormField label="Image URL"><Input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." /></FormField>
          <FormField label="Tags (comma separated)"><Input value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} placeholder="Webdesign, Mobile apps" /></FormField>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            {btn(editId ? 'Update' : 'Create', handleSave)}
            <button onClick={() => setModal(null)} style={{ backgroundColor: 'transparent', color: theme.textMuted, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </Modal>
      )}

      {deleteId && (
        <Modal title="Delete Project" onClose={() => setDeleteId(null)}>
          <p style={{ color: theme.textMuted, fontSize: '14px', margin: '0 0 20px 0' }}>Are you sure you want to delete this project? This cannot be undone.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleDelete} style={{ backgroundColor: '#f64e60', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Delete</button>
            <button onClick={() => setDeleteId(null)} style={{ backgroundColor: 'transparent', color: theme.textMuted, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 18px', fontSize: '13px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </Modal>
      )}
    </AdminLayout>
  )
}
