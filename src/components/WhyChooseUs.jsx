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
    marginBottom: isMobile ? '3rem' : '4rem'
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
    boxShadow: colors.shadow,
    transition: 'all 0.3s'
  }

  const iconStyle = {
    fontSize: isMobile ? '3rem' : '3.5rem',
    marginBottom: '1.5rem'
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
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    borderRadius: '30px',
    padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
    textAlign: 'center',
    color: 'white',
    boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3)'
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
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
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
    transition: 'all 0.3s'
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
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = colors.shadow
              }}
            >
              <div style={iconStyle}>{feature.icon}</div>
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={descStyle}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={ctaBoxStyle}>
          <h3 style={ctaTitleStyle}>Ready to Make Your Move?</h3>
          <p style={ctaSubtitleStyle}>Get a free, no-obligation quote today</p>
          <div style={buttonContainerStyle}>
            <button style={primaryButtonStyle}>Request Quote</button>
            <button style={secondaryButtonStyle}>View Pricing</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
