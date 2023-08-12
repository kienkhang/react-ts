import { useDisclosure } from '@chakra-ui/react'
import SharedDrawer from './shared/SharedDrawer'
import useTheme from '@/hooks/useTheme'
const TheHeader = () => {
  const { localTheme: theme, selectDark, selectLight } = useTheme({})
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
            <li className="flex justify-center items-center">
              <Link to="/about" className=" text-[##4B5563] hover:underline">
                About
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/work" className="text-[##4B5563] hover:underline">
                Work
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/terminals" className="text-[##4B5563] hover:underline">
                Testimonials
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link to="/contact" className="text-[##4B5563] hover:underline mr-6">
                Contact
              </Link>
            </li>
            <div className="w-[1px] h-6 bg-[#F3F4F6] dark:bg-[#1F2937] self-center"></div>
            <li className="flex justify-center items-center">
              <div className="flex dark:hidden justify-center p-[6px]">
                <ILocalSun
                  className={`h-6 w-6 cursor-pointer select-none ${
                    theme === 'light' ? 'text-orange-500' : ''
                  }`}
                  onClick={selectDark}
                />
              </div>
              <div className="hidden dark:flex justify-center p-[6px]">
                <ILocalMoon
                  className={`w-6 h-6 hidden dark:inline-block cursor-pointer select-none ${
                    theme === 'dark' ? 'text-yellow-500' : ''
                  }`}
                  onClick={selectLight}
                />
              </div>
            </li>
            <button className="bg-[#111827] dark:bg-[#F9FAFB] text-[#F9FAFB] dark:text-[#111827] rounded-xl py-[6px] px-4">
              <h1 className="w-[104px] h-6 flex items-center justify-center">Download CV</h1>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TheHeader
