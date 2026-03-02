import MediaHero from './MediaHero'
import Leadership from './Leadership'
import MediaContacts from './MediaContacts'
import BrandGuidelines from './BrandGuidelines'
import BrandResources from './BrandResources'

const MediaKitMain = () => {
  return (
    <div>
      <MediaHero/>
      <BrandGuidelines/>
      <BrandResources/>
      {/* <Story/> */}
      {/* <LogoSection/> */}
      <Leadership/>
      <MediaContacts/>
    </div>
  )
}

export default MediaKitMain
