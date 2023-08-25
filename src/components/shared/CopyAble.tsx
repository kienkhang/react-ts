import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
interface CopyAbleProps {
  // Define your props here
  children: React.ReactNode
  copy: string
  tooltip: boolean
}

const CopyAble: React.FC<CopyAbleProps> = (props) => {
  return (
    <TooltipProvider>
      <Tooltip open={props.tooltip}>
        <TooltipTrigger>
          {props.children}

          {/* Tooltip content */}
          {props.copy && (
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
