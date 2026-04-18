import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import dakshVehicle from '../assets/DakshVehicle.png'

function Hero({ onQuoteClick }) {
  const [isMobile, setIsMobile] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sectionStyle = {
    paddingTop: isMobile ? '100px' : '140px',
    paddingBottom: isMobile ? '40px' : '80px',
    background: colors.gradientBg,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 1.5rem'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : '4rem',
    alignItems: 'center'
  }

  const badgeStyle = {
    display: 'inline-block',
    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(247, 147, 30, 0.15) 100%)',
    color: '#FF6B35',
    padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
    borderRadius: '50px',
    fontSize: isMobile ? '0.75rem' : '0.875rem',
    fontWeight: '600',
    marginBottom: isMobile ? '1rem' : '2rem',
    border: '2px solid rgba(255, 107, 53, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.15)',
    animation: 'pulseGlow 3s ease-in-out infinite'
  }

  const h1Style = {
    fontSize: isMobile ? '2rem' : '4rem',
    fontWeight: '800',
    color: colors.text,
    lineHeight: '1.1',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    transition: 'color 0.3s',
    textShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
  }

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF6B35 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block',
    animation: 'textShine 3s linear infinite'
  }

  const pStyle = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    color: colors.textSecondary,
    lineHeight: '1.8',
    marginBottom: isMobile ? '1.5rem' : '2.5rem',
    transition: 'color 0.3s'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: isMobile ? '2rem' : '3rem'
  }

  const primaryButtonStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2.5rem',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    fontSize: isMobile ? '0.875rem' : '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4), 0 0 0 0 rgba(255, 107, 53, 0.5)',
    position: 'relative',
    overflow: 'hidden'
  }

  const secondaryButtonStyle = {
    background: colors.cardBg,
    color: colors.text,
    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2.5rem',
    borderRadius: '50px',
    border: `2px solid ${colors.border}`,
    fontWeight: '600',
    fontSize: isMobile ? '0.875rem' : '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block'
  }

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: isMobile ? '1rem' : '2rem',
    paddingTop: '2rem'
  }

  const statStyle = {
    textAlign: 'center'
  }

  const statNumberStyle = {
    fontSize: isMobile ? '1.75rem' : '2.5rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const statLabelStyle = {
    fontSize: isMobile ? '0.75rem' : '0.875rem',
    color: colors.textSecondary,
    marginTop: '0.5rem',
    transition: 'color 0.3s'
  }

  const imageContainerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const mainCardStyle = {
    background: colors.accentBg,
    borderRadius: '30px',
    padding: isMobile ? '2rem' : '3rem',
    boxShadow: '0 20px 60px rgba(255, 107, 53, 0.15)',
    position: 'relative',
    zIndex: 10,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid rgba(255, 107, 53, 0.1)',
    backdropFilter: 'blur(10px)'
  }

  const vehicleImageStyle = {
    width: '100%',
    maxWidth: isMobile ? '250px' : '400px',
    height: 'auto',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    filter: 'drop-shadow(0 15px 35px rgba(255, 107, 53, 0.25))',
    transition: 'all 0.3s ease'
  }

  const featureCardStyle = {
    background: colors.cardBg,
    borderRadius: '20px',
    padding: isMobile ? '1rem' : '1.5rem',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.6s ease-out backwards',
    border: '1px solid rgba(255, 107, 53, 0.1)',
    cursor: 'pointer'
  }

  const iconBoxStyle = {
    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%)',
    padding: '1rem',
    borderRadius: '15px',
    fontSize: isMobile ? '1.5rem' : '2rem',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 107, 53, 0.2)'
  }

  return (
    <section id="home" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div>
            <div style={{...badgeStyle, animation: 'fadeInLeft 0.8s ease-out'}}>
              ⭐ Trusted by 10,000+ Happy Customers
            </div>
            
            <h1 style={{...h1Style, animation: 'fadeInLeft 0.8s ease-out 0.2s backwards'}}>
              Safe & Reliable
              <span style={gradientTextStyle}>Moving Services</span>
            </h1>
            
            <p style={{...pStyle, animation: 'fadeInLeft 0.8s ease-out 0.4s backwards'}}>
              Professional packing and moving solutions across India. We handle your belongings with care and deliver on time, every time.
            </p>
            
            <div style={{...buttonContainerStyle, animation: 'fadeInLeft 0.8s ease-out 0.6s backwards'}}>
              <button 
                style={primaryButtonStyle}
                onClick={onQuoteClick}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)'
                  e.target.style.boxShadow = '0 20px 50px rgba(255, 107, 53, 0.5), 0 0 0 8px rgba(255, 107, 53, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.4), 0 0 0 0 rgba(255, 107, 53, 0.5)'
                }}
              >
                Get Free Quote →
              </button>
              <a 
                href="tel:9686502001" 
                style={secondaryButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#FF6B35'
                  e.target.style.color = '#FF6B35'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = colors.border
                  e.target.style.color = colors.text
                }}
              >
                📞 9686502001
              </a>
            </div>

            <div style={{...statsContainerStyle, animation: 'fadeInUp 0.8s ease-out 0.8s backwards'}}>
              <div style={statStyle}>
                <div style={statNumberStyle}>10+</div>
                <div style={statLabelStyle}>Years Experience</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>50+</div>
                <div style={statLabelStyle}>Cities Covered</div>
              </div>
              <div style={statStyle}>
                <div style={statNumberStyle}>100%</div>
                <div style={statLabelStyle}>Safe Delivery</div>
              </div>
            </div>
          </div>

          <div style={{...imageContainerStyle, animation: 'fadeInRight 0.8s ease-out 0.4s backwards'}}>
            <div 
              style={mainCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(255, 107, 53, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
              }}
            >
              <img 
                src={dakshVehicle} 
                alt="Daksh Cargo Vehicle" 
                style={{...vehicleImageStyle, animation: 'floatSlow 4s ease-in-out infinite'}}
              />
              <div 
                style={{...featureCardStyle, animationDelay: '0.8s'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)'
                }}
              >
                <div style={iconBoxStyle}>📦</div>
                <div>
                  <div style={{fontWeight: '600', color: colors.text, transition: 'color 0.3s'}}>
                    Professional Packing
                  </div>
                  <div style={{fontSize: '0.875rem', color: colors.textSecondary, transition: 'color 0.3s'}}>
                    Quality materials used
                  </div>
                </div>
              </div>
              <div 
                style={{...featureCardStyle, animationDelay: '1s'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)'
                }}
              >
                <div style={iconBoxStyle}>🛡️</div>
                <div>
                  <div style={{fontWeight: '600', color: colors.text, transition: 'color 0.3s'}}>
                    Insured Transit
                  </div>
                  <div style={{fontSize: '0.875rem', color: colors.textSecondary, transition: 'color 0.3s'}}>
                    100% coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
