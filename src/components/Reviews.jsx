import { useTheme } from '../context/ThemeContext'
import { useResponsive } from '../hooks/useResponsive'

function Reviews() {
  const { isMobile, isTablet } = useResponsive()
  const { colors } = useTheme()

  const reviews = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "Excellent service! They moved my entire household from Bangalore to Mumbai without a single scratch. Very professional team and reasonable pricing."
    },
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Best packers and movers in Bangalore! They handled all my fragile items with great care. Highly recommend Daksh Cargo for anyone planning to relocate."
    },
    {
      name: "Amit Patel",
      rating: 4,
      review: "Good experience overall. The team was punctual and efficient. They completed the move faster than expected. Will definitely use their services again."
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      review: "Amazing service from start to finish! The staff was courteous and handled everything professionally. My office relocation was stress-free thanks to them."
    },
    {
      name: "Vikram Singh",
      rating: 4,
      review: "Very satisfied with their service. They packed everything carefully and delivered on time. The pricing was transparent with no hidden charges."
    },
    {
      name: "Ananya Iyer",
      rating: 5,
      review: "Daksh Cargo made my interstate move so easy! They took care of everything from packing to unpacking. Truly professional and trustworthy service."
    },
    {
      name: "Karthik Menon",
      rating: 5,
      review: "Exceptional service! They moved my car and household items safely. The team was very cooperative and completed the job within the promised time."
    },
    {
      name: "Deepa Nair",
      rating: 4,
      review: "Great experience with Daksh Cargo. They were careful with my belongings and the delivery was on schedule. Good value for money!"
    }
  ]

  const sectionStyle = {
    padding: isMobile ? '3rem 1rem' : isTablet ? '4rem 1.5rem' : '5rem 2rem',
    background: colors.bg,
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    overflow: 'hidden'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: isMobile ? '2rem' : isTablet ? '3rem' : '4rem'
  }

  const titleStyle = {
    fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
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
    fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
    color: colors.textSecondary,
    maxWidth: '600px',
    margin: '0 auto',
    transition: 'color 0.3s'
  }

  const gridStyle = {
    display: 'flex',
    gap: isMobile ? '1.5rem' : '2rem',
    animation: 'scroll 40s linear infinite',
    width: 'fit-content'
  }

  const reviewCardStyle = {
    background: colors.cardBg,
    borderRadius: '20px',
    padding: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    border: `2px solid rgba(255, 107, 53, 0.1)`,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minWidth: isMobile ? '280px' : isTablet ? '320px' : '380px',
    maxWidth: isMobile ? '280px' : isTablet ? '320px' : '380px',
    flex: '0 0 auto',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)'
  }

  const starsContainerStyle = {
    display: 'flex',
    gap: '0.25rem',
    fontSize: isMobile ? '1rem' : '1.25rem'
  }

  const reviewTextStyle = {
    color: colors.textSecondary,
    fontSize: isMobile ? '0.9375rem' : '1rem',
    lineHeight: '1.7',
    flex: 1,
    transition: 'color 0.3s'
  }

  const nameStyle = {
    fontSize: isMobile ? '1.125rem' : '1.25rem',
    fontWeight: '700',
    color: colors.text,
    transition: 'color 0.3s'
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? '#FFB800' : '#E0E0E0' }}>
        ★
      </span>
    ))
  }

  return (
    <section style={sectionStyle}>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            What Our <span style={gradientTextStyle}>Customers Say</span>
          </h2>
          <p style={subtitleStyle}>
            Real experiences from our satisfied customers across India
          </p>
        </div>

        <div style={gridStyle}>
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index}
              style={reviewCardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.1)'
              }}
            >
              <div style={starsContainerStyle}>
                {renderStars(review.rating)}
              </div>
              <p style={reviewTextStyle}>"{review.review}"</p>
              <div style={nameStyle}>- {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
