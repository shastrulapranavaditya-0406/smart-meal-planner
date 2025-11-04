"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function SidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Dashboard", icon: "📊" },
    { href: "/meal-plan", label: "Meal Plan", icon: "🍽️" },
    { href: "/grocery-list", label: "Grocery List", icon: "🛒" },
    { href: "/profile", label: "Profile", icon: "👤" },
    { href: "/settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border sticky top-0 h-screen">
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-primary">NutriGenie</h1>
        <p className="text-xs text-muted-foreground mt-1">Personalized nutrition</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="w-full">
            <Button
              variant={pathname === item.href ? "default" : "ghost"}
              className="w-full justify-start text-base gap-3"
            >
              <span className="text-xl">{item.icon}</span>
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">v1.0</p>
      </div>
    </aside>
  )
}
