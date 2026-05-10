import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await axios.post('http://localhost:8000/api/token/', form)
      localStorage.setItem('access_token', res.data.access)
      localStorage.setItem('refresh_token', res.data.refresh)
      navigate('/admin/dashboard')
    } catch {
      setError('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1e1e2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '420px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', letterSpacing: '-0.5px' }}>
            Admire <span style={{ color: '#c4ff4d' }}>CMS</span>
          </div>
          <p style={{ color: '#6c7293', fontSize: '14px', marginTop: '8px' }}>Sign in to your admin panel</p>
        </div>

        {/* Card */}
        <div style={{ backgroundColor: '#1b1b29', borderRadius: '12px', padding: '2.5rem', border: '1px solid #2b2b40' }}>
          <h2 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', margin: '0 0 1.5rem 0' }}>Welcome back</h2>

          {error && (
            <div style={{ backgroundColor: '#3a1c1c', border: '1px solid #f64e60', borderRadius: '8px', padding: '12px 16px', marginBottom: '1.5rem', color: '#f64e60', fontSize: '14px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', color: '#92929f', fontSize: '13px', fontWeight: '500', marginBottom: '8px' }}>Username</label>
              <input
                type="text"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                placeholder="Enter username"
                required
                style={{ width: '100%', backgroundColor: '#1e1e2d', border: '1px solid #2b2b40', borderRadius: '8px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', color: '#92929f', fontSize: '13px', fontWeight: '500', marginBottom: '8px' }}>Password</label>
              <input
                type="password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="Enter password"
                required
                style={{ width: '100%', backgroundColor: '#1e1e2d', border: '1px solid #2b2b40', borderRadius: '8px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', backgroundColor: '#c4ff4d', color: '#000', border: 'none', borderRadius: '8px', padding: '13px', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
