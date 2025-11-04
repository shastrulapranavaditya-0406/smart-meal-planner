"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { OnboardingForm } from "@/components/onboarding-form"
import MealPlanner from "@/components/meal-planner"
import Link from "next/link"

export default function MealPlansPage() {
  const [userProfile, setUserProfile] = useState(null)
  const [showPlanner, setShowPlanner] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile")
    if (savedProfile) {
      setUserProfile(JSON.parse(savedProfile))
      setShowPlanner(true)
    }
    setIsLoading(false)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDarkMode ? "light" : "dark")
  }

  const handleProfileComplete = (profile) => {
    localStorage.setItem("userProfile", JSON.stringify(profile))
    setUserProfile(profile)
    setShowPlanner(true)
  }

  const handleResetProfile = () => {
    localStorage.removeItem("userProfile")
    setUserProfile(null)
    setShowPlanner(false)
  }

  if (isLoading) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-6 flex justify-between items-center gap-4">
          <div className="flex-1">
            <Link href="/" className="hover:text-primary transition-colors">
              <h1 className="text-3xl font-bold text-primary">NutriGenie</h1>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Personalized nutrition management for your health goals
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-muted transition-colors text-xl">
              {isDarkMode ? "☀️" : "🌙"}
            </button>

            {showPlanner && (
              <Button
                onClick={handleResetProfile}
                variant="outline"
                className="border border-border hover:bg-muted bg-transparent"
              >
                Start Over
              </Button>
            )}

            <Link href="/">
              <Button variant="outline" className="border border-border hover:bg-muted bg-transparent">
                Back Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {!showPlanner ? <OnboardingForm onComplete={handleProfileComplete} /> : <MealPlanner profile={userProfile} />}
    </main>
  )
}
