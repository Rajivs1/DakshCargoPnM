import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

function QuoteModal({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false)
  const { colors } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    moveDate: '',
    serviceType: '',
    message: ''
  })

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isOpen) return null

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '1rem',
    animation: 'fadeIn 0.3s ease-in-out'
  }

  const modalStyle = {
    background: colors.cardBg,
    borderRadius: '25px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
    animation: 'slideUp 0.3s ease-out',
    transition: 'background 0.3s'
  }

  const headerStyle = {
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '25px 25px 0 0',
    color: 'white',
    position: 'relative'
  }

  const closeButtonStyle = {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s'
  }

  const titleStyle = {
    fontSize: isMobile ? '1.5rem' : '2rem',
    fontWeight: '800',
    marginBottom: '0.5rem'
  }

  const subtitleStyle = {
    fontSize: isMobile ? '0.875rem' : '1rem',
    opacity: 0.9
  }

  const formContainerStyle = {
    padding: isMobile ? '1.5rem' : '2rem'
  }

  const formGroupStyle = {
    marginBottom: '1.5rem'
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: colors.text,
    fontSize: '0.875rem',
    transition: 'color 0.3s'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: `2px solid ${colors.border}`,
    fontSize: '1rem',
    transition: 'all 0.3s',
    boxSizing: 'border-box',
    background: colors.bg,
    color: colors.text
  }

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '1rem'
  }

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical'
  }

  const submitButtonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    color: 'white',
    padding: '1rem',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '600',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={headerStyle}>
          <button 
            style={closeButtonStyle}
            onClick={onClose}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            ×
          </button>
          <h2 style={titleStyle}>Get Free Quote</h2>
          <p style={subtitleStyle}>Fill in the details and we'll get back to you within 24 hours</p>
        </div>

        <form style={formContainerStyle} onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              name="name"
              required
              style={inputStyle}
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

          <div style={rowStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                name="email"
                required
                style={inputStyle}
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                style={inputStyle}
                placeholder="10-digit number"
                value={formData.phone}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Moving From *</label>
              <input
                type="text"
                name="from"
                required
                style={inputStyle}
                placeholder="Current location"
                value={formData.from}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Moving To *</label>
              <input
                type="text"
                name="to"
                required
                style={inputStyle}
                placeholder="Destination"
                value={formData.to}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Preferred Move Date *</label>
              <input
                type="date"
                name="moveDate"
                required
                style={inputStyle}
                value={formData.moveDate}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Service Type *</label>
              <select
                name="serviceType"
                required
                style={inputStyle}
                value={formData.serviceType}
                onChange={handleChange}
                onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              >
                <option value="">Select service</option>
                <option value="home">Home Relocation</option>
                <option value="office">Office Moving</option>
                <option value="vehicle">Vehicle Transport</option>
                <option value="packing">Packing Services</option>
                <option value="warehouse">Warehousing</option>
                <option value="international">International Moving</option>
              </select>
            </div>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Additional Details</label>
            <textarea
              name="message"
              style={textareaStyle}
              placeholder="Tell us about your moving requirements..."
              value={formData.message}
              onChange={handleChange}
              onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

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
            Get Free Quote
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default QuoteModal
