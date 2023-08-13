import ExperienceContent from './ExperienceContent'
const datas = [
  {
    date: 'Nov 2021 - Present',
    title: 'Sr.Frontend DeveLoper',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium arcu et massa semper, id fringilla leo semper.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    date: 'Jul 2017 - Oct 2021',
    title: 'Team Lead',
    content:
      'Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    date: 'Dec 2015 - May 2017',
    title: 'Full Stack Developer',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]
const ExperienceBody = () => {
  return (
    <div className=" flex flex-col gap-6 xl:gap-12 items-center">
      {datas.map((data, index) => (
        <ExperienceContent key={index} date={data.date} title={data.title} content={data.content} />
      ))}
    </div>
  )
}

export default ExperienceBody
