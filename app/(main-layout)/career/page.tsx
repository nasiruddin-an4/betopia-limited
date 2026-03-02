import BuildTheFuture from '@/components/pages/career/BuildTheFuture'
import CareerHero from '@/components/pages/career/CareerHero'
import JoinBetopia from '@/components/pages/career/JoinBetopia'
import Openings from '@/components/pages/career/Openings'
import StartYourJourney from '@/components/pages/career/StartYourJourney'

export default function page() {
  return (
    <div>
        <CareerHero/>
        <BuildTheFuture/>
        <Openings/>
        <JoinBetopia/>
        <StartYourJourney/>
    </div>
  )
}
