import animationData from '@/assets/lotties/upload-lotties.json'
import Lottie from 'react-lottie'

const UploadSection = () => {
  const [isDragArea, setDragArea] = useState(false)

  function doChange(file: File[]) {
    console.log('😃😦😧 ~ doChange ~ file:', file)
  }

  const { open } = useFileUpload({
    onChange: doChange
  })

  function doDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragArea(true)
  }
  function doDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragArea(false)
  }
  function doDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    setDragArea(true)
  }
  function doDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    // Get data transfer
    const draggedData = e.dataTransfer
    // Get files: FileList from data transfer
    const files = draggedData.files
    doChange([...files])
    setDragArea(false)
  }

  return (
    <div>
      <div
        className={`relative border-2 border-dashed border-gray-800 rounded-2xl min-h-[300px] min-w-[320px] cursor-pointer transition-all ${
          isDragArea ? 'border-green-600' : 'border-black'
        }`}
        onDragEnter={doDragEnter}
        onDragLeave={doDragLeave}
        onDragOver={doDragOver}
        onDrop={doDrop}
        onClick={open}
      >
        <div className="absolute -translate-x-1/2 -z-10 left-1/2">
          <Lottie
            options={{
              animationData,
              autoplay: true,
              loop: true,
              rendererSettings: {
                hideOnTransparent: true,
                clearCanvas: true
              }
            }}
            width={300}
            height={300}
            isClickToPauseDisabled={true}
            isStopped={false}
            isPaused={false}
            speed={1.5}
            ariaRole="img"
          />
        </div>
      </div>
    </div>
  )
}

export default UploadSection
