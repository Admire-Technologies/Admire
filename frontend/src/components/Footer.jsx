import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '6rem 4rem 4rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Top Section with Image and CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          {/* Image Card */}
          <div style={{
            position: 'relative',
            marginBottom: '3rem'
          }}>
            <div style={{
              width: '240px',
              height: '140px',
              backgroundColor: '#1a4a4a',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              backgroundImage: 'linear-gradient(180deg, #2a5a5a 0%, #1a4a4a 100%)'
            }}>
              {/* Logo in top left */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                width: '28px',
                height: '28px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                A
              </div>

              {/* Start project button in top right */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px'
              }}>
                <button style={{
                  backgroundColor: '#c4ff4d',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '10px',
                  fontWeight: '500',
                  color: '#000',
                  cursor: 'pointer'
                }}>
                  Start project
                </button>
              </div>

              {/* Placeholder for tech/digital image */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px'
              }}>
                💻
              </div>
            </div>

            {/* Small profile circle overlapping bottom right */}
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
              width: '50px',
              height: '50px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              border: '3px solid #000',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#666'
            }}>
              🚀
            </div>
          </div>

          {/* Main CTA Text */}
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '1.1',
              margin: '0 0 0.5rem 0',
              color: '#fff'
            }}>
              From idea to impact
            </h2>
            <p style={{
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '1.1',
              margin: '0',
              color: '#666'
            }}>
              Built to scale
            </p>
          </div>

          {/* Book a call button */}
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#000',
              border: '2px solid #fff',
              borderRadius: '30px',
              padding: '14px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              color: '#fff',
              transition: 'all 0.3s ease'
            }}>
              Schedule a consultation
              <span style={{
                backgroundColor: '#c4ff4d',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontSize: '16px'
              }}>
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Bottom Section - Navigation and Social */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          {/* Logo and Copyright */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              A
            </div>
            <span style={{
              fontSize: '13px',
              color: '#666'
            }}>
              © 2024 Admire. All rights reserved.
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={{
            display: 'flex',
            gap: '3rem'
          }}>
            <a href="#home" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>
              Home
            </a>
            <a href="#services" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>
              Services
            </a>
            <a href="#work" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>
              Portfolio
            </a>
            <a href="#contact" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'color 0.2s ease'
            }}>
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <a href="#email" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'color 0.2s ease'
            }}>
              ✉
            </a>
            <a href="#linkedin" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'color 0.2s ease'
            }}>
              in
            </a>
            <a href="#github" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'color 0.2s ease'
            }}>
              ⚡
            </a>
            <a href="#twitter" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '18px',
              transition: 'color 0.2s ease'
            }}>
              𝕏
            </a>
          </div>
        </div>

        {/* Large "Start your project" Text */}
        <div style={{
          fontSize: '120px',
          fontWeight: '700',
          lineHeight: '1',
          background: 'linear-gradient(180deg, #fff 0%, #333 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textAlign: 'left',
          marginTop: '2rem'
        }}>
          Start your project
        </div>
      </div>
    </footer>
  )
}
