import React from 'react'

const SkillsDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-3 xl:grid-cols-8 gap-x-2 xl:gap-x-8 gap-y-4 xl:gap-y-12">
        <div className="flex flex-col items-center">
          <ILocalJavascript className="w-12 h-12 self-center"></ILocalJavascript>
          <span className="text-base xl:text-lg">Javascript</span>
        </div>
        <div className="flex flex-col items-center">
          <ILocalTypescript className="w-12 h-12 self-center"></ILocalTypescript>
          <span className="text-base xl:text-lg">Typescript</span>
        </div>
        <div className="flex flex-col items-center">
          <ILocalReact className="w-12 h-12 self-center"></ILocalReact>
          <span className="text-base xl:text-lg">React.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNextjs className="w-12 h-12 self-center"></ILocalNextjs>
          <span className="text-base xl:text-lg">NextJS.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNodejs className="w-12 h-12 self-center"></ILocalNodejs>
          <span className="text-base xl:text-lg">Node.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalExpress className="w-12 h-12 self-center"></ILocalExpress>
          <span className="text-base xl:text-lg">Express.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNestjs className="w-12 h-12 self-center"></ILocalNestjs>
          <span className="text-base xl:text-lg">NestJS.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalSocket className="w-12 h-12 self-center"></ILocalSocket>
          <span className="text-base xl:text-lg">Socket.io</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalPostgresql className="w-12 h-12 self-center"></ILocalPostgresql>
          <span className="text-base xl:text-lg">PostgreSQL</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalMongodb className="w-12 h-12 self-center"></ILocalMongodb>
          <span className="text-base xl:text-lg">MongoDB</span>I
        </div>

        <div className="flex flex-col items-center">
          <ILocalSass className="w-12 h-12 self-center"></ILocalSass>
          <span className="text-base xl:text-lg">Sass/Scss</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalTailwindcss className="w-12 h-12 self-center"></ILocalTailwindcss>
          <span className="text-base xl:text-lg">TailwindCSS</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalFigma className="w-12 h-12 self-center"></ILocalFigma>
          <span className="text-base xl:text-lg">Figma</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalCypress className="w-12 h-12 self-center"></ILocalCypress>
          <span className="text-base xl:text-lg">Cypress</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalStorybook className="w-12 h-12 self-center"></ILocalStorybook>
          <span className="text-base xl:text-lg">Storybook</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalGithub className="w-12 h-12 self-center"></ILocalGithub>
          <span className="text-base xl:text-lg">Github</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsDetails
