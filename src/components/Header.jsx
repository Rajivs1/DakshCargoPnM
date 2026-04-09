import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

function Header({ onQuoteClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme, colors } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    boxShadow: isDark ? '0 1px 3px rgba(0,0,0,0.5)' : '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.3s'
  }

  const navStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 1.5rem'
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px'
  }

  const logoStyle = {
    fontSize: isMobile ? '1.25rem' : '1.75rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textDecoration: 'none'
  }

  const linkStyle = (isActive) => ({
    color: isActive ? '#FF6B35' : colors.text,
    textDecoration: 'none',
    fontWeight: isActive ? '600' : '500',
    fontSize: '1rem',
    transition: 'color 0.3s',
    cursor: 'pointer',
    position: 'relative',
    paddingBottom: '4px',
    borderBottom: isActive ? '2px solid #FF6B35' : '2px solid transparent'
  })

  const buttonStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
  }

  const themeButtonStyle = {
    background: colors.cardBg,
    border: `2px solid ${colors.border}`,
    color: colors.text,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '1.25rem',
    transition: 'all 0.3s'
  }

  const mobileMenuStyle = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1rem',
    paddingBottom: '1.5rem',
    paddingTop: '1rem'
  }

  const hamburgerStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: colors.text,
    padding: '0.5rem'
  }

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={containerStyle}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <div>
              <div style={logoStyle}>Daksh Cargo</div>
              <div style={{fontSize: isMobile ? '0.625rem' : '0.75rem', color: colors.textSecondary}}>
                Packers & Movers
              </div>
            </div>
          </Link>
          
          <div style={{display: 'flex', alignItems: 'center', gap: '2.5rem'}}>
            {!isMobile && (
              <div style={{display: 'flex', gap: '2.5rem'}}>
                <Link to="/" style={linkStyle(location.pathname === '/')}>Home</Link>
                <Link to="/services" style={linkStyle(location.pathname === '/services')}>Services</Link>
                <Link to="/about" style={linkStyle(location.pathname === '/about')}>About</Link>
                <Link to="/contact" style={linkStyle(location.pathname === '/contact')}>Contact</Link>
              </div>
            )}
            
            <button 
              style={themeButtonStyle}
              onClick={toggleTheme}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#FF6B35'
                e.target.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = colors.border
                e.target.style.transform = 'scale(1)'
              }}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {!isMobile && (
              <button 
                style={buttonStyle}
                onClick={onQuoteClick}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)'
                  e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.3)'
                }}
              >
                Get Quote
              </button>
            )}
            
            {isMobile && (
              <button 
                style={hamburgerStyle}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>
        </div>

        {isMobile && (
          <div style={mobileMenuStyle}>
            <Link to="/" style={linkStyle(location.pathname === '/')} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" style={linkStyle(location.pathname === '/services')} onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/about" style={linkStyle(location.pathname === '/about')} onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" style={linkStyle(location.pathname === '/contact')} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <button 
              style={{...buttonStyle, width: '100%'}}
              onClick={() => {
                onQuoteClick()
                setIsMenuOpen(false)
              }}
            >
              Get Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
