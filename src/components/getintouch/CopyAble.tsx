import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { useClipboard } from '@reactuses/core'

interface CopyAbleProps {
  // Define your props here
  data: string
}

const CopyAble: React.FC<CopyAbleProps> = (props) => {
  const [copy, setCopy] = useClipboard()
  const [tooltip, setTooltip] = useState(false)
  const handleTooltip = () => {
    setTooltip(true)
    void setCopy(props.data)
    setTimeout(() => {
      setTooltip(false)
    }, 1000)
  }
  return (
    <TooltipProvider>
      <Tooltip open={tooltip}>
        <TooltipTrigger>
          <ILocalCopy
            className="w-6 h-6 cursor-pointer text-[#4B5563] dark:text-[#D1D5DB] hover:bg-[#b9b9bd] rounded-md "
            onClick={() => handleTooltip()}
          ></ILocalCopy>
          {/* Tooltip content */}
          {copy && (
            <TooltipContent
              className="text-sm rounded-md p-1 bg-[#596574] dark:bg-[#b5b8be] text-[#F9FAFB] dark:text-[#111827]"
              sideOffset={5}
            >
              <p>Copied!</p>
            </TooltipContent>
          )}
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  )
}

export default CopyAble
