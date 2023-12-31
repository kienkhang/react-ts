import AboutMeSection from '@/components/aboutme/AboutMeSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import Footer from '@/components/footer/Footer'
import InTouchSections from '@/components/getintouch/InTouchSections'
import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfilePhoto from '@/components/profile/ProfilePhoto'
import SkillsSection from '@/components/skills/SkillsSection'
import WorkSection from '@/components/work/WorkSection'

const IndexPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 px-4 py-16 xl:flex-row-reverse xl:justify-center xl:px-8">
        <ProfilePhoto></ProfilePhoto>
        <ProfileInfo></ProfileInfo>
      </div>
      <div>
        <AboutMeSection />
      </div>
      <div>
        <SkillsSection></SkillsSection>
      </div>
      <div className="px-4 py-16 bg-[#F9FAFB] dark:bg-[#111827] xl:px-20 xl:py-24">
        <ExperienceSection />
      </div>
      <div>
        <InTouchSections />
        <WorkSection />
      </div>
      <div className=" py-6 xl:py-6 xl:px-20 bg-[#F9FAFB] dark:bg-[#111827]">
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
