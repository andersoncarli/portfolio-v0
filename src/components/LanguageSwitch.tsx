'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function LanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    router.push(pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`))
  }

  return (
    <select onChange={changeLanguage} className="language-switch">
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}
