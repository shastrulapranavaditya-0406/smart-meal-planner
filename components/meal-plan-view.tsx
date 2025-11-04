"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, RotateCcw } from "lucide-react"

export function MealPlanView({ mealPlan, userProfile, onViewGrocery, onBack, onGenerateNew }) {
  const [meals, setMeals] = useState(mealPlan.meals)

  const handleSwapMeal = (mealId) => {
    // In a real app, this would show a modal with alternative meals
    console.log("Swap meal:", mealId)
  }

  const categories = ["breakfast", "lunch", "dinner", "snack"]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <h1 className="text-3xl font-bold text-foreground">Your Meal Plan</h1>
            </div>
            <p className="text-muted-foreground">
              {new Date(mealPlan.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </p>
          </div>
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90" onClick={onGenerateNew}>
            <RotateCcw className="w-4 h-4" />
            New Plan
          </Button>
        </div>

        {/* Daily Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <div className="text-sm text-muted-foreground mb-1">Daily Calories</div>
              <div className="text-2xl font-bold text-primary">{Math.round(mealPlan.totalCalories)}</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-4">
              <div className="text-sm text-muted-foreground mb-1">Protein</div>
              <div className="text-2xl font-bold text-primary">{mealPlan.macros.protein}g</div>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="pt-4">
              <div className="text-sm text-muted-foreground mb-1">Carbs</div>
              <div className="text-2xl font-bold text-accent">{mealPlan.macros.carbs}g</div>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="pt-4">
              <div className="text-sm text-muted-foreground mb-1">Fat</div>
              <div className="text-2xl font-bold text-accent">{mealPlan.macros.fat}g</div>
            </CardContent>
          </Card>
        </div>

        {/* Meals */}
        <div className="space-y-4 mb-8">
          {categories.map((category) => {
            const meal = meals.find((m) => m.category === category)
            if (!meal) return null

            return (
              <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary/50 pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="capitalize text-lg">{category}</CardTitle>
                    <div className="text-sm font-semibold text-muted-foreground">{Math.round(meal.calories)} cal</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">{meal.name}</h3>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded text-center">
                        <div className="text-sm text-muted-foreground">Protein</div>
                        <div className="font-bold text-primary">{meal.protein}g</div>
                      </div>
                      <div className="bg-accent/10 p-2 rounded text-center">
                        <div className="text-sm text-muted-foreground">Carbs</div>
                        <div className="font-bold text-accent">{meal.carbs}g</div>
                      </div>
                      <div className="bg-primary/10 p-2 rounded text-center">
                        <div className="text-sm text-muted-foreground">Fat</div>
                        <div className="font-bold text-primary">{meal.fat}g</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {meal.ingredients.map((ing, idx) => (
                        <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent" onClick={() => handleSwapMeal(meal.id)}>
                    Swap Meal
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" onClick={onViewGrocery}>
            <ShoppingCart className="w-4 h-4" />
            View Grocery List
          </Button>
        </div>
      </div>
    </div>
  )
}
