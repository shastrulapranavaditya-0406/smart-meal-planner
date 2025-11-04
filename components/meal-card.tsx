"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MealCardProps {
  meal: {
    id: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: string[]
    category: string
    prepTime?: number
    difficulty?: string
    dietary?: string[]
  }
  onSwap: () => void
}

export default function MealCard({ meal, onSwap }: MealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const categoryIcons = {
    breakfast: "🌅",
    lunch: "🍽️",
    dinner: "🍽️",
    snack: "🥤",
  }

  const categoryLabels = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    snack: "Snack",
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500/10 text-green-700 border-green-500/30"
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/30"
      case "hard":
        return "bg-red-500/10 text-red-700 border-red-500/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="overflow-hidden border-border bg-card hover:shadow-md transition-shadow">
      <div className="border-b border-border bg-secondary/30 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground flex-1">
            <span className="text-xl">{categoryIcons[meal.category]}</span>
            <span className="truncate">{categoryLabels[meal.category] || meal.category}</span>
          </h3>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`text-xl transition-transform ${isFavorite ? "scale-125" : "hover:scale-110"}`}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
          <span className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground whitespace-nowrap">
            {meal.calories} cal
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-foreground truncate">{meal.name}</p>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-secondary/20 p-2 text-center">
            <p className="text-xs text-muted-foreground">Protein</p>
            <p className="font-bold text-foreground">{meal.protein}g</p>
          </div>
          <div className="rounded-lg bg-secondary/20 p-2 text-center">
            <p className="text-xs text-muted-foreground">Carbs</p>
            <p className="font-bold text-foreground">{meal.carbs}g</p>
          </div>
          <div className="rounded-lg bg-secondary/20 p-2 text-center">
            <p className="text-xs text-muted-foreground">Fat</p>
            <p className="font-bold text-foreground">{meal.fat}g</p>
          </div>
        </div>

        {meal.prepTime && (
          <div className="mb-3 p-2 rounded-lg bg-secondary/10 text-sm text-muted-foreground flex justify-between items-center">
            <div>
              <span>Prep: {meal.prepTime} min</span>
              {meal.difficulty && (
                <span className={`ml-2 px-2 py-0.5 rounded text-xs border ${getDifficultyColor(meal.difficulty)}`}>
                  {meal.difficulty}
                </span>
              )}
            </div>
          </div>
        )}

        {meal.dietary && meal.dietary.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {meal.dietary.slice(0, 2).map((diet) => (
              <span
                key={diet}
                className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30"
              >
                {diet}
              </span>
            ))}
            {meal.dietary.length > 2 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                +{meal.dietary.length - 2}
              </span>
            )}
          </div>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs text-primary hover:underline font-medium mb-2"
        >
          {showDetails ? "Hide" : "Show"} ingredients
        </button>

        {showDetails && (
          <div className="mb-4 p-3 rounded-lg bg-secondary/10 border border-border">
            <p className="mb-2 text-sm font-semibold text-foreground">Ingredients:</p>
            <div className="flex flex-wrap gap-2">
              {meal.ingredients.map((ingredient) => (
                <span key={ingredient} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-foreground">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={onSwap}
          className="w-full px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary/10 font-medium transition-colors"
        >
          Swap Meal
        </Button>
      </div>
    </Card>
  )
}
