import { useDisclosure } from '@chakra-ui/react'
import SharedDrawer from './shared/SharedDrawer'

const TheHeader = () => {
  const { isOpen: visible, onOpen: open, onClose: close } = useDisclosure()

  return (
    <div className="px-4 py-4 shadow-md xl:px-20">
      <div className="flex items-center justify-between">
        <ILocalLogo className="w-6 h-6"></ILocalLogo>
        <div className="drawer">
          <IMdiMenu className="w-6 h-6 cursor-pointer" onClick={() => open()}></IMdiMenu>
          <SharedDrawer visible={visible} close={close}></SharedDrawer>
        </div>
      </div>
    </div>
  )
}

export default TheHeader
