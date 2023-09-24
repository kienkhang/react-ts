import UploadSection from '@/components/shared/UploadSection'
import { ChangeEvent } from 'react'

const UploadPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const openFile = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const files = (e.target as HTMLInputElement).files
    console.log('😃😦😧 ~ onChange ~ files:', files)
  }

  return (
    <div className="max-w-3xl px-4 py-16 mx-auto">
      <UploadSection></UploadSection>
      <div className="mt-2">
        <input type="file" className="hidden" ref={inputRef} onChange={onChange} />
      </div>
      <button className="p-3 border rounded-lg upload" onClick={openFile}>
        Upload
      </button>
    </div>
  )
}

export default UploadPage
