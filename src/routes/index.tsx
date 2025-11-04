import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('title')}</h1>
      <LocaleSwitcher />
    </>
  )
}
