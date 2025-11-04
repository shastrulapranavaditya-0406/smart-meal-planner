"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onReset?: () => void
  showReset?: boolean
}

export default function Header({ onReset, showReset }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDarkMode ? "light" : "dark")
  }

  return (
    <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-6 flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-primary">NutriGenie</h1>
          <p className="mt-1 text-sm text-muted-foreground">Personalized nutrition management for your health goals</p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-muted transition-colors text-xl">
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {showReset && onReset && (
            <Button onClick={onReset} variant="outline" className="border border-border hover:bg-muted bg-transparent">
              Start Over
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
