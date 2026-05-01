import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All designs')

  const filters = ['All designs', 'Webdesign', 'Motion', 'Product design', 'Mobile apps']

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#e8e8e8',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '2rem 4rem'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1600px',
        margin: '0 auto 4rem'
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

      {/* Main Content with Sidebar */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: '3rem'
      }}>
        {/* Left Sidebar */}
        <div style={{
          position: 'sticky',
          top: '2rem',
          height: 'fit-content'
        }}>
          {/* Profile Card */}
          <div style={{
            backgroundColor: '#000',
            borderRadius: '16px',
            padding: '2.5rem',
            color: '#fff',
            marginBottom: '2rem'
          }}>
            {/* Profile Picture */}
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👤
            </div>

            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              I'm Robin
            </h2>

            <p style={{
              fontSize: '13px',
              color: '#999',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Product-focused multidisciplinary designer with over 10 years of experience.
            </p>

            {/* Rating */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#000',
                fontWeight: 'bold'
              }}>
                G
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ color: '#ff4d4d', fontSize: '12px' }}>★</span>
                ))}
              </div>
            </div>

            {/* Brand Logos */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2rem',
              fontSize: '12px',
              color: '#666',
              flexWrap: 'wrap'
            }}>
              <span>SQUIRE</span>
              <span>nue°</span>
              <span>reap</span>
            </div>

            {/* CTA Button */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#c4ff4d',
                border: 'none',
                borderRadius: '25px',
                padding: '12px 24px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                color: '#000',
                width: '100%',
                marginBottom: '1rem'
              }}>
                Schedule a call
              </button>
            </Link>

            <div style={{
              fontSize: '12px',
              color: '#666',
              textAlign: 'center'
            }}>
              Or drop me an email at<br />
              <span style={{ color: '#fff' }}>robin@rh.design</span>
            </div>
          </div>

          {/* Filter Menu */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  backgroundColor: selectedFilter === filter ? '#f0f0f0' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: '#000',
                  fontWeight: selectedFilter === filter ? '600' : '400',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div>
          {/* Title Section */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '1.1',
              margin: '0 0 0.5rem 0',
              color: '#000'
            }}>
              Recent work
            </h1>
            <p style={{
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '1.1',
              margin: '0',
              color: '#ccc'
            }}>
              I'm proud of
            </p>
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            {/* Project 1 - Dashboard with Chart */}
            <div style={{
              backgroundColor: '#d0d5dd',
              borderRadius: '16px',
              padding: '2rem',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                width: '100%',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#999',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span style={{ color: '#c4ff4d', fontWeight: '600' }}>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '6px',
                  height: '150px'
                }}>
                  {[40, 55, 45, 60, 50, 75, 60, 50, 65, 55, 70, 60].map((height, index) => (
                    <div key={index} style={{
                      flex: 1,
                      height: `${height}%`,
                      backgroundColor: index === 5 ? '#c4ff4d' : '#f0f0f0',
                      borderRadius: '4px 4px 0 0'
                    }}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 - Dark Hero Section */}
            <div style={{
              backgroundColor: '#1a0a3e',
              borderRadius: '16px',
              padding: '3rem',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #1a0a3e 0%, #4a1a6e 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                textAlign: 'center',
                color: '#fff',
                zIndex: 1
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  The Premier Talent Network<br />
                  For Web3 Innovation.
                </h3>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  letterSpacing: '8px'
                }}>
                  NNNNN
                </div>
                <button style={{
                  backgroundColor: '#6366f1',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px 32px',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Get Started
                </button>
              </div>
              {/* Decorative gradient orb */}
              <div style={{
                position: 'absolute',
                bottom: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                filter: 'blur(40px)'
              }}></div>
            </div>

            {/* Project 3 - Stats Dashboard */}
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              padding: '2rem',
              minHeight: '400px',
              color: '#fff'
            }}>
              <div style={{
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '1rem'
                }}>
                  Proof of Work
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  <div style={{
                    backgroundColor: '#2a2a2a',
                    padding: '1.5rem',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#999', marginBottom: '0.5rem' }}>30 days</div>
                    <div style={{ fontSize: '32px', fontWeight: '600' }}>51</div>
                  </div>
                  <div style={{
                    backgroundColor: '#2a2a2a',
                    padding: '1.5rem',
                    borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '12px', color: '#999', marginBottom: '0.5rem' }}>{'< 24 hours'}</div>
                    <div style={{ fontSize: '32px', fontWeight: '600' }}>98%</div>
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: '#2a2a2a',
                padding: '1.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#3a3a3a',
                  borderRadius: '8px'
                }}></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '0.5rem' }}>Project Name</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>Description goes here</div>
                </div>
              </div>
            </div>

            {/* Project 4 - Analytics Dashboard */}
            <div style={{
              backgroundColor: '#f5f5f5',
              borderRadius: '16px',
              padding: '2rem',
              minHeight: '400px'
            }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '600' }}>Welcome John</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>👋</div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0.25rem' }}>64</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Total Projects</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0.25rem' }}>4.3</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Avg Rating</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '0.25rem' }}>54</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>Completed</div>
                  </div>
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  Patient Records
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {[1, 2, 3].map((item) => (
                    <div key={item} style={{
                      backgroundColor: '#f5f5f5',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}>
                      Record #{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
