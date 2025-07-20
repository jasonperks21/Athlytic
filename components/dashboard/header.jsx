'use client';
import { Bell, Settings } from "lucide-react";
import { usePathname } from 'next/navigation';

const PATH_LABELS = {
  '/dashboard': 'Dashboard',
  '/dashboard/ai-insights': 'AI Insights',
  '/dashboard/metrics': 'Metrics',
  '/dashboard/connections': 'Connections',
  '/dashboard/settings': 'Settings',
};

/**
 * DashboardHeader component for the dashboard layout navbar.
 * @param {{ user: { name: string; email: string; avatar: string } }} props
 */
export function DashboardHeader({ user }) {
  const pathname = usePathname();
  const currentLabel = PATH_LABELS[pathname] || '';

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between h-12">
        <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium">
          <span className="text-gray-700 font-semibold">Athlytic</span>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-700">{currentLabel}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 