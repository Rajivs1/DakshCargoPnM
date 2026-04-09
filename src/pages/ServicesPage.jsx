import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function ServicesPage() {
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
      details: [
        "Pre-move survey and planning",
        "High-quality packing materials",
        "Careful handling of fragile items",
        "Furniture disassembly and reassembly",
        "Safe loading and unloading",
        "Unpacking and arrangement services"
      ],
      price: "Starting from ₹5,000"
    },
    {
      icon: "🏢",
      title: "Office Moving",
      description: "Efficient corporate relocation with minimal business disruption and quick setup.",
      details: [
        "Detailed relocation planning",
        "IT equipment specialized handling",
        "Furniture and fixture moving",
        "Weekend and after-hours moves",
        "Quick setup at new location",
        "Minimal downtime guarantee"
      ],
      price: "Starting from ₹15,000"
    },
    {
      icon: "🚗",
      title: "Vehicle Transport",
      description: "Safe car and bike transportation with specialized carriers and full insurance.",
      details: [
        "Enclosed carrier transport",
        "GPS tracking system",
        "Full insurance coverage",
        "Door-to-door delivery",
        "Professional drivers",
        "Damage-free guarantee"
      ],
      price: "Starting from ₹8,000"
    },
    {
      icon: "📦",
      title: "Packing Services",
      description: "Expert packing using high-quality materials to ensure maximum protection.",
      details: [
        "Premium packing materials",
        "Bubble wrap and foam padding",
        "Wooden crates for valuables",
        "Custom box sizes",
        "Labeling and inventory",
        "Unpacking services available"
      ],
      price: "Starting from ₹2,000"
    },
    {
      icon: "🏭",
      title: "Warehousing",
      description: "Secure storage facilities with 24/7 surveillance for short and long-term needs.",
      details: [
        "Climate-controlled storage",
        "24/7 CCTV surveillance",
        "Fire safety systems",
        "Pest control measures",
        "Flexible rental terms",
        "Easy access to stored items"
      ],
      price: "Starting from ₹3,000/month"
    },
    {
      icon: "🌍",
      title: "International Moving",
      description: "Hassle-free international relocation with customs clearance and documentation.",
      details: [
        "Complete documentation support",
        "Customs clearance assistance",
        "Air and sea freight options",
        "Door-to-door delivery",
        "International insurance",
        "Tracking and updates"
      ],
      price: "Custom Quote"
    }
  ]

  const sectionStyle = {
    paddingTop: isMobile ? '100px' : '120px',
    paddingBottom: isMobile ? '60px' : '80px',
    background: colors.gradientBg,
    minHeight: '100vh',
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0 1.5rem',
    width: '100%'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '3rem' : '4rem'
  }

  const h1Style = {
    fontSize: isMobile ? '2rem' : '4rem',
    fontWeight: '800',
    color: colors.text,
    marginBottom: '1rem',
    transition: 'color 0.3s'
  }

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const subtitleStyle = {
    fontSize: isMobile ? '1rem' : '1.25rem',
    color: colors.textSecondary,
    maxWidth: '700px',
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
    boxShadow: colors.shadow,
    transition: 'all 0.3s',
    border: '2px solid transparent'
  }

  const iconStyle = {
    fontSize: isMobile ? '3rem' : '4rem',
    marginBottom: '1.5rem'
  }

  const titleStyle = {
    fontSize: isMobile ? '1.5rem' : '1.75rem',
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

  const detailsListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1.5rem 0'
  }

  const detailItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '0.875rem',
    color: colors.text,
    marginBottom: '0.75rem',
    lineHeight: '1.5',
    transition: 'color 0.3s'
  }

  const checkIconStyle = {
    color: '#FF6B35',
    marginRight: '0.75rem',
    fontSize: '1.25rem',
    flexShrink: 0
  }

  const priceStyle = {
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: '1rem'
  }

  const buttonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    padding: '0.875rem',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1 style={h1Style}>
            Our <span style={gradientTextStyle}>Services</span>
          </h1>
          <p style={subtitleStyle}>
            Comprehensive moving and packing solutions tailored to your needs. Professional service at competitive prices.
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
                e.currentTarget.style.boxShadow = colors.shadow
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              <div style={iconStyle}>{service.icon}</div>
              <h3 style={titleStyle}>{service.title}</h3>
              <p style={descStyle}>{service.description}</p>
              
              <ul style={detailsListStyle}>
                {service.details.map((detail, idx) => (
                  <li key={idx} style={detailItemStyle}>
                    <span style={checkIconStyle}>✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div style={priceStyle}>{service.price}</div>
              
              <button
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)'
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
