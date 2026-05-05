import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function WhyMeSection() {
  return (
    <section style={{
      width: '100%',
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
            WHY ADMIRE
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0',
            color: '#000'
          }}>
            Tech solutions
          </h2>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '1.2',
            margin: '0',
            color: '#ccc'
          }}>
            That drive results
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
          A
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
          Start your project
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
            Full-stack development<br />& digital marketing
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {['React', 'Node.js', 'SEO', 'React', 'Python', 'PPC Ads', 'AWS', 'Social Media', 'Analytics', 'E-commerce', 'Mobile Apps', 'Branding'].map((tag, index) => (
              <span key={index} style={{
                backgroundColor: tag === 'React' || tag === 'SEO' ? '#000' : '#e0e0e0',
                color: tag === 'React' || tag === 'SEO' ? '#fff' : '#000',
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

        {/* Card 2 - Conversion-centric design with Circular Progress */}
        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '3rem',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'visible'
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
          
          {/* Conversion rate label - top right */}
          <div style={{
            position: 'absolute',
            top: '3rem',
            right: '3rem',
            textAlign: 'right'
          }}>
            <div style={{ 
              fontSize: '11px', 
              color: '#999', 
              marginBottom: '4px',
              fontWeight: '400'
            }}>
              Conversion rate
            </div>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '4px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#000',
                borderRadius: '50%'
              }}></span>
              6.84%
            </div>
          </div>
          
          {/* Speedometer using Circular Progress */}
          <div style={{
            position: 'relative',
            width: '200px',
            height: '160px',
            alignSelf: 'flex-end',
            marginTop: 'auto'
          }}>
            {/* Half-circle gauge container */}
            <div style={{
              position: 'relative',
              width: '160px',
              height: '80px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}>
              {/* Circular progress as speedometer */}
              <div style={{
                width: '160px',
                height: '160px',
                transform: 'rotate(-90deg)',
                position: 'absolute',
                top: '-80px'
              }}>
                <CircularProgressbar
                  value={68.4} // 6.84% represented as 68.4% of gauge
                  strokeWidth={8}
                  styles={buildStyles({
                    rotation: 0.5, // Start from bottom
                    strokeLinecap: 'round',
                    pathColor: '#c4ff4d',
                    trailColor: '#e0e0e0',
                    pathTransition: 'stroke-dasharray 1s ease-in-out'
                  })}
                />
              </div>
              
              {/* Gauge tick marks */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '160px',
                height: '80px'
              }}>
                {[...Array(11)].map((_, i) => {
                  const angle = (i * 18) - 90 // -90 to +90 degrees
                  const isMainTick = i % 2 === 0
                  const radius = 75
                  const tickLength = isMainTick ? 8 : 4
                  const x1 = 80 + Math.cos((angle * Math.PI) / 180) * radius
                  const y1 = 80 + Math.sin((angle * Math.PI) / 180) * radius
                  const x2 = 80 + Math.cos((angle * Math.PI) / 180) * (radius - tickLength)
                  const y2 = 80 + Math.sin((angle * Math.PI) / 180) * (radius - tickLength)
                  
                  return (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        left: `${Math.min(x1, x2)}px`,
                        top: `${Math.min(y1, y2)}px`,
                        width: `${Math.abs(x2 - x1) || 1}px`,
                        height: `${Math.abs(y2 - y1) || 1}px`,
                        backgroundColor: '#ccc',
                        transformOrigin: 'center',
                        transform: `rotate(${Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI}deg)`
                      }}
                    />
                  )
                })}
              </div>
              
              {/* Speedometer needle */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%) rotate(35deg)',
                transformOrigin: 'bottom center',
                width: '2px',
                height: '60px',
                backgroundColor: '#000',
                zIndex: 3
              }} />
              
              {/* Center hub */}
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                backgroundColor: '#000',
                borderRadius: '50%',
                zIndex: 4
              }} />
            </div>
            
            {/* Green Circle with Logo */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              backgroundColor: '#c4ff4d',
              borderRadius: '50%',
              boxShadow: '0 0 0 12px rgba(196, 255, 77, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2
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
                fontSize: '16px'
              }}>
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Enterprise-grade solutions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }}>
        <div style={{
          backgroundColor: '#f5f5f5',
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
            Enterprise-grade.<br />Startup agility
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
            5+
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Years of innovation
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
            200+
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Successful projects
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
            50M+
          </div>
          <div style={{
            fontSize: '14px',
            color: '#666'
          }}>
            Users reached through our solutions
          </div>
        </div>
      </div>
    </section>
  )
}
