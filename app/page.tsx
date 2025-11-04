"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Home() {
  const [userName, setUserName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedName = localStorage.getItem("tempUserName")
    if (savedName) {
      setUserName(savedName)
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", isDarkMode ? "light" : "dark")
  }

  const handleStartClick = () => {
    if (userName.trim()) {
      localStorage.setItem("tempUserName", userName)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
        <div className="text-center space-y-8 animate-in fade-in duration-500">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">NutriGenie</h1>
            <p className="text-xl text-muted-foreground">
              Welcome, <span className="font-semibold text-foreground">{userName}</span>!
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-foreground max-w-md mx-auto">
              Your personalized nutrition management system is ready. Let's create your custom meal plans based on your
              health goals.
            </p>

            <Link href="/meal-plans">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                Get Started with Your Meal Plans
              </Button>
            </Link>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setUserName("")
                setIsSubmitted(false)
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Use Different Name
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">NutriGenie</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-muted transition-colors text-xl">
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Hero Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Your Personal Nutrition Guide</h2>
              <p className="text-xl text-muted-foreground">
                Create customized meal plans that align with your health goals, dietary preferences, and lifestyle.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3 items-start">
                <div className="text-2xl text-primary">✓</div>
                <div>
                  <h3 className="font-semibold text-foreground">Personalized Plans</h3>
                  <p className="text-sm text-muted-foreground">Plans tailored to your age, weight, and fitness goals</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="text-2xl text-primary">✓</div>
                <div>
                  <h3 className="font-semibold text-foreground">Smart Meal Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Meals that respect your dietary preferences and restrictions
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="text-2xl text-primary">✓</div>
                <div>
                  <h3 className="font-semibold text-foreground">Grocery Lists</h3>
                  <p className="text-sm text-muted-foreground">Auto-generated shopping lists organized by category</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="text-2xl text-primary">✓</div>
                <div>
                  <h3 className="font-semibold text-foreground">Nutrition Analytics</h3>
                  <p className="text-sm text-muted-foreground">Track calories, macros, and nutritional balance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl">Welcome Back</CardTitle>
            </CardHeader>
            <CardContent className="pt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleStartClick()}
                  placeholder="Enter your name"
                  className="text-base py-2"
                />
              </div>

              <Button
                onClick={handleStartClick}
                disabled={!userName.trim()}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-2"
                size="lg"
              >
                Continue
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Start your personalized nutrition journey</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="text-4xl">📋</div>
              <h4 className="font-semibold text-foreground">Create Profile</h4>
              <p className="text-sm text-muted-foreground">Share your health info and goals</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🍽️</div>
              <h4 className="font-semibold text-foreground">Get Plans</h4>
              <p className="text-sm text-muted-foreground">Receive customized meal plans</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🔄</div>
              <h4 className="font-semibold text-foreground">Swap & Customize</h4>
              <p className="text-sm text-muted-foreground">Swap meals to your preference</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🛒</div>
              <h4 className="font-semibold text-foreground">Shop & Cook</h4>
              <p className="text-sm text-muted-foreground">Download your grocery list</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
