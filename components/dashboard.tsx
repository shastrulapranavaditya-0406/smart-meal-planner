"use client"

import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import { generateGroceryList, calculateEstimatedCost } from "@/lib/grocery-engine"

interface DashboardProps {
  profile: any
  mealPlan: any[]
  dailyCalories: number
  totalCalories: number
  totalProtein: number
}

export default function Dashboard({ profile, mealPlan, dailyCalories, totalCalories, totalProtein }: DashboardProps) {
  const totalCarbs = mealPlan.reduce((sum, meal) => sum + meal.carbs, 0)
  const totalFat = mealPlan.reduce((sum, meal) => sum + meal.fat, 0)
  const calorieRatio = (totalCalories / dailyCalories) * 100

  const proteinTarget = Math.round((dailyCalories * 0.3) / 4)
  const carbTarget = Math.round((dailyCalories * 0.5) / 4)
  const fatTarget = Math.round((dailyCalories * 0.2) / 9)

  const groceryList = useMemo(() => generateGroceryList(mealPlan), [mealPlan])
  const estimatedCost = useMemo(() => calculateEstimatedCost(groceryList), [groceryList])

  const macroMetrics = [
    {
      name: "Protein",
      current: totalProtein,
      target: proteinTarget,
      unit: "g",
      color: "bg-primary",
    },
    {
      name: "Carbs",
      current: totalCarbs,
      target: carbTarget,
      unit: "g",
      color: "bg-accent",
    },
    {
      name: "Fat",
      current: totalFat,
      target: fatTarget,
      unit: "g",
      color: "bg-secondary",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Calorie Overview */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Calorie Intake</h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-4xl font-bold text-primary">{totalCalories}</p>
            <p className="text-sm text-muted-foreground">/ {dailyCalories} cal</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent">{Math.round(calorieRatio)}%</p>
            <p className="text-sm text-muted-foreground">of daily target</p>
          </div>
        </div>
        <div className="w-full bg-secondary/20 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${Math.min(calorieRatio, 100)}%` }}
          />
        </div>
      </Card>

      {/* Macro Breakdown */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Macronutrients</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {macroMetrics.map((macro) => {
            const ratio = (macro.current / macro.target) * 100
            return (
              <div key={macro.name} className="p-4 rounded-lg bg-secondary/10 border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">{macro.name}</p>
                <p className="text-2xl font-bold text-foreground mb-2">
                  {macro.current}
                  {macro.unit}
                </p>
                <p className="text-xs text-muted-foreground mb-2">
                  Target: {macro.target}
                  {macro.unit}
                </p>
                <div className="w-full bg-muted/30 rounded-full h-1.5">
                  <div
                    className={`${macro.color} h-1.5 rounded-full transition-all`}
                    style={{ width: `${Math.min(ratio, 100)}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Shopping Summary */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Shopping Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Estimated Cost</p>
            <p className="text-2xl font-bold text-primary">${estimatedCost}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Unique Items</p>
            <p className="text-2xl font-bold text-accent">
              {Object.values(groceryList).reduce((sum, items) => sum + items.length, 0)}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Categories</p>
            <p className="text-2xl font-bold text-secondary">{Object.keys(groceryList).length}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Items</p>
            <p className="text-2xl font-bold text-foreground">
              {Object.values(groceryList).reduce(
                (sum, items) => sum + items.reduce((itemSum, item) => itemSum + item.quantity, 0),
                0,
              )}
            </p>
          </div>
        </div>
      </Card>

      {/* Profile Summary */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-semibold text-foreground">{profile.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Age</p>
            <p className="font-semibold text-foreground">{profile.age} years</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Weight</p>
            <p className="font-semibold text-foreground">{profile.weight} kg</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Goal</p>
            <p className="font-semibold text-foreground capitalize">{profile.goal}</p>
          </div>
        </div>
      </Card>

      {/* Meal Distribution */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Meal Distribution</h3>
        <div className="space-y-3">
          {mealPlan.map((meal) => (
            <div key={meal.id} className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
              <div>
                <p className="font-medium text-foreground capitalize">{meal.category}</p>
                <p className="text-sm text-muted-foreground">{meal.name}</p>
              </div>
              <p className="font-semibold text-primary">{meal.calories} cal</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
