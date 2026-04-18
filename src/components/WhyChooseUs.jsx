import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const features = [
    {
      icon: "🎯",
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go the extra mile to ensure a smooth experience."
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden charges. Get detailed quotes upfront with clear breakdown of all costs."
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "Premium packing materials and trained professionals ensure your belongings stay protected."
    },
    {
      icon: "⚡",
      title: "On-Time Delivery",
      description: "We value your time. Our efficient logistics guarantee timely pickup and delivery."
    },
    {
      icon: "👷",
      title: "Trained Professionals",
      description: "Our experienced team handles everything from delicate items to heavy furniture."
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round-the-clock customer support to address your queries anytime."
    }
  ]

  const sectionStyle = {
    padding: isMobile ? '60px 1rem' : '80px 1.5rem',
    background: colors.bgSecondary,
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '3rem' : '4rem',
    animation: 'fadeInDown 0.8s ease-out'
  }

  const badgeStyle = {
    color: '#FF6B35',
    fontWeight: '600',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }

  const h2Style = {
    fontSize: isMobile ? '2rem' : '3.5rem',
    fontWeight: '800',
    color: colors.text,
    margin: '1rem 0',
    transition: 'color 0.3s'
  }

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    color: colors.textSecondary,
    maxWidth: '600px',
    margin: '0 auto',
    transition: 'color 0.3s'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
    gap: isMobile ? '1.5rem' : '2rem',
    marginBottom: isMobile ? '3rem' : '4rem'
  }

  const cardStyle = {
    background: colors.cardBg,
    borderRadius: '25px',
    padding: isMobile ? '2rem' : '2.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    animation: 'fadeInUp 0.6s ease-out backwards',
    border: '2px solid rgba(255, 107, 53, 0.1)',
    position: 'relative',
    overflow: 'hidden'
  }

  const iconStyle = {
    fontSize: isMobile ? '3rem' : '3.5rem',
    marginBottom: '1.5rem',
    display: 'inline-block',
    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    filter: 'drop-shadow(0 4px 12px rgba(255, 107, 53, 0.3))'
  }

  const titleStyle = {
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1rem',
    transition: 'color 0.3s'
  }

  const descStyle = {
    color: colors.textSecondary,
    lineHeight: '1.7',
    fontSize: isMobile ? '0.875rem' : '1rem',
    transition: 'color 0.3s'
  }

  const ctaBoxStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FF6B35 100%)',
    backgroundSize: '200% 200%',
    borderRadius: '30px',
    padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 25px 70px rgba(255, 107, 53, 0.4)',
    animation: 'scaleIn 0.8s ease-out, gradientShift 5s ease infinite',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid rgba(255, 255, 255, 0.2)'
  }

  const ctaTitleStyle = {
    fontSize: isMobile ? '1.75rem' : '3rem',
    fontWeight: '800',
    marginBottom: '1rem'
  }

  const ctaSubtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    marginBottom: '2rem',
    opacity: 0.9
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }

  const primaryButtonStyle = {
    background: 'white',
    color: '#FF6B35',
    padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
    borderRadius: '50px',
    border: 'none',
    fontWeight: '600',
    fontSize: isMobile ? '1rem' : '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    position: 'relative',
    overflow: 'hidden'
  }

  const secondaryButtonStyle = {
    background: 'transparent',
    color: 'white',
    padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
    borderRadius: '50px',
    border: '2px solid white',
    fontWeight: '600',
    fontSize: isMobile ? '1rem' : '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)'
  }

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div style={badgeStyle}>Why Choose Us</div>
          <h2 style={h2Style}>What Makes Us Different</h2>
          <p style={subtitleStyle}>
            We combine experience, technology, and dedication to provide the best moving experience
          </p>
        </div>

        <div style={gridStyle}>
          {features.map((feature, index) => (
            <div 
              key={index}
              style={{...cardStyle, animationDelay: `${index * 0.1}s`}}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)'
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(255, 107, 53, 0.25)'
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.4)'
                const icon = e.currentTarget.querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'scale(1.3) rotate(15deg)'
                  icon.style.filter = 'drop-shadow(0 8px 20px rgba(255, 107, 53, 0.6))'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)'
                const icon = e.currentTarget.querySelector('.feature-icon')
                if (icon) {
                  icon.style.transform = 'scale(1) rotate(0deg)'
                  icon.style.filter = 'drop-shadow(0 4px 12px rgba(255, 107, 53, 0.3))'
                }
              }}
            >
              <div className="feature-icon" style={iconStyle}>{feature.icon}</div>
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={descStyle}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={ctaBoxStyle}>
          <h3 style={ctaTitleStyle}>Ready to Make Your Move?</h3>
          <p style={ctaSubtitleStyle}>Get a free, no-obligation quote today</p>
          <div style={buttonContainerStyle}>
            <button 
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              Request Quote
            </button>
            <button 
              style={secondaryButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
