import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col p-4">
        <div className="flex items-center mb-8">
          <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-2">A</span>
          <span className="text-xl font-bold text-indigo-700">Athlytic</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-indigo-50 font-medium text-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/ai-insights" className="block px-3 py-2 rounded hover:bg-indigo-50 font-medium text-gray-700">
                AI Insights
              </Link>
            </li>
            <li>
              <Link href="/dashboard/metrics" className="block px-3 py-2 rounded hover:bg-indigo-50 font-medium text-gray-700">
                Metrics
              </Link>
            </li>
            <li>
              <Link href="/dashboard/connections" className="block px-3 py-2 rounded hover:bg-indigo-50 font-medium text-gray-700">
                Connections
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="block px-3 py-2 rounded hover:bg-indigo-50 font-medium text-gray-700">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white border-b px-8 py-4">
          <div className="text-lg font-semibold text-gray-800">Dashboard</div>
          <div className="flex items-center space-x-4">
            <button className="relative focus:outline-none">
              <span className="sr-only">Notifications</span>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-gray-800 text-sm">Alex Johnson</span>
                <span className="text-xs text-gray-400">alex@example.com</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
} 