import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '6rem 4rem 4rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Top Section with Image and CTA */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          

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
              overflow: 'hidden'
            }}>
              <img
                src="/admire-logo.png"
                alt="Admire Logo"
                style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'contain'
                }}
              />
            </div>
            <span style={{
              fontSize: '13px',
              color: '#666'
            }}>
              © 2026 Admire. All rights reserved.
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={{
            display: 'flex',
            gap: '3rem'
          }}>
            <Link to="/" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Home
            </Link>
            <Link to="/work" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Work
            </Link>
            <Link to="/contact" style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Contact
            </Link>
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
          Start your project today
        </div>
      </div>
    </footer>
  )
}
