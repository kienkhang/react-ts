import SkillsDetails from './SkillsDetails'

const SkillsSection = () => {
  return (
    <div className="px-4 xl:px-20 py-4 xl:py-[96px] items-stretch">
      <div className="flex flex-col items-center xl:px-8">
        <div className="rounded-xl text-sm text-[#4B5563] dark:text-[#D1D5DB] bg-[#E5E7EB] dark:bg-[#374151] w-fit px-5 py-1 mb-4">
          <h1 className="mx-auto text-center">Skills</h1>
        </div>
        <h2 className="w-full text-center">
          The skills, tools and technologies I am really good at:
        </h2>
        <div className="flex flex-col mt-8 xl:flex-row xl:justify-center xl:mt-12">
          <SkillsDetails></SkillsDetails>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
