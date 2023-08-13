import SharedTitleSection from '../shared/SharedTitleSection'
import ExperienceBody from './ExperienceBody'

const ExperienceSection = () => {
  return (
    <div className=" flex flex-col gap-6 xl:gap-12 xl:px-8">
      <SharedTitleSection
        title={'Experience'}
        subtitle={'Here is a quick summary of my most recent experiences:'}
      />
      <ExperienceBody />
    </div>
  )
}

export default ExperienceSection
