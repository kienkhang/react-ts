import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const SwitchLocales = () => {
  // Global language
  const { language, changeToEn, changeToVn } = useLanguage()

  const isVn = useMemo(() => {
    return language === 'vi'
  }, [language])

  const isEn = useMemo(() => {
    return language === 'en'
  }, [language])

  // Translation
  const { t } = useTranslation()

  // Handler open and off popover
  const [show, setShow] = useState(false)

  function selectVn() {
    changeToVn()
    setShow(false)
  }
  function selectEn() {
    changeToEn()
    setShow(false)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="p-1.5 transition-all cursor-pointer" onClick={() => setShow(true)}>
          {isVn && <ILocalVnFlags className="w-6 h-6 rounded-full shrink-0"></ILocalVnFlags>}
          {isEn && <ILocalUkFlags className="w-6 h-6 rounded-full shrink-0"></ILocalUkFlags>}
        </div>
      </PopoverTrigger>
      {show && (
        <PopoverContent className="p-0 overflow-hidden rounded-lg shadow-md w-max">
          {/* Viet Nam */}
          <div
            className="p-3 transition-all cursor-pointer select-none hover:bg-gray-200"
            onClick={selectVn}
          >
            <div className="flex items-center gap-2">
              <ILocalVnFlags className="w-5 h-5 rounded-full shrink-0"></ILocalVnFlags>
              <span className="text-base font-medium">{t('language.vi')}</span>
            </div>
          </div>
          {/* English */}
          <div
            className="p-3 transition-all cursor-pointer select-none hover:bg-gray-200"
            onClick={selectEn}
          >
            <div className="flex items-center gap-2">
              <ILocalUkFlags className="w-5 h-5 rounded-full shrink-0"></ILocalUkFlags>
              <span className="text-base font-medium">{t('language.en')}</span>
            </div>
          </div>
        </PopoverContent>
      )}
    </Popover>
  )
}

export default SwitchLocales
