import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Contact from '../components/Contact'

function Home({ onQuoteClick }) {
  return (
    <>
      <Hero onQuoteClick={onQuoteClick} />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  )
}

export default Home
