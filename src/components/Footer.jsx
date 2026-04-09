import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const footerStyle = {
    background: isDark ? '#0F172A' : '#F3F4F6',
    color: isDark ? '#9CA3AF' : '#6B7280',
    padding: isMobile ? '3rem 1rem 2rem' : '4rem 1.5rem 2rem',
    transition: 'background 0.3s, color 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: isMobile ? '2rem' : '3rem',
    marginBottom: '3rem'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: isDark ? 'white' : '#111827',
    marginBottom: '1rem',
    transition: 'color 0.3s'
  }

  const descStyle = {
    fontSize: '0.875rem',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    color: isDark ? '#9CA3AF' : '#6B7280',
    transition: 'color 0.3s'
  }

  const socialContainerStyle = {
    display: 'flex',
    gap: '0.75rem'
  }

  const socialIconStyle = {
    background: isDark ? '#1E293B' : '#E5E7EB',
    padding: '0.75rem',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const headingStyle = {
    color: isDark ? 'white' : '#111827',
    fontWeight: '600',
    marginBottom: '1.5rem',
    fontSize: '1.125rem',
    transition: 'color 0.3s'
  }

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const linkItemStyle = {
    marginBottom: '0.75rem'
  }

  const linkStyle = {
    color: isDark ? '#9CA3AF' : '#6B7280',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.3s',
    cursor: 'pointer'
  }

  const borderStyle = {
    borderTop: `1px solid ${isDark ? '#1E293B' : '#D1D5DB'}`,
    paddingTop: '2rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    color: isDark ? '#9CA3AF' : '#6B7280',
    transition: 'all 0.3s'
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div>
            <div style={logoStyle}>Daksh Cargo</div>
            <p style={descStyle}>
              Your trusted partner for safe and reliable moving services across India.
            </p>
            <div style={socialContainerStyle}>
              <div 
                style={socialIconStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDark ? '#1E293B' : '#E5E7EB'
                }}
              >
                <span style={{fontSize: '1.25rem'}}>📘</span>
              </div>
              <div 
                style={socialIconStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDark ? '#1E293B' : '#E5E7EB'
                }}
              >
                <span style={{fontSize: '1.25rem'}}>🐦</span>
              </div>
              <div 
                style={socialIconStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDark ? '#1E293B' : '#E5E7EB'
                }}
              >
                <span style={{fontSize: '1.25rem'}}>📷</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={linkListStyle}>
              <li style={linkItemStyle}>
                <a 
                  href="#home" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Home
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#services" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Services
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#about" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  About Us
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#contact" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={headingStyle}>Services</h4>
            <ul style={linkListStyle}>
              <li style={linkItemStyle}>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Home Relocation
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Office Moving
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Vehicle Transport
                </a>
              </li>
              <li style={linkItemStyle}>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#FF6B35'}
                  onMouseLeave={(e) => e.target.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                >
                  Warehousing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={headingStyle}>Contact Info</h4>
            <ul style={linkListStyle}>
              <li style={{...linkItemStyle, fontSize: '0.875rem', color: isDark ? '#9CA3AF' : '#6B7280'}}>
                📞 <a href="tel:9686502001" style={{color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none'}}>9686502001</a>
              </li>
              <li style={{...linkItemStyle, fontSize: '0.875rem', color: isDark ? '#9CA3AF' : '#6B7280', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a 
                  href="https://wa.me/919313133001?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20packing%20and%20moving%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none'}}
                >
                  9313133001
                </a>
              </li>
              <li style={{...linkItemStyle, fontSize: '0.875rem', wordBreak: 'break-all', color: isDark ? '#9CA3AF' : '#6B7280'}}>
                📧 <a href="mailto:dakshcargopackersandmovers@gmail.com" style={{color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none'}}>
                  dakshcargopackersandmovers@gmail.com
                </a>
              </li>
              <li style={{...linkItemStyle, fontSize: '0.875rem', color: isDark ? '#9CA3AF' : '#6B7280'}}>📍 Hosa Road, Bengaluru</li>
            </ul>
          </div>
        </div>

        <div style={borderStyle}>
          <p>&copy; 2026 Daksh Cargo Packers & Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
