import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import SharedSwitchTheme from './SharedSwitchTheme'

interface IProps {
  visible: boolean
  close: () => void
}

const SharedDrawer = ({ close, visible }: IProps) => {
  return (
    <Drawer isOpen={visible} placement="right" onClose={close} size={'xs'}>
      <DrawerOverlay className="bg-black/30" />
      <DrawerContent className="relative max-w-[320px] p-4 bg-white dark:bg-[#222]">
        <DrawerCloseButton className="absolute w-6 h-6 top-4 right-4" />

        <DrawerBody className="mt-8">
          {/* Navbar */}
          <ul className="flex flex-col gap-4 pb-4 border-b border-gray-300">
            <Link className="font-medium text-gray-600 dark:text-white" to="/">
              About
            </Link>
            <Link className="font-medium text-gray-600 dark:text-white" to="/">
              Work
            </Link>
            <Link className="font-medium text-gray-600 dark:text-white" to="/login">
              Login
            </Link>
            <Link className="font-medium text-gray-600 dark:text-white" to="/">
              Contact
            </Link>
          </ul>
          {/* Switch Theme */}
          <div className="flex items-center justify-between mt-4">
            <span className="font-semibold text-gray-600 dark:text-white">Switch Theme</span>
            <SharedSwitchTheme></SharedSwitchTheme>
          </div>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default SharedDrawer
