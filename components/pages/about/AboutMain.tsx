import AboutBanner from './AboutBanner'
// import AboutStats from './AboutStats'
// import OurStory from './OurStory'
import Owners from './Owners'
// import JoinJourney from './JoinJourney'
import Vision from './Vision'
import CTA from './CTA'
import Mission from './Mission'
import Values from './Values'
import WorldwideOperations from './WorldwideOperations'


const AboutMain = () => {
  return (
    <div>
     <AboutBanner/>
     <Vision/>
     <Mission/>
     <WorldwideOperations/>
     {/* <OurStory/> */}
     <Owners/>
     <Values/>
     <CTA/>
     {/* <AboutStats/> */}
     {/* <JoinJourney/> */}
    </div>
  )
}

export default AboutMain
