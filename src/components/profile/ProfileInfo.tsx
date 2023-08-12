const ProfileInfo = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-3xl mx-auto xl:mx-0">
      <h2 className="text-4xl font-semibold text-eerie-black dark:text-light">Hi, I’m Sagar 👋</h2>
      <div className="mt-2 text-base text-eerie-black dark:text-light">
        {t('index.introduction')}
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
