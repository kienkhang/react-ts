import _once from 'lodash-es/once'

interface IOptions<T> {
  multiple?: boolean
  accept?: string
  reset?: boolean
  onChange: (f: File[]) => T
}

interface IHooksReturn {
  files: File[] | undefined
  open: () => void
  reset: () => void
}

function useFileUpload<T>(options: IOptions<T>): IHooksReturn {
  const [files, setFiles] = useState<File[]>()

  // const [fileInput, setFileInput] = useState<HTMLInputElement>()

  let fileInput: HTMLInputElement

  function createDialog() {
    if (document) {
      fileInput = document.createElement('input')
      if (fileInput) {
        fileInput.type = 'file'
        fileInput.accept = options.accept ?? '*'
        fileInput.multiple = options.multiple ?? false
        fileInput.onchange = (e: Event) => {
          const target = e.target as HTMLInputElement
          if (target.files) {
            setFiles([...target.files])
            options.onChange([...target.files])
          }
        }
      }
    }
  }

  function open() {
    _once(() => createDialog())()
    if (options.reset) {
      reset()
    }
    fileInput?.click()
  }

  function reset() {
    setFiles(undefined)
    if (fileInput) {
      fileInput.value = ''
    }
  }

  useEffect(() => {
    // Unmount -> remove file input
    return () => {
      if (fileInput) {
        fileInput.value = ''
        fileInput.remove()
      }
    }
  }, [])

  return {
    files,
    open,
    reset
  }
}

export default useFileUpload
