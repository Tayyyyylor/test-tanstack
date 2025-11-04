import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { ThemeToggle } from '@/components/ThemeToggle'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
