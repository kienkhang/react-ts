import WorkBox from './WorkBox'

const datas = [
  {
    title: 'Fiskil',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Nest.js',
      'PostgreSQL',
      'Tailwindcss',
      'Figma',
      'Cypress',
      'Storybook',
      'Git'
    ]
  },
  {
    title: 'Fiskil',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Nest.js',
      'PostgreSQL',
      'Tailwindcss',
      'Figma',
      'Cypress',
      'Storybook',
      'Git'
    ]
  },
  {
    title: 'Fiskil',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Nest.js',
      'PostgreSQL',
      'Tailwindcss',
      'Figma',
      'Cypress',
      'Storybook',
      'Git'
    ]
  }
]
const WorkBody = () => {
  return (
    <div className="flex flex-col items-center gap-6 xl:gap-12">
      {datas.map((data, index) => (
        <WorkBox key={index} index={index} title={data.title} content={data.content} tags={data.tags} />
      ))}
    </div>
  )
}
export default WorkBody
