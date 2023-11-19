import animationData from '@/assets/lotties/khunglong.json'
import Lottie from 'react-lottie'

import axios from 'axios'

const UploadSection = () => {
  const [isDragArea, setDragArea] = useState(false)

  const [fileArray, setFileArray] = useState<File[]>([])

  function doChange(file: File[]) {
    // console.log('😃😦😧 ~ doChange ~ file:', file)
    // Xử lý
    setFileArray(file)
    console.log('FILE', fileArray)
    console.log('FILE[0]', fileArray[0])
  }

  async function uploadImageKit() {
    // Get Signature
    const res = await axios.get('http://localhost:4628/api/files/request-signature')
    console.log('😃😦😧 ~ uploadImageKit ~ res:', res.data)
    const { expire, signature, token } = res.data.data

    const uploadRes = await axios.post(
      'https://upload.imagekit.io/api/v1/files/upload',
      {
        file: fileArray[0],
        publicKey: 'public_7xtsbHPscCv/UMjW3mcLWkzKPnk=',
        signature,
        expire,
        token,
        fileName: 'im faker'
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    console.log('😃😦😧 ~ uploadImageKit ~ uploadRes:', uploadRes)
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
          isDragArea ? 'border-green-600' : 'border-black dark:border-gray-400'
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
      <button className="p-3 border rounded-lg upload" onClick={() => uploadImageKit()}>
        Call upload
      </button>
    </div>
  )
}

export default UploadSection
