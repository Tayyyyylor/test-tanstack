import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label={
        theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'
      }
    >
      <div
        className={`absolute left-1 transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md flex items-center justify-center">
          {theme === 'dark' ? (
            <Moon className="w-4 h-4 text-yellow-400" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </div>
      </div>
    </button>
  )
}
