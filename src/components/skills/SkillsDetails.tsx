const SkillsDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-3 xl:grid-cols-8 gap-x-2 xl:gap-x-8 gap-y-4 xl:gap-y-12">
        <div className="flex flex-col items-center">
          <ILocalJavascript className="self-center w-12 h-12"></ILocalJavascript>
          <span className="text-base xl:text-lg">Javascript</span>
        </div>
        <div className="flex flex-col items-center">
          <ILocalTypescript className="self-center w-12 h-12"></ILocalTypescript>
          <span className="text-base xl:text-lg">Typescript</span>
        </div>
        <div className="flex flex-col items-center">
          <ILocalReact className="self-center w-12 h-12"></ILocalReact>
          <span className="text-base xl:text-lg">React.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNextjs className="self-center w-12 h-12"></ILocalNextjs>
          <span className="text-base xl:text-lg">NextJS.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNodejs className="self-center w-12 h-12"></ILocalNodejs>
          <span className="text-base xl:text-lg">Node.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalExpress className="self-center w-12 h-12"></ILocalExpress>
          <span className="text-base xl:text-lg dark:text-white">Express.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalNestjs className="self-center w-12 h-12"></ILocalNestjs>
          <span className="text-base xl:text-lg">NestJS.js</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalSocket className="self-center w-12 h-12"></ILocalSocket>
          <span className="text-base xl:text-lg text-[#010101] dark:text-white">Socket.io</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalPostgresql className="self-center w-12 h-12"></ILocalPostgresql>
          <span className="text-base xl:text-lg">PostgreSQL</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalMongodb className="self-center w-12 h-12"></ILocalMongodb>
          <span className="text-base xl:text-lg">MongoDB</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalSass className="self-center w-12 h-12"></ILocalSass>
          <span className="text-base xl:text-lg">Sass/Scss</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalTailwindcss className="self-center w-12 h-12"></ILocalTailwindcss>
          <span className="text-base xl:text-lg">TailwindCSS</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalFigma className="self-center w-12 h-12"></ILocalFigma>
          <span className="text-base xl:text-lg">Figma</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalCypress className="self-center w-12 h-12"></ILocalCypress>
          <span className="text-base text-black xl:text-lg dark:text-white">Cypress</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalStorybook className="self-center w-12 h-12"></ILocalStorybook>
          <span className="text-base xl:text-lg">Storybook</span>
        </div>

        <div className="flex flex-col items-center">
          <ILocalGithub className="self-center w-12 h-12"></ILocalGithub>
          <span className="text-base xl:text-lg">Github</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsDetails
