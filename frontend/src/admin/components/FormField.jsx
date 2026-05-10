import { useTheme } from './ThemeContext'

export default function FormField({ label, error, children }) {
  const { theme } = useTheme()
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <label style={{ display: 'block', color: theme.textMuted, fontSize: '13px', fontWeight: '500', marginBottom: '6px' }}>{label}</label>}
      {children}
      {error && <p style={{ color: '#f64e60', fontSize: '12px', margin: '4px 0 0 0' }}>{error}</p>}
    </div>
  )
}

export function Input({ value, onChange, placeholder, type = 'text', ...props }) {
  const { theme } = useTheme()
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ width: '100%', backgroundColor: theme.inputBg, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 14px', color: theme.text, fontSize: '14px', outline: 'none', boxSizing: 'border-box', fontFamily: "'Inter', sans-serif" }}
      {...props}
    />
  )
}

export function Textarea({ value, onChange, placeholder, rows = 4 }) {
  const { theme } = useTheme()
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{ width: '100%', backgroundColor: theme.inputBg, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 14px', color: theme.text, fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'vertical', fontFamily: "'Inter', sans-serif" }}
    />
  )
}

export function Select({ value, onChange, children }) {
  const { theme } = useTheme()
  return (
    <select
      value={value}
      onChange={onChange}
      style={{ width: '100%', backgroundColor: theme.inputBg, border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '10px 14px', color: theme.text, fontSize: '14px', outline: 'none', boxSizing: 'border-box', cursor: 'pointer' }}
    >
      {children}
    </select>
  )
}
