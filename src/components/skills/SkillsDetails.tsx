const SkillsDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-3 xl:grid-cols-8 gap-x-2 xl:gap-x-8 gap-y-4 xl:gap-y-12">
        <div className="flex flex-col items-center gap-2">
          <ILocalJavascript className="self-center w-16 h-16 "></ILocalJavascript>
          <span className="text-base xl:text-lg">Javascript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ILocalTypescript className="self-center w-16 h-16"></ILocalTypescript>
          <span className="text-base xl:text-lg">Typescript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ILocalReact className="self-center w-16 h-16"></ILocalReact>
          <span className="text-base xl:text-lg">React.js</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalNextjs className="self-center w-16 h-16"></ILocalNextjs>
          <span className="text-base xl:text-lg">NextJS.js</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalNodejs className="self-center w-16 h-16"></ILocalNodejs>
          <span className="text-base xl:text-lg">Node.js</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalExpress className="self-center w-16 h-16"></ILocalExpress>
          <span className="text-base xl:text-lg dark:text-white">Express.js</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalNestjs className="self-center w-16 h-16"></ILocalNestjs>
          <span className="text-base xl:text-lg">NestJS.js</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalSocket className="self-center w-16 h-16"></ILocalSocket>
          <span className="text-base xl:text-lg text-[#010101] dark:text-white">Socket.io</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalPostgresql className="self-center w-16 h-16"></ILocalPostgresql>
          <span className="text-base xl:text-lg">PostgreSQL</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalMongodb className="self-center w-16 h-16"></ILocalMongodb>
          <span className="text-base xl:text-lg">MongoDB</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalSass className="self-center w-16 h-16"></ILocalSass>
          <span className="text-base xl:text-lg">Sass/Scss</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalTailwindcss className="self-center w-16 h-16"></ILocalTailwindcss>
          <span className="text-base xl:text-lg">TailwindCSS</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalFigma className="self-center w-16 h-16"></ILocalFigma>
          <span className="text-base xl:text-lg">Figma</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalCypress className="self-center w-16 h-16"></ILocalCypress>
          <span className="text-base text-black xl:text-lg dark:text-white">Cypress</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalStorybook className="self-center w-16 h-16"></ILocalStorybook>
          <span className="text-base xl:text-lg">Storybook</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <ILocalGithub className="self-center w-16 h-16"></ILocalGithub>
          <span className="text-base xl:text-lg">Github</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsDetails
