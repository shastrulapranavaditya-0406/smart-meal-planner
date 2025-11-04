"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import MealCard from "@/components/meal-card"
import GroceryList from "@/components/grocery-list"
import Dashboard from "@/components/dashboard"
import { generateMealPlan, calculateDailyCalories, MEAL_DATABASE } from "@/lib/meal-engine"

interface Meal {
  id: string
  name: string
  calories: number
  protein: number
  carbs: number
  fat: number
  ingredients: string[]
  category: "breakfast" | "lunch" | "dinner" | "snack"
  prepTime?: number
  difficulty?: "easy" | "medium" | "hard"
  dietary?: string[]
}

interface MealPlannerProps {
  profile: any
}

export default function MealPlanner({ profile }: MealPlannerProps) {
  const [mealPlan, setMealPlan] = useState([])
  const [showGroceryList, setShowGroceryList] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [dailyCalories, setDailyCalories] = useState(2000)

  useEffect(() => {
    const calories = calculateDailyCalories(profile)
    setDailyCalories(calories)

    const plan = generateMealPlan(profile)
    setMealPlan(plan)
  }, [profile])

  const handleSwapMeal = (mealIndex: number) => {
    const currentMeal = mealPlan[mealIndex]

    let sameCategoryMeals = MEAL_DATABASE.filter((m) => m.category === currentMeal.category && m.id !== currentMeal.id)

    // Respect dietary preferences when swapping
    if (profile.dietaryPreferences && profile.dietaryPreferences.length > 0) {
      sameCategoryMeals = sameCategoryMeals.filter((meal) =>
        profile.dietaryPreferences.some((pref) => meal.dietary?.includes(pref)),
      )
    }

    if (sameCategoryMeals.length > 0) {
      const newMeal = sameCategoryMeals[Math.floor(Math.random() * sameCategoryMeals.length)]
      const newPlan = [...mealPlan]
      newPlan[mealIndex] = newMeal
      setMealPlan(newPlan)
    }
  }

  const totalCalories = mealPlan.reduce((sum, meal) => sum + meal.calories, 0)
  const totalProtein = mealPlan.reduce((sum, meal) => sum + meal.protein, 0)

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-primary">Your Daily Meal Plan</h2>
          <p className="text-sm text-muted-foreground">
            Target: {dailyCalories} cal/day | Current: {totalCalories} cal | Protein: {totalProtein}g
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            onClick={() => {
              setShowDashboard(false)
              setShowGroceryList(false)
            }}
            variant={!showDashboard && !showGroceryList ? "default" : "outline"}
            className="border border-border"
          >
            Meals
          </Button>
          <Button
            onClick={() => {
              setShowDashboard(false)
              setShowGroceryList(true)
            }}
            variant={showGroceryList ? "default" : "outline"}
            className="border border-border"
          >
            Grocery List
          </Button>
          <Button
            onClick={() => {
              setShowDashboard(true)
              setShowGroceryList(false)
            }}
            variant={showDashboard ? "default" : "outline"}
            className="border border-border"
          >
            Dashboard
          </Button>
        </div>
      </div>

      {showDashboard ? (
        <Dashboard
          profile={profile}
          mealPlan={mealPlan}
          dailyCalories={dailyCalories}
          totalCalories={totalCalories}
          totalProtein={totalProtein}
        />
      ) : showGroceryList ? (
        <GroceryList meals={mealPlan} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {mealPlan.map((meal, index) => (
            <MealCard key={meal.id} meal={meal} onSwap={() => handleSwapMeal(index)} />
          ))}
        </div>
      )}
    </div>
  )
}
