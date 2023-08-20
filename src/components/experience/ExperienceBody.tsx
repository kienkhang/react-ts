import ExperienceContent from './ExperienceContent'
const datas = [
  {
    startTime: '2021-11-02 ',
    endTime: 'Present',
    title: 'Sr.Frontend DeveLoper',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut pretium arcu et massa semper, id fringilla leo semper.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    startTime: '2017-07-02',
    endTime: '2021-10-10',
    title: 'Team Lead',
    content:
      'Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo ac magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    startTime: '2015-12-12',
    endTime: '2017-05-06',
    title: 'Full Stack Developer',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]
const ExperienceBody = () => {
  return (
    <div className=" flex flex-col gap-6 xl:gap-12 items-center">
      {datas.map((data, index) => (
        <ExperienceContent
          key={index}
          startTime={data.startTime}
          title={data.title}
          content={data.content}
          endTime={data.endTime}
        />
      ))}
    </div>
  )
}

export default ExperienceBody
