import { useState, useEffect, useRef } from 'react'

const PortfolioCard1 = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    minWidth: '400px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexShrink: 0
  }}>
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      right: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12px',
      color: '#666'
    }}>
      <span>🎯 Carousel</span>
      <div style={{ display: 'flex', gap: '12px' }}>
        <span>New to 3</span>
        <span>Chart View</span>
      </div>
      <button style={{
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        padding: '6px 16px',
        fontSize: '11px',
        cursor: 'pointer'
      }}>
        Contact sales
      </button>
    </div>
    <div style={{ fontSize: '80px', color: '#ddd' }}>📦</div>
  </div>
)

const PortfolioCard2 = () => (
  <div style={{
    backgroundColor: '#000',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    minWidth: '400px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    flexShrink: 0
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px', color: '#c4ff4d', fontSize: '14px' }}>Master zone</div>
      <div style={{ fontSize: '64px', fontWeight: '300', marginBottom: '10px' }}>
        $ 32<span style={{ fontSize: '32px', color: '#666' }}>.2</span>
      </div>
      <div style={{ fontSize: '12px', color: '#666' }}>EURO CURRENCY EXCHANGE</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
        <div><div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>1</div><div style={{ fontSize: '32px' }}>💵</div></div>
        <div><div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>2</div><div style={{ fontSize: '32px' }}>📊</div></div>
        <div><div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>3</div><div style={{ fontSize: '32px' }}>⚙️</div></div>
      </div>
    </div>
  </div>
)

const PortfolioCard3 = () => (
  <div style={{
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    minWidth: '400px',
    height: '400px',
    padding: '20px',
    flexShrink: 0
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div style={{ fontSize: '14px', fontWeight: '600' }}>📊 Flatbush</div>
      <div style={{ fontSize: '12px', color: '#666' }}>Wednesday, October 14</div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '12px' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px' }}>
        <div style={{ color: '#666', marginBottom: '4px' }}>Admin 7</div>
        <div style={{ fontWeight: '600' }}>Jan 11</div>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px' }}>
        <div style={{ color: '#666', marginBottom: '4px' }}>Jan 7</div>
        <div style={{ fontWeight: '600' }}>Jan 11</div>
      </div>
    </div>
  </div>
)

export default function PortfolioSection() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const portfolioRef = useRef(null)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (portfolioRef.current) {
          const maxScroll = portfolioRef.current.scrollWidth - portfolioRef.current.clientWidth
          const newPosition = prev + 1
          if (newPosition >= maxScroll) {
            return 0
          }
          return newPosition
        }
        return prev
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  // Apply scroll position
  useEffect(() => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  // Drag handlers
  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y
    })
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      setDragPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragOffset({
      x: touch.clientX - dragPosition.x,
      y: touch.clientY - dragPosition.y
    })
  }

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0]
      setDragPosition({
        x: touch.clientX - dragOffset.x,
        y: touch.clientY - dragOffset.y
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset, dragPosition])

  return (
    <>
      {/* Auto-Scrolling Portfolio Section */}
      <section 
        ref={portfolioRef}
        style={{
          maxWidth: '1400px',
          margin: '4rem auto 0',
          padding: '0 4rem',
          display: 'flex',
          gap: '2rem',
          overflowX: 'hidden',
          scrollBehavior: 'smooth'
        }}
      >
        <PortfolioCard1 />
        <PortfolioCard2 />
        <PortfolioCard3 />
        <PortfolioCard1 />
        <PortfolioCard2 />
        <PortfolioCard3 />
      </section>

      {/* Second Portfolio Row with Draggable */}
      <section style={{
        maxWidth: '1400px',
        margin: '2rem auto 0',
        padding: '0 4rem',
        display: 'flex',
        gap: '2rem'
      }}>
        {/* iPhone Dark Mode */}
        <div style={{
          backgroundColor: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          minWidth: '400px',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <div style={{
            width: '200px',
            height: '350px',
            backgroundColor: '#0a0a0a',
            borderRadius: '40px',
            border: '8px solid #1a1a1a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'linear-gradient(180deg, #1a3a1a 0%, #0a2a0a 50%, #0a0a0a 100%)'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              fontSize: '10px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Seedr <span style={{ fontSize: '8px' }}>▼</span>
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#c4ff4d',
              borderRadius: '50%',
              marginTop: '40px'
            }}></div>
          </div>
        </div>

        {/* Dashboard with Draggable Button */}
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '16px',
          overflow: 'visible',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          minWidth: '400px',
          height: '400px',
          padding: '20px',
          position: 'relative',
          flexShrink: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            padding: '20px',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} style={{
                  backgroundColor: '#fff',
                  padding: '15px',
                  borderRadius: '8px',
                  height: '80px'
                }}>
                  <div style={{ width: '30px', height: '30px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '60%', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '2px' }}></div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              position: dragPosition.x ? 'fixed' : 'absolute',
              left: dragPosition.x || '50%',
              top: dragPosition.y || '50%',
              transform: dragPosition.x ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
              zIndex: 1000,
              backgroundColor: '#c4ff4d',
              borderRadius: '50%',
              width: '140px',
              height: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: '600',
              boxShadow: isDragging ? '0 12px 32px rgba(196, 255, 77, 0.6)' : '0 8px 24px rgba(196, 255, 77, 0.4)',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              transition: isDragging ? 'none' : 'box-shadow 0.2s ease'
            }}
          >
            Drag me
          </div>
        </div>

        {/* Branding Card */}
        <div style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          minWidth: '400px',
          height: '400px',
          padding: '20px',
          color: '#fff',
          position: 'relative',
          flexShrink: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: '#c4ff4d',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            Get in touch
          </div>
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '8px', fontWeight: '600' }}>Branding</h3>
            <p style={{ fontSize: '13px', color: '#999', lineHeight: '1.6', marginBottom: '20px' }}>
              From brand strategy to visual identity, I help you build brands that resonate with your audience.
            </p>
            <div style={{ fontSize: '12px', color: '#c4ff4d' }}>See how →</div>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            gap: '12px'
          }}>
            <div style={{ flex: 1, backgroundColor: '#2a2a2a', padding: '12px', borderRadius: '8px', fontSize: '20px' }}>🎨</div>
            <div style={{ flex: 1, backgroundColor: '#2a2a2a', padding: '12px', borderRadius: '8px', fontSize: '20px' }}>📱</div>
          </div>
        </div>
      </section>
    </>
  )
}
