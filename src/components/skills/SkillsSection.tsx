import SkillsDetails from './SkillsDetails'

const SkillsSection = () => {
  return (
    <div className="px-4 xl:px-20 py-4 xl:py-[96px] items-stretch">
      <div className="flex flex-col items-center xl:px-4">
        <div className="rounded-xl text-sm bg-[#E5E7EB] w-fit px-5 py-1 mb-4">
          <h1 className="text-center mx-auto">Skills</h1>
        </div>
        <h2 className="w-full text-center">
          The skills, tools and technologies I am really good at:
        </h2>
        <div className="flex flex-col xl:flex-row xl:justify-center mt-8 xl:mt-12">
          <SkillsDetails></SkillsDetails>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
