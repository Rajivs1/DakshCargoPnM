import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

function Home({ onQuoteClick }) {
  return (
    <>
      <Hero onQuoteClick={onQuoteClick} />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Contact />
    </>
  )
}

export default Home
