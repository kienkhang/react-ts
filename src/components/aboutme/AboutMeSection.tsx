import AboutMeContent from './AboutMeContent'
import AboutMePhoto from './AboutMePhoto'

const AboutMeSection = () => {
  return (
    <div className="px-4 py-16 dark:bg-[#111827] xl:py-24 xl:px-20 w-full ">
      <div className="flex flex-col items-center ">
        <div className="px-5 py-1 rounded-xl dark:bg-[#374151] dark:text-[#D1D5DB] bg-[#E5E7EB] text-[#4B5563] mb-6 xl: mb-12">
          <h1 className="mx-auto text-center ">About me</h1>
        </div>

        <div className="flex flex-col w-full gap-12 xl:flex-row xl:justify-center">
          <div className="w-full max-w-[584px] mx-auto xl:mx-0">
            <AboutMePhoto></AboutMePhoto>
          </div>

          <div className="flex flex-col w-full max-w-[584px] mx-auto xl:mx-0 ">
            <AboutMeContent></AboutMeContent>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMeSection
