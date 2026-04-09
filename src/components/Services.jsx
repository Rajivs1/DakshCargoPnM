import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function Services() {
  const [isMobile, setIsMobile] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const services = [
    {
      icon: "🏠",
      title: "Home Relocation",
      description: "Complete household shifting with professional packing, loading, and safe transportation.",
      features: ["Door-to-door service", "Trained staff", "Quality packing"]
    },
    {
      icon: "🏢",
      title: "Office Moving",
      description: "Efficient corporate relocation with minimal business disruption and quick setup.",
      features: ["IT equipment care", "Furniture handling", "Weekend moves"]
    },
    {
      icon: "🚗",
      title: "Vehicle Transport",
      description: "Safe car and bike transportation with specialized carriers and full insurance.",
      features: ["Enclosed carriers", "GPS tracking", "Insurance covered"]
    },
    {
      icon: "📦",
      title: "Packing Services",
      description: "Expert packing using high-quality materials to ensure maximum protection.",
      features: ["Bubble wrap", "Wooden crates", "Custom boxes"]
    },
    {
      icon: "🏭",
      title: "Warehousing",
      description: "Secure storage facilities with 24/7 surveillance for short and long-term needs.",
      features: ["Climate controlled", "CCTV security", "Flexible terms"]
    },
    {
      icon: "🌍",
      title: "International Moving",
      description: "Hassle-free international relocation with customs clearance and documentation.",
      features: ["Customs support", "Air & sea freight", "Door delivery"]
    }
  ]

  const sectionStyle = {
    padding: isMobile ? '60px 1rem' : '80px 1.5rem',
    background: colors.bg,
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
    gap: isMobile ? '1.5rem' : '2rem'
  }

  const cardStyle = {
    background: colors.cardBg,
    borderRadius: '25px',
    padding: isMobile ? '2rem' : '2.5rem',
    border: `2px solid ${colors.border}`,
    transition: 'all 0.3s',
    cursor: 'pointer'
  }

  const iconStyle = {
    fontSize: isMobile ? '3rem' : '4rem',
    marginBottom: '1.5rem'
  }

  const titleStyle = {
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '1rem',
    transition: 'color 0.3s'
  }

  const descStyle = {
    color: colors.textSecondary,
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    fontSize: isMobile ? '0.875rem' : '1rem',
    transition: 'color 0.3s'
  }

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: colors.text,
    marginBottom: '0.5rem',
    transition: 'color 0.3s'
  }

  const checkIconStyle = {
    color: '#FF6B35',
    marginRight: '0.5rem',
    fontSize: '1.25rem'
  }

  const learnMoreStyle = {
    marginTop: '1.5rem',
    color: '#FF6B35',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer'
  }

  return (
    <section id="services" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <div style={badgeStyle}>Our Services</div>
          <h2 style={h2Style}>Complete Moving Solutions</h2>
          <p style={subtitleStyle}>
            From packing to delivery, we handle every aspect of your move with care and professionalism
          </p>
        </div>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.15)'
                e.currentTarget.style.borderColor = '#FFD4C4'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = colors.border
              }}
            >
              <div style={iconStyle}>{service.icon}</div>
              <h3 style={titleStyle}>{service.title}</h3>
              <p style={descStyle}>{service.description}</p>
              <ul style={featureListStyle}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={featureItemStyle}>
                    <span style={checkIconStyle}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div style={learnMoreStyle}>
                Learn More <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
