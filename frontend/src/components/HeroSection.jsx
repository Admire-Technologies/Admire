export default function HeroSection() {
  return (
    <main style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '4rem 4rem 2rem'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <p style={{
          color: '#666',
          fontSize: '16px',
          marginBottom: '1.5rem',
          fontWeight: '400'
        }}>
          I'm Robin — designer, founder, and growth partner
        </p>
        <h1 style={{
          fontSize: '72px',
          fontWeight: '600',
          lineHeight: '1.1',
          margin: '0 0 2rem 0',
          color: '#000'
        }}>
          I help funded startups grow revenue through{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              display: 'inline-block',
              width: '60px',
              height: '60px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              transform: 'rotate(-15deg)'
            }}></span>
            design
          </span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button style={{
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            padding: '14px 28px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Show recent work
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: '#ff4d4d', fontSize: '12px' }}>G</span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} style={{ color: '#ff4d4d', fontSize: '14px' }}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
