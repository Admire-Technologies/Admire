import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '2rem 4rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#000',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '18px',
          cursor: 'pointer'
        }}>
          R
        </div>
      </Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>
        <button style={{
          backgroundColor: '#c4ff4d',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          Get in touch
          <span style={{ fontSize: '18px' }}>→</span>
        </button>
      </Link>
    </header>
  )
}
