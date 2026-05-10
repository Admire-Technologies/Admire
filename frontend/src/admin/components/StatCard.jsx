import { useTheme } from './ThemeContext'

export default function StatCard({ label, value, icon, color, change }) {
  const { theme } = useTheme()
  return (
    <div style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'background 0.2s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: theme.textFaint, fontSize: '13px', fontWeight: '500', margin: 0 }}>{label}</p>
          <h3 style={{ color: theme.text, fontSize: '32px', fontWeight: '700', margin: '6px 0 0 0', lineHeight: 1 }}>{value}</h3>
        </div>
        <div style={{ width: '48px', height: '48px', backgroundColor: `${color}20`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
          {icon}
        </div>
      </div>
      {change !== undefined && (
        <p style={{ margin: 0, fontSize: '13px', color: change >= 0 ? '#50cd89' : '#f64e60' }}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
        </p>
      )}
    </div>
  )
}
