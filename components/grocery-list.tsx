"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GroceryListProps {
  meals: any[]
}

export default function GroceryList({ meals }: GroceryListProps) {
  const [checkedItems, setCheckedItems] = useState({})
  const [printMode, setPrintMode] = useState(false)

  const allIngredients = meals.reduce((acc, meal) => {
    meal.ingredients.forEach((ingredient) => {
      acc[ingredient] = (acc[ingredient] || 0) + 1
    })
    return acc
  }, {})

  const groupedIngredients = {
    Proteins: [
      "Chicken Breast",
      "Salmon Fillet",
      "Lean Ground Beef",
      "Turkey Breast",
      "Canned Tuna",
      "Tofu",
      "Eggs",
      "Egg Whites",
      "Cheese",
      "Greek Yogurt",
      "Protein Powder",
    ],
    Vegetables: [
      "Mixed Greens",
      "Spinach",
      "Kale",
      "Broccoli",
      "Bell Peppers",
      "Tomato",
      "Cucumber",
      "Mushrooms",
      "Onion",
      "Red Onion",
      "Cherry Tomatoes",
      "Zucchini",
      "Green Beans",
      "Sweet Potato",
      "Snap Peas",
    ],
    Fruits: ["Blueberries", "Berries", "Banana", "Raisins"],
    "Grains & Legumes": [
      "Oats",
      "Quinoa",
      "Brown Rice",
      "Lentil Pasta",
      "Whole Wheat Pasta",
      "Whole Wheat Wrap",
      "Chickpeas",
      "Granola",
      "Chia Seeds",
    ],
    Pantry: [
      "Honey",
      "Almond Milk",
      "Coconut Milk",
      "Olive Oil",
      "Garlic",
      "Lemon",
      "Almonds",
      "Walnuts",
      "Cashews",
      "Tahini",
      "Hummus",
      "Soy Sauce",
      "Curry Paste",
      "Tomato Sauce",
      "Dark Chocolate",
      "Dark Chocolate Chips",
      "Herbs",
    ],
  }

  const toggleItem = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }))
  }

  if (printMode) {
    return (
      <div className="space-y-6">
        <div className="flex gap-2 justify-end mb-4">
          <Button onClick={() => window.print()} className="bg-primary text-primary-foreground">
            Print List
          </Button>
          <Button onClick={() => setPrintMode(false)} variant="outline" className="border border-border">
            Back to View
          </Button>
        </div>

        <div className="bg-white text-black p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Weekly Grocery List</h2>
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(groupedIngredients).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-3 pb-2 border-b-2 border-black">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm flex items-start">
                      <span className="mr-2">☐</span>
                      <span>{item}</span>
                      {allIngredients[item] && (
                        <span className="ml-auto text-xs text-gray-600">×{allIngredients[item]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2 mb-4">
        <Button onClick={() => setPrintMode(true)} className="bg-accent text-accent-foreground hover:bg-accent/90">
          Print/Download
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(groupedIngredients).map(([category, items]) => (
          <Card key={category} className="border-border bg-card p-4">
            <h3 className="mb-3 font-semibold text-primary">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-sm transition-opacity ${
                    checkedItems[item] ? "opacity-50 line-through" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[item] || false}
                    onChange={() => toggleItem(item)}
                    className="rounded border-border cursor-pointer"
                  />
                  <span className="flex-1">{item}</span>
                  {allIngredients[item] && (
                    <span className="text-xs text-muted-foreground">×{allIngredients[item]}</span>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
