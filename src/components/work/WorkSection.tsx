import SharedTitleSection from '../shared/SharedTitleSection'
import WorkBody from './WorkBody'

const WorkSection = () => {
  return (
    <div className="px-4 py-16 dark:bg-[#030712] xl:py-24 xl:px-20 w-full    ">
      <div className="flex flex-col gap-6 xl:gap-12 xl:px-8">
        <SharedTitleSection
          title={'Work'}
          subtitle={'Some of the noteworthy projects I have built:'}
        />
        <WorkBody />
      </div>
    </div>
  )
}
export default WorkSection
