export default function WhyMeSection() {
  return (
    <section style={{
      maxWidth: '1400px',
      margin: '8rem auto 4rem',
      padding: '0 4rem'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '4rem'
      }}>
        <div style={{ maxWidth: '500px' }}>
          <p style={{
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '2rem',
            fontWeight: '500'
          }}>
            WHY ME
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0',
            color: '#000'
          }}>
            Built by one
          </h2>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0',
            color: '#ccc'
          }}>
            Better than many
          </h2>
        </div>

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
          fontWeight: '500'
        }}>
          Get in touch
          <span style={{ fontSize: '18px' }}>→</span>
        </button>
      </div>

      {/* Feature Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Card 1 - Cross-industry experience */}
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          padding: '3rem',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '1.3',
            margin: '0 0 3rem 0',
            color: '#000'
          }}>
            Cross-industry experience<br />in product design
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {['Fintech', 'Real Estate', 'Trading', 'Fintech', 'Healthcare', 'E-commerce', 'Crypto', 'E-commerce', 'Booking', 'E-commerce', 'SaaS', 'EdTech'].map((tag, index) => (
              <span key={index} style={{
                backgroundColor: tag === 'Trading' || tag === 'E-commerce' ? '#000' : '#e0e0e0',
                color: tag === 'Trading' || tag === 'E-commerce' ? '#fff' : '#000',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2 - Conversion-centric design */}
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          padding: '3rem',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '1.3',
            margin: '0 0 2rem 0',
            color: '#000'
          }}>
            Conversion-centric<br />design
          </h3>
          
          {/* Gauge/Meter Visualization */}
          <div style={{
            position: 'relative',
            width: '200px',
            height: '200px',
            alignSelf: 'flex-end',
            marginTop: 'auto'
          }}>
            {/* Gauge arc background */}
            <svg width="200" height="120" viewBox="0 0 200 120" style={{ position: 'absolute', bottom: '0' }}>
              {/* Background arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Active arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 140 40"
                fill="none"
                stroke="#000"
                strokeWidth="3"
              />
            </svg>
            
            {/* Center logo */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '60px',
              backgroundColor: '#c4ff4d',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 0 8px rgba(196, 255, 77, 0.3)'
            }}>
              <div style={{
                width: '30px',
                height: '30px',
                backgroundColor: '#000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                R
              </div>
            </div>
            
            {/* Conversion rate label */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>Conversion rate</div>
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#000' }}>⚫ 6.84%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Senior-level work */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          padding: '3rem',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '1.3',
            margin: '0',
            color: '#000',
            maxWidth: '60%'
          }}>
            Senior-level work.<br />No agency markup
          </h3>
          
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '40%',
            width: '80px',
            height: '80px',
            backgroundColor: '#c4ff4d',
            borderRadius: '50%',
            opacity: '0.5'
          }}></div>
        </div>

        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          minHeight: '200px'
        }}></div>
      </div>

      {/* Statistics */}
      <div style={{
        display: 'flex',
        gap: '6rem',
        marginTop: '4rem',
        maxWidth: '900px'
      }}>
        <div>
          <div style={{
            fontSize: '72px',
            fontWeight: '300',
            color: '#000',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }}>
            10+
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Years of experience
          </div>
        </div>

        <div>
          <div style={{
            fontSize: '72px',
            fontWeight: '300',
            color: '#000',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }}>
            50+
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Finished projects
          </div>
        </div>

        <div>
          <div style={{
            fontSize: '72px',
            fontWeight: '300',
            color: '#000',
            marginBottom: '0.5rem',
            lineHeight: '1'
          }}>
            100M
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Users worldwide trust products I've designed
          </div>
        </div>
      </div>
    </section>
  )
}
