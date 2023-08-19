import { useClipboard } from '@reactuses/core'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const InTouchSections = () => {
  const [copy, setCopy] = useClipboard()
  const emailAddress = 'reachsagarshah@gmail.com'
  const phoneNumber = '+91 8980500565'

  const handleTooltipOpen = () => {
    // setOpen(true)
    setTimeout(() => {
      // setOpen(false)
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
            <ILocalMail className="w-6 h-6 dark:text-[##D1D5DB]"></ILocalMail>
            <h2 className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-lg">
              {emailAddress}
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ILocalCopy
                    className="w-6 h-6 cursor-pointer dark:text-[#D1D5DB]"
                    onClick={() => setCopy(emailAddress)}
                  ></ILocalCopy>
                  {/* Nội dung tooltip */}
                  {copy && (
                    <TooltipContent className="bg-[#4B5563] dark:bg-[#D1D5DB] text-[#F9FAFB] dark:text-[#111827]">
                      <p>Copied!</p>
                    </TooltipContent>
                  )}
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex justify-center items-center gap-4">
            <ILocalPhone className="w-6 h-6 dark:text-[#D1D5DB]"></ILocalPhone>
            <h2 id="phone" className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-lg">
              {phoneNumber}
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <ILocalCopy
                    className="w-6 h-6 cursor-pointer dark:text-[#D1D5DB]"
                    onClick={() => setCopy(phoneNumber)}
                  ></ILocalCopy>
                  {/* Nội dung tooltip */}
                  {copy && (
                    <TooltipContent className="bg-[#4B5563] dark:bg-[#D1D5DB] text-[#F9FAFB] dark:text-[#111827]">
                      <p>Copied!</p>
                    </TooltipContent>
                  )}
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
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
