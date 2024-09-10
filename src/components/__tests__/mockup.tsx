import { Moon, Sun } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-gray-100 dark:bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-2xl font-bold">My Portfolio</a>
          <div className="flex items-center space-x-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Todo</a>
            <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <Sun className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="prose dark:prose-invert mx-auto">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a sample portfolio app built with Next.js, featuring a blog and todo list.</p>
        </div>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          © 2023 My Portfolio
        </div>
      </footer>
    </div>
  )
}