import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function Contact() {
  const [isMobile, setIsMobile] = useState(false)
  const { colors } = useTheme()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sectionStyle = {
    padding: isMobile ? '60px 1rem' : '80px 1.5rem',
    background: colors.bg,
    transition: 'background 0.3s'
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '3rem' : '4rem',
    alignItems: 'center'
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
    margin: '1rem 0 1.5rem',
    transition: 'color 0.3s'
  }

  const pStyle = {
    fontSize: isMobile ? '1rem' : '1.125rem',
    color: colors.textSecondary,
    marginBottom: '2.5rem',
    lineHeight: '1.7',
    transition: 'color 0.3s'
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    marginBottom: '2rem',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  }

  const iconBoxStyle = {
    background: colors.accentBg,
    padding: '1.25rem',
    borderRadius: '20px',
    fontSize: '1.5rem',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const contactTitleStyle = {
    fontWeight: '600',
    color: colors.text,
    marginBottom: '0.5rem',
    fontSize: '1.125rem',
    transition: 'color 0.3s'
  }

  const contactTextStyle = {
    color: colors.textSecondary,
    lineHeight: '1.6',
    transition: 'color 0.3s'
  }

  const formContainerStyle = {
    background: colors.accentBg,
    borderRadius: '30px',
    padding: isMobile ? '2rem' : '3rem',
    boxShadow: colors.shadow,
    transition: 'all 0.3s'
  }

  const formTitleStyle = {
    fontSize: isMobile ? '1.5rem' : '2rem',
    fontWeight: '700',
    color: colors.text,
    marginBottom: '2rem',
    transition: 'color 0.3s'
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    borderRadius: '15px',
    border: `2px solid ${colors.border}`,
    fontSize: '1rem',
    marginBottom: '1rem',
    transition: 'all 0.3s',
    background: colors.cardBg,
    color: colors.text,
    boxSizing: 'border-box'
  }

  const textareaStyle = {
    ...inputStyle,
    resize: 'none',
    minHeight: '120px'
  }

  const submitButtonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    padding: '1.25rem',
    borderRadius: '15px',
    border: 'none',
    fontWeight: '600',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
  }

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div style={{animation: 'fadeInLeft 0.8s ease-out'}}>
            <div style={badgeStyle}>Contact Us</div>
            <h2 style={h2Style}>Get In Touch With Us</h2>
            <p style={pStyle}>
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>

            <div>
              <div style={{...contactItemStyle, animation: 'fadeInLeft 0.6s ease-out 0.2s backwards'}}>
                <div style={iconBoxStyle}>📞</div>
                <div>
                  <div style={contactTitleStyle}>Phone</div>
                  <div style={contactTextStyle}>
                    <a href="tel:9686502001" style={{color: colors.textSecondary, textDecoration: 'none'}}>9686502001</a><br />
                    <a href="tel:9513133001" style={{color: colors.textSecondary, textDecoration: 'none'}}>9513133001</a>
                  </div>
                </div>
              </div>

              <div style={{...contactItemStyle, animation: 'fadeInLeft 0.6s ease-out 0.3s backwards'}}>
                <div style={iconBoxStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div style={contactTitleStyle}>WhatsApp</div>
                  <div style={contactTextStyle}>
                    <a 
                      href="https://wa.me/919313133001?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20packing%20and%20moving%20services." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{color: colors.textSecondary, textDecoration: 'none'}}
                    >
                      +91 9313133001
                    </a>
                  </div>
                </div>
              </div>

              <div style={{...contactItemStyle, animation: 'fadeInLeft 0.6s ease-out 0.4s backwards'}}>
                <div style={iconBoxStyle}>📧</div>
                <div>
                  <div style={contactTitleStyle}>Email</div>
                  <div style={contactTextStyle}>
                    <a href="mailto:dakshcargopackersandmovers@gmail.com" style={{color: colors.textSecondary, textDecoration: 'none', wordBreak: 'break-all'}}>
                      dakshcargopackersandmovers@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div style={{...contactItemStyle, animation: 'fadeInLeft 0.6s ease-out 0.5s backwards'}}>
                <div style={iconBoxStyle}>📍</div>
                <div>
                  <div style={contactTitleStyle}>Office</div>
                  <div style={contactTextStyle}>
                    Doctor's Layout, Naganathapura<br />
                    Hosa Road, Bengaluru
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{...formContainerStyle, animation: 'fadeInRight 0.8s ease-out 0.4s backwards'}}>
            <h3 style={formTitleStyle}>Send us a message</h3>
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              />
              <select 
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              >
                <option>Select Service</option>
                <option>Home Relocation</option>
                <option>Office Moving</option>
                <option>Vehicle Transport</option>
                <option>Warehousing</option>
                <option>International Moving</option>
              </select>
              <textarea 
                placeholder="Your Message" 
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = colors.border}
              ></textarea>
              <button 
                type="submit"
                style={submitButtonStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)'
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 107, 53, 0.3)'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
