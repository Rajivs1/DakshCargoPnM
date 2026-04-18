import { useEffect, useState } from 'react'
import dakshVehicle from '../assets/DakshVehicle.png'

function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }, 3500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const splashStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-out',
    overflow: 'hidden'
  }

  const vehicleContainerStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    animation: 'moveVehicle 3s ease-in-out forwards'
  }

  const vehicleImageStyle = {
    width: '300px',
    height: 'auto',
    filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.3))'
  }

  const contentStyle = {
    textAlign: 'center',
    zIndex: 1,
    animation: 'fadeInUp 0.8s ease-out 1s backwards'
  }

  const helloTextStyle = {
    fontSize: '3rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '1rem',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    letterSpacing: '-0.02em'
  }

  const welcomeTextStyle = {
    fontSize: '1.5rem',
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '500',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    lineHeight: '1.6'
  }

  const loaderStyle = {
    width: '50px',
    height: '50px',
    border: '4px solid rgba(255, 255, 255, 0.3)',
    borderTop: '4px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto'
  }

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes moveVehicle {
            0% {
              left: 100%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
            }
            90% {
              opacity: 1;
            }
            100% {
              left: -20%;
              opacity: 0;
              transform: translateY(-50%);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={splashStyle}>
        <div style={vehicleContainerStyle}>
          <img 
            src={dakshVehicle} 
            alt="Daksh Cargo Vehicle" 
            style={vehicleImageStyle}
          />
        </div>
        
        <div style={contentStyle}>
          <h1 style={helloTextStyle}>Hello Visitor</h1>
          <p style={welcomeTextStyle}>Welcome to Daksh Cargo Packers & Movers</p>
          <div style={loaderStyle}></div>
        </div>
      </div>
    </>
  )
}

export default SplashScreen
