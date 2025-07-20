"use client"
import { Button } from "@/components/ui/button"

/**
 * Button that navigates to /dashboard on click. Use in Server Components for navigation.
 * @param {React.ComponentProps<typeof Button>} props
 */
export function GoToDashboardButton({ children, className = '', ...props }) {
  return (
    <Button
      {...props}
      className={`bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 ${className}`}
      onClick={() => { window.location.href = "/dashboard"; }}
    >
      {children}
    </Button>
  )
} 