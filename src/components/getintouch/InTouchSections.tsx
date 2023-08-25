import { useClipboard } from '@reactuses/core'
import CopyAble from '../shared/CopyAble'

const InTouchSections = () => {
  const emailAddress = 'reachsagarshah@gmail.com'
  const phoneNumber = '+91 8980500565'
  const [tooltipEmail, setTooltipEmail] = useState(false)
  const [tooltipPhone, setTooltipPhone] = useState(false)
  const [copy, setCopy] = useClipboard()

  const handleCopyEmail = (props: { data: string }) => {
    void setCopy(props.data)
    setTooltipEmail(true)
    setTimeout(() => {
      setTooltipEmail(false)
    }, 1000)
  }

  const handleCopyPhone = (props: { data: string }) => {
    void setCopy(props.data)
    setTooltipPhone(true)
    setTimeout(() => {
      setTooltipPhone(false)
    }, 1000)
  }
  return (
    <div className="px-4 xl:px-20 py-16 xl:py-[96px] items-stretch">
      <div className="flex flex-col items-center xl:px-8">
        <div className="rounded-xl text-sm text-[#4B5563] dark:text-[#D1D5DB] bg-[#E5E7EB] dark:bg-[#374151] w-fit px-5 py-1 mb-4">
          <h1 className="mx-auto text-center">Get in touch</h1>
        </div>
        <h2 className="w-full text-center text-[#4B5563] dark:text-[#D1D5DB] self-center text-xl mb-6 leading-7 xl:max-w-xl">
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query,
          or simply want to connect.
        </h2>

        <div className="w-full text-center text-[#4B5563] self-center text-xl mb-6">
          <div className="flex justify-center items-center gap-4">
            <ILocalMail className="w-6 h-6 dark:text-[#D1D5DB]"></ILocalMail>
            <h2 className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-lg">
              {emailAddress}
            </h2>
            <CopyAble tooltip={tooltipEmail} copy={copy}>
              <ILocalCopy
                className="w-6 h-6 cursor-pointer text-[#4B5563] dark:text-[#D1D5DB] hover:bg-[#b9b9bd] rounded-md"
                onClick={() => handleCopyEmail({ data: emailAddress })}
              ></ILocalCopy>
            </CopyAble>
          </div>
          <div className="flex justify-center items-center gap-4">
            <ILocalPhone className="w-6 h-6 dark:text-[#D1D5DB]"></ILocalPhone>
            <h2 id="phone" className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-lg">
              {phoneNumber}
            </h2>
            <CopyAble tooltip={tooltipPhone} copy={copy}>
              <ILocalCopy
                className="w-6 h-6 cursor-pointer text-[#4B5563] dark:text-[#D1D5DB] hover:bg-[#b9b9bd] rounded-md"
                onClick={() => handleCopyPhone({ data: phoneNumber })}
              ></ILocalCopy>
            </CopyAble>
          </div>
        </div>
        <div className="w-full text-center text-[#4B5563] dark:text-[#D1D5DB] self-center text-base mb-2">
          You may also find me on these platforms!
        </div>
        <div>
          <div className="flex items-center gap-4 text-[#4B5563] dark:text-[#D1D5DB]">
            <ILocalGithub className="w-6 h-6"></ILocalGithub>
            <ILocalTwitter className="w-6 h-6"></ILocalTwitter>
            <ILocalFigma className="w-6 h-6"></ILocalFigma>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InTouchSections
