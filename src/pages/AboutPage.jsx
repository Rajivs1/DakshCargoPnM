import { useTheme } from '../context/ThemeContext'
import { useResponsive } from '../hooks/useResponsive'

function AboutPage() {
  const { isMobile, isTablet } = useResponsive()
  const { colors } = useTheme()

  const sectionStyle = {
    paddingTop: isMobile ? '100px' : isTablet ? '110px' : '120px',
    paddingBottom: isMobile ? '60px' : isTablet ? '70px' : '80px',
    background: colors.bg,
    minHeight: '100vh',
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : isTablet ? '0 1.5rem' : '0 2rem'
  }

  const heroStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '3rem' : isTablet ? '4rem' : '5rem'
  }

  const h1Style = {
    fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
    fontWeight: '800',
    color: colors.text,
    marginBottom: '1.5rem',
    transition: 'color 0.3s'
  }

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
    color: colors.textSecondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.8',
    transition: 'color 0.3s'
  }

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr',
    gap: isMobile ? '2rem' : isTablet ? '3rem' : '4rem',
    marginBottom: isMobile ? '3rem' : isTablet ? '4rem' : '5rem',
    alignItems: 'center'
  }

  const imageBoxStyle = {
    background: colors.accentBg,
    borderRadius: '30px',
    padding: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
    textAlign: 'center',
    fontSize: isMobile ? '5rem' : isTablet ? '6rem' : '8rem',
    transition: 'background 0.3s'
  }

  const h2Style = {
    fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.5rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1.5rem',
    transition: 'color 0.3s'
  }

  const pStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    color: colors.textSecondary,
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    transition: 'color 0.3s'
  }

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : isTablet ? '4rem' : '5rem'
  }

  const statCardStyle = {
    background: colors.accentBg,
    borderRadius: '20px',
    padding: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
    textAlign: 'center',
    transition: 'background 0.3s'
  }

  const statNumberStyle = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '0.5rem'
  }

  const statLabelStyle = {
    fontSize: isMobile ? '0.875rem' : isTablet ? '0.9375rem' : '1rem',
    color: colors.textSecondary,
    fontWeight: '600',
    transition: 'color 0.3s'
  }

  const valuesGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem'
  }

  const valueCardStyle = {
    background: colors.cardBg,
    borderRadius: '20px',
    padding: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
    border: `2px solid ${colors.border}`,
    transition: 'all 0.3s'
  }

  const valueIconStyle = {
    fontSize: isMobile ? '2.5rem' : isTablet ? '2.75rem' : '3rem',
    marginBottom: '1rem'
  }

  const valueTitleStyle = {
    fontSize: isMobile ? '1.25rem' : isTablet ? '1.375rem' : '1.5rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1rem',
    transition: 'color 0.3s'
  }

  const valueDescStyle = {
    color: colors.textSecondary,
    lineHeight: '1.7',
    fontSize: isMobile ? '0.875rem' : isTablet ? '0.9375rem' : '1rem',
    transition: 'color 0.3s'
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={heroStyle}>
          <h1 style={h1Style}>
            About <span style={gradientTextStyle}>Daksh Cargo</span>
          </h1>
          <p style={subtitleStyle}>
            With over a decade of experience, we've become one of Bengaluru's most trusted names in packing and moving services. Our commitment to excellence and customer satisfaction drives everything we do.
          </p>
        </div>

        <div style={contentGridStyle}>
          <div style={imageBoxStyle}>
            🚚
          </div>
          <div>
            <h2 style={h2Style}>Our Story</h2>
            <p style={pStyle}>
              Founded in 2014, Daksh Cargo Packers and Movers started with a simple mission: to make moving stress-free and affordable for everyone. What began as a small local operation has grown into a full-service moving company serving customers across India.
            </p>
            <p style={pStyle}>
              We understand that moving is more than just transporting belongings—it's about transitioning to a new chapter in life. That's why we treat every item with care and every customer with respect.
            </p>
          </div>
        </div>

        <div style={statsGridStyle}>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>10+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>10K+</div>
            <div style={statLabelStyle}>Happy Customers</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>50+</div>
            <div style={statLabelStyle}>Cities Covered</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>100%</div>
            <div style={statLabelStyle}>Safe Delivery</div>
          </div>
        </div>

        <div style={{textAlign: 'center', marginBottom: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem'}}>
          <h2 style={h2Style}>Our Core Values</h2>
          <p style={{...subtitleStyle, fontSize: isMobile ? '1rem' : isTablet ? '1.0625rem' : '1.125rem'}}>
            The principles that guide our work and define who we are
          </p>
        </div>

        <div style={valuesGridStyle}>
          <div 
            style={valueCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={valueIconStyle}>🎯</div>
            <h3 style={valueTitleStyle}>Customer First</h3>
            <p style={valueDescStyle}>
              Your satisfaction is our top priority. We go above and beyond to ensure your moving experience is smooth and stress-free.
            </p>
          </div>

          <div 
            style={valueCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={valueIconStyle}>🤝</div>
            <h3 style={valueTitleStyle}>Integrity</h3>
            <p style={valueDescStyle}>
              We believe in transparent pricing, honest communication, and delivering on our promises every single time.
            </p>
          </div>

          <div 
            style={valueCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={valueIconStyle}>⚡</div>
            <h3 style={valueTitleStyle}>Excellence</h3>
            <p style={valueDescStyle}>
              We continuously improve our services, invest in training, and use the best equipment to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
