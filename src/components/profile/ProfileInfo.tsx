const ProfileInfo = () => {
  return (
    <div className="max-w-3xl mx-auto xl:mx-0">
      <h2 className="text-4xl font-semibold text-eerie-black dark:text-light">Hi, I’m Sagar 👋</h2>
      <div className="mt-2 text-base text-eerie-black dark:text-light">
        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally
        designing) exceptional digital experiences that are fast, accessible, visually appealing,
        and responsive. Even though I have been creating web applications for over 7 years, I still
        love it as if it was something new.
      </div>
      <div className="mt-12">
        <div className="flex items-center gap-2">
          <ILocalLocation className="w-6 h-6"></ILocalLocation>
          <span className="text-base text-eerie-black dark:text-light">Ahmedabad, India</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <ILocalLocation className="w-6 h-6"></ILocalLocation>
          <span className="text-base text-eerie-black dark:text-light">
            Available for new projects
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-12">
        <ILocalGithub className="w-6 h-6"></ILocalGithub>
        <ILocalTwitter className="w-6 h-6"></ILocalTwitter>
        <ILocalFigma className="w-6 h-6"></ILocalFigma>
      </div>
    </div>
  )
}

export default ProfileInfo
