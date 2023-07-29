import useThemeStore from '@/hooks/useTheme'

const SharedSwitchTheme = () => {
  const { localTheme: theme, selectDark, selectLight, selectSystem } = useThemeStore()

  return (
    <div className="flex items-center gap-3">
      <ILocalMoon
        className={`w-6 h-6 cursor-pointer select-none ${
          theme === 'dark' ? 'text-yellow-500' : ''
        }`}
        onClick={selectDark}
      />
      <ILocalSun
        className={`w-6 h-6 cursor-pointer select-none ${
          theme === 'light' ? 'text-orange-500' : ''
        }`}
        onClick={selectLight}
      />
      <IMdiMonitor
        className={`w-6 h-6 cursor-pointer select-none ${
          theme === 'system' ? 'text-blue-500' : ''
        }`}
        onClick={selectSystem}
      />
    </div>
  )
}

export default SharedSwitchTheme
