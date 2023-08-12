function useLanguage() {
  const { i18n } = useTranslation()
  // reactive theme in localstorage

  function changeToVn() {
    i18n.changeLanguage('vi')
  }
  function changeToEn() {
    i18n.changeLanguage('en')
  }

  return {
    language: i18n.language,
    changeToEn,
    changeToVn
  }
}

export default useLanguage
