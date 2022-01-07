import Link from 'next/link'
import { useRouter } from 'next/router'
import LocaleSwitcher from '../../../src/components/locale-switcher'
import { en } from '../../../locales/en';
import { ja } from '../../../locales/ja';

export default function IndexPage(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  const t = router.locale === 'en' ? en : ja;

  return (
    <div>
      <h1>{t.title}</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

    </div>
  )
}