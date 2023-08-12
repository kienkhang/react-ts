import { useDisclosure } from '@chakra-ui/react'
import SharedDrawer from './shared/SharedDrawer'
import SharedSwitchTheme from './shared/SharedSwitchTheme'

const TheHeader = () => {
  const { isOpen: visible, onOpen: open, onClose: close } = useDisclosure()

  return (
    <div className="p-4 shadow-md xl:px-20">
      <div className="flex items-center justify-between">
        <ILocalLogo className="w-6 h-6"></ILocalLogo>
        <div className="drawer xl:hidden">
          <IMdiMenu className="w-6 h-6 cursor-pointer" onClick={() => open()}></IMdiMenu>
          <SharedDrawer visible={visible} close={close}></SharedDrawer>
        </div>
        <div className="hidden xl:block">
          <ul className="flex space-x-6">
            <li>
              <Link to="/about" className="text-[##4B5563] hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="text-[##4B5563] hover:underline">
                Work
              </Link>
            </li>
            <li>
              <Link to="/terminals" className="text-[##4B5563] hover:underline">
                Terminals
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[##4B5563] hover:underline mr-6">
                Contact
              </Link>
            </li>
            <li>
              {/* Switch Theme */}
              <SharedSwitchTheme></SharedSwitchTheme>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TheHeader
