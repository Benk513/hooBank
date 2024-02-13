import styles from './style.js'
import {Navbar, Hero,Business, Billing, Stats, CTA, CardDeal, Footer,Testimonials,Clients} from './components'
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Header */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}><Navbar/></div>
    </div>

    {/* Hero */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div> 
  
    {/* Hero */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/> 
        <Billing/>
        <CardDeal/> 
        <Testimonials/> 
        <Clients/> 
        <CTA/> 
        <Footer/> 

      </div>

    </div>


  </div>
  )

export default App
