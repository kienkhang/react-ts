import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfilePhoto from '@/components/profile/ProfilePhoto'
import SkillsSection from '@/components/skills/SkillsSection'

const IndexPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 xl:flex-row-reverse xl:justify-center xl:px-8">
        <ProfilePhoto></ProfilePhoto>
        <ProfileInfo></ProfileInfo>
      </div>
      <div>
        <SkillsSection></SkillsSection>
      </div>
    </div>
  )
}

export default IndexPage
