import { useLocalStorage, usePreferredDark } from '@reactuses/core'
import { atom, useRecoilState } from 'recoil'

const themeAtom = atom({
  key: 'useTheme__theme',
  default: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
})

function useTheme() {
  const [theme, setTheme] = useRecoilState(themeAtom)

  const [localTheme, setLocalTheme] = useLocalStorage('theme', 'system')

  const isOSDark = usePreferredDark()

  function onWindowMatches() {
    // If theme is 'dark' or (theme is 'system' and isOSDark) -> add dark
    if (localStorage.theme === 'dark' || (localStorage.theme === 'system' && isOSDark)) {
      // Chạy đi đâu

      document.documentElement.classList.add('dark')
    } else {
      // console.log('Từ Dark sang System')
      document.documentElement.classList.remove('dark')
    }
  }

  function selectDark() {
    setTheme('dark')
    setLocalTheme('dark')
    document.documentElement.classList.add('dark')
  }
  function selectLight() {
    setTheme('light')
    setLocalTheme('light')
    // Remove "dark" in html class
    document.documentElement.classList.remove('dark')
  }
  function selectSystem() {
    setTheme('system')
    // remove "theme" in localstorage
    setLocalTheme('system')
    // set theme with window matches
    onWindowMatches()
  }

  // Listen OS change dark query
  useEffect(() => {
    onWindowMatches()
  }, [isOSDark])

  // Mounted -> using theme in localstorage
  // Mounted -> init Window Matches
  useEffect(() => {
    switch (theme) {
      case 'light':
        selectLight()
        break
      case 'dark':
        selectDark()
        break
      case 'system':
        selectSystem()
        break
      default:
        selectSystem()
        break
    }

    onWindowMatches()
  }, [])

  return {
    theme,
    localTheme,
    selectDark,
    selectLight,
    selectSystem,
    onWindowMatches
  }
}

export default useTheme
