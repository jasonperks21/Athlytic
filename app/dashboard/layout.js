import Link from 'next/link'
import { Bell, Settings } from "lucide-react";
import { DashboardHeader } from '../../components/dashboard/header';
import { DashboardSidebar } from '../../components/dashboard/sidebar';

const mockUser = {
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader user={mockUser} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
} 