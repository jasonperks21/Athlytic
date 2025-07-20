'use client';
import { House, Activity, Zap, Settings, Link as LinkIcon, Brain } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * DashboardSidebar component for the dashboard layout sidebar navigation.
 * Highlights the active tab based on the current route.
 */
export function DashboardSidebar() {
  const pathname = usePathname();
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: House, href: '/dashboard' },
    { id: 'insights', label: 'AI Insights', icon: Brain, href: '/dashboard/ai-insights' },
    { id: 'metrics', label: 'Metrics', icon: Activity, href: '/dashboard/metrics' },
    { id: 'connections', label: 'Connections', icon: LinkIcon, href: '/dashboard/connections' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="px-4 pt-8 pb-4">
        <Link href="/dashboard" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">Athlytic</span>
        </Link>
      </div>
      <nav className="mt-4 px-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Check if the current route matches the menu item's href
            const isActive = pathname === item.href;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
} 