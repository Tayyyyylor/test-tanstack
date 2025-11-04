import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
]

export const LocaleSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleLocaleChange = (locale: string) => {
    i18n.changeLanguage(locale)
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const currentLocale =
    locales.find((locale) => locale.code === i18n.language) || locales[0]

  return (
    <div className="relative inline-block" onClick={handleClick}>
      <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
        <span className="font-medium">{currentLocale.label}</span>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-full">
          {locales.map((locale) => (
            <li key={locale.code}>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors first:rounded-t-md last:rounded-b-md"
                onClick={() => handleLocaleChange(locale.code)}
              >
                {locale.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
