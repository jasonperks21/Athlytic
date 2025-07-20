"use client"
import { Button } from "@/components/ui/button"

/**
 * Button that navigates to /dashboard on click. Use in Server Components for navigation.
 * @param {React.ComponentProps<typeof Button>} props
 */
export function GoToDashboardButton({ children, ...props }) {
  return (
    <Button
      {...props}
      onClick={() => { window.location.href = "/dashboard"; }}
    >
      {children}
    </Button>
  )
} 