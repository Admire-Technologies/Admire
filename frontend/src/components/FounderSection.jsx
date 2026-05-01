export default function FounderSection() {
  return (
    <section style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '6rem 4rem',
      margin: '8rem 0 0 0',
      position: 'relative'
    }}>
      {/* Header with logo and button */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '18px'
        }}>
          R
        </div>

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
          fontWeight: '500',
          color: '#000'
        }}>
          Get in touch
          <span style={{ fontSize: '18px' }}>→</span>
        </button>
      </div>

      {/* Content Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center'
      }}>
        {/* Left Column - Text Content */}
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#c4ff4d',
            marginBottom: '2rem',
            fontWeight: '500'
          }}>
            THE FOUNDER
          </p>

          <h2 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0 0 0.5rem 0',
            color: '#fff'
          }}>
            Hi, I'm Robin
          </h2>
          <h3 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0 0 3rem 0',
            color: '#666'
          }}>
            Nice to meet you
          </h3>

          <div style={{
            fontSize: '14px',
            lineHeight: '1.8',
            color: '#999',
            marginBottom: '2rem'
          }}>
            <p style={{ margin: '0 0 1.5rem 0' }}>
              I've spent the past 10 years designing products for startups around the world — from seed-stage founders chasing two startups and making every mistake possible, I learned one thing the hard way: great design isn't about blessings.
            </p>
            <p style={{ margin: '0' }}>
              Today, I run a one-person design studio focused on one thing: helping founders go from idea to a high-quality product. UX design, UI, and motion built to drive revenue, retention, and real results for companies.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '3rem'
          }}>
            <span style={{
              fontSize: '14px',
              color: '#fff'
            }}>
              Connect with me on
            </span>
            <a href="#" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              backgroundColor: '#1a1a1a',
              borderRadius: '6px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              transition: 'background-color 0.2s ease'
            }}>
              in
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Placeholder for founder image */}
          <div style={{
            width: '400px',
            height: '500px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            marginBottom: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Gradient overlay effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)'
            }}></div>
            
            {/* Placeholder text - replace with actual image */}
            <div style={{
              fontSize: '14px',
              color: '#666',
              textAlign: 'center',
              zIndex: 1
            }}>
              [Founder Photo]
            </div>
          </div>

          {/* Signature */}
          <div style={{
            fontFamily: 'cursive',
            fontSize: '32px',
            color: '#fff',
            fontStyle: 'italic',
            fontWeight: '300'
          }}>
            Robin Hemmingway
          </div>
        </div>
      </div>
    </section>
  )
}
