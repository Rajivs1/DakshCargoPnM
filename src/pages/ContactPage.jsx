import { useEffect } from 'react'
import Contact from '../components/Contact'

function ContactPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return <Contact />
}

export default ContactPage
