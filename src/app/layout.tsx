import '@/src/styles/app.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import ThemeSwitch from '@/src/components/ThemeSwitch'
import LanguageSwitch from '@/src/components/LanguageSwitch'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header>
              <nav className="container">
                <Link href="/" className="text-2xl font-bold">My Portfolio</Link>
                <div className="flex items-center space-x-4">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/todo">Todo</Link>
                  <LanguageSwitch />
                  <ThemeSwitch />
                </div>
              </nav>
            </header>
            <main className="flex-grow container py-8">{children}</main>
            <footer>
              <div className="container">
                © {new Date().getFullYear()} My Portfolio
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
