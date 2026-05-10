import { useEffect } from 'react'

const colors = { success: '#50cd89', error: '#f64e60', info: '#009ef7' }

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 2000,
      backgroundColor: '#1b1b29', border: `1px solid ${colors[type]}`,
      borderLeft: `4px solid ${colors[type]}`,
      borderRadius: '10px', padding: '14px 20px',
      display: 'flex', alignItems: 'center', gap: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      animation: 'slideIn 0.2s ease',
    }}>
      <span style={{ fontSize: '18px' }}>{type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
      <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6c7293', cursor: 'pointer', fontSize: '16px', marginLeft: '8px' }}>×</button>
      <style>{`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}</style>
    </div>
  )
}
