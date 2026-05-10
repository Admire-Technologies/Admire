import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    title: 'Admire HRMS',
    category: 'Product design',
    image: '/admire-hrms.png',
    tags: ['Product design', 'Webdesign'],
  },
  {
    id: 2,
    title: 'Toyalumbunaties',
    category: 'Webdesign',
    image: '/toyalumbunaties.png',
    tags: ['Webdesign'],
  },
  {
    id: 3,
    title: 'Admire E-commerce',
    category: 'Webdesign',
    image: '/admire-ecommerce.png',
    tags: ['Webdesign', 'Product design'],
  },
  {
    id: 4,
    title: 'Parikarna',
    category: 'Mobile apps',
    image: '/parikarna.png',
    tags: ['Mobile apps', 'Product design'],
  },
  {
    id: 5,
    title: 'Admire Salesforce',
    category: 'Product design',
    image: '/admire-salesforce.png',
    tags: ['Product design'],
  },
]

const filters = ['All designs', 'Webdesign', 'Motion', 'Product design', 'Mobile apps']

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState('All designs')

  const filtered = selectedFilter === 'All designs'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter))

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f2f2f2', fontFamily: "'DM Sans', sans-serif" }}>
      <Header />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 4rem 4rem',
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: '3rem',
      }}>
        {/* Left Sidebar */}
        <div style={{ position: 'sticky', top: '2rem', height: 'fit-content' }}>
          {/* Company Card */}
          <div style={{
            backgroundColor: '#000',
            borderRadius: '16px',
            padding: '2.5rem',
            color: '#fff',
            marginBottom: '1rem',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src="/admire-logo.png" alt="Admire" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '0.75rem', margin: '0 0 0.75rem 0' }}>
              We're Admire
            </h2>

            <p style={{ fontSize: '13px', color: '#999', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Tech innovators and digital marketing experts empowering business growth with smart technology.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <div style={{
                width: '24px', height: '24px', backgroundColor: '#fff', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img src="/admire-logo.png" alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map(s => (
                  <span key={s} style={{ color: '#ff4d4d', fontSize: '12px' }}>★</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '11px', color: '#666' }}>
              <span>SQUIRE</span><span>nue°</span><span>reap</span><span>IRON</span>
            </div>

            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#c4ff4d', border: 'none', borderRadius: '25px',
                padding: '12px 24px', cursor: 'pointer', fontSize: '14px',
                fontWeight: '600', color: '#000', width: '100%', marginBottom: '1rem',
              }}>
                Start your project →
              </button>
            </Link>

            <div style={{ fontSize: '12px', color: '#666', textAlign: 'center' }}>
              Or reach us at<br />
              <span style={{ color: '#fff' }}>hello@admire.in</span>
            </div>
          </div>

          {/* Filter Menu */}
          <div style={{
            backgroundColor: '#fff', borderRadius: '16px', padding: '1rem',
            display: 'flex', flexDirection: 'column', gap: '0.25rem',
          }}>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  backgroundColor: selectedFilter === filter ? '#f0f0f0' : 'transparent',
                  border: 'none', borderRadius: '8px', padding: '10px 16px',
                  textAlign: 'left', cursor: 'pointer', fontSize: '14px', color: '#000',
                  fontWeight: selectedFilter === filter ? '600' : '400',
                  transition: 'background 0.2s ease',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '56px', fontWeight: '600', lineHeight: '1.1', margin: '0 0 0.5rem 0', color: '#000' }}>
              Our work
            </h1>
            <p style={{ fontSize: '56px', fontWeight: '600', lineHeight: '1.1', margin: '0', color: '#ccc' }}>
              Built to perform
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            {filtered.map(project => (
              <div
                key={project.id}
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e8e8e8',
                }}
              >
                <div style={{ width: '100%', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.4rem' }}>
                    {project.category}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: '#000' }}>
                    {project.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
