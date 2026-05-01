export default function ProcessSection() {
  return (
    <section style={{
      maxWidth: '1400px',
      margin: '8rem auto 4rem',
      padding: '0 4rem',
      position: 'relative'
    }}>
      {/* Header with logo and button */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
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

        <p style={{
          fontSize: '11px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: '#999',
          fontWeight: '500',
          margin: '0'
        }}>
          PROCESS
        </p>

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

      {/* Title */}
      <div style={{
        textAlign: 'center',
        marginBottom: '5rem'
      }}>
        <h2 style={{
          fontSize: '64px',
          fontWeight: '600',
          lineHeight: '1.1',
          margin: '0 0 0.5rem 0',
          color: '#000'
        }}>
          From idea to launch
        </h2>
        <p style={{
          fontSize: '64px',
          fontWeight: '600',
          lineHeight: '1.1',
          margin: '0',
          color: '#d0d0d0'
        }}>
          I got you covered
        </p>
      </div>

      {/* Process Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '3rem',
        position: 'relative'
      }}>
        {/* Decorative connecting lines */}
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '33%',
          width: '1px',
          height: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        }}>
          <span style={{ fontSize: '20px', color: '#ccc' }}>→</span>
        </div>
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '66%',
          width: '1px',
          height: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 0
        }}>
          <span style={{ fontSize: '20px', color: '#ccc' }}>→</span>
        </div>

        {/* Card 1 - Discovery & Strategy */}
        <div style={{
          backgroundColor: 'transparent',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Large decorative circle background */}
          <div style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            marginBottom: '2.5rem'
          }}>
            {/* Outer decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '220px',
              height: '220px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>
            
            {/* Middle decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '160px',
              height: '160px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>

            {/* Icon Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70px',
              height: '70px',
              backgroundColor: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '28px'
            }}>
              ●
            </div>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#000',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            Discovery & Strategy
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#999',
            lineHeight: '1.7',
            margin: '0',
            maxWidth: '280px'
          }}>
            We dive into your goals, audience, and market to uncover real opportunities. In a matter of days we'll outline a MAP that's worth building.
          </p>
        </div>

        {/* Card 2 - Design & Prototyping */}
        <div style={{
          backgroundColor: 'transparent',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Large decorative circle background */}
          <div style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            marginBottom: '2.5rem'
          }}>
            {/* Outer decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '220px',
              height: '220px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>
            
            {/* Middle decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '160px',
              height: '160px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>

            {/* Icon Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70px',
              height: '70px',
              backgroundColor: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '28px'
            }}>
              ●
            </div>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#000',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            Design & Prototyping
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#999',
            lineHeight: '1.7',
            margin: '0',
            maxWidth: '280px'
          }}>
            From UX flows to pixel-perfect UI, I turn your ideas into interactive product. Expect high-fidelity prototypes, design layouts, and micro interactions that feel real because the magic happens.
          </p>
        </div>

        {/* Card 3 - Testing & Validation */}
        <div style={{
          backgroundColor: 'transparent',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Large decorative circle background */}
          <div style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            marginBottom: '2.5rem'
          }}>
            {/* Outer decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '220px',
              height: '220px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>
            
            {/* Middle decorative circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '160px',
              height: '160px',
              border: '1px solid #e0e0e0',
              borderRadius: '50%',
              opacity: '0.5'
            }}></div>

            {/* Icon Circle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70px',
              height: '70px',
              backgroundColor: '#000',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '28px'
            }}>
              ●
            </div>
          </div>

          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#000',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}>
            Testing & Validation
          </h3>

          <p style={{
            fontSize: '13px',
            color: '#999',
            lineHeight: '1.7',
            margin: '0',
            maxWidth: '280px'
          }}>
            Before launch, we stress-test the product with users, refine what matters most, and ensure your design decisions are backed by data — not just guesses.
          </p>
        </div>
      </div>
    </section>
  )
}
