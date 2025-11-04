export interface GroceryItem {
  name: string
  quantity: number
  category: string
}

export function generateGroceryList(meals: any[]): Record<string, GroceryItem[]> {
  const items: Record<string, GroceryItem> = {}

  meals.forEach((meal) => {
    meal.ingredients.forEach((ingredient: string) => {
      if (items[ingredient]) {
        items[ingredient].quantity += 1
      } else {
        items[ingredient] = {
          name: ingredient,
          quantity: 1,
          category: categorizeIngredient(ingredient),
        }
      }
    })
  })

  // Group by category
  const grouped: Record<string, GroceryItem[]> = {}
  Object.values(items).forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = []
    }
    grouped[item.category].push(item)
  })

  // Sort items within each category
  Object.keys(grouped).forEach((category) => {
    grouped[category].sort((a, b) => a.name.localeCompare(b.name))
  })

  return grouped
}

export function categorizeIngredient(ingredient: string): string {
  const categories = {
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

  for (const [category, items] of Object.entries(categories)) {
    if (items.includes(ingredient)) {
      return category
    }
  }

  return "Other"
}

export function exportGroceryList(groceryList: Record<string, GroceryItem[]>): string {
  let csv = "Item,Category,Quantity\n"

  Object.entries(groceryList).forEach(([category, items]) => {
    items.forEach((item) => {
      csv += `"${item.name}","${category}",${item.quantity}\n`
    })
  })

  return csv
}

export function formatGroceryListAsText(groceryList: Record<string, GroceryItem[]>): string {
  let text = "GROCERY LIST\n"
  text += "=".repeat(40) + "\n\n"

  const categoryOrder = ["Proteins", "Vegetables", "Fruits", "Grains & Legumes", "Pantry", "Other"]

  categoryOrder.forEach((category) => {
    if (groceryList[category]) {
      text += `${category.toUpperCase()}\n`
      text += "-".repeat(40) + "\n"
      groceryList[category].forEach((item) => {
        text += `☐ ${item.name}`
        if (item.quantity > 1) {
          text += ` (×${item.quantity})`
        }
        text += "\n"
      })
      text += "\n"
    }
  })

  return text
}

export function calculateEstimatedCost(groceryList: Record<string, GroceryItem[]>): number {
  // Approximate costs per item (in USD)
  const estimatedCosts: Record<string, number> = {
    "Chicken Breast": 6,
    "Salmon Fillet": 10,
    "Lean Ground Beef": 7,
    "Turkey Breast": 8,
    "Canned Tuna": 1.5,
    Tofu: 2,
    Eggs: 3.5,
    "Egg Whites": 5,
    Cheese: 4,
    "Greek Yogurt": 4,
    "Protein Powder": 25,
    "Mixed Greens": 3,
    Spinach: 2,
    Kale: 2.5,
    Broccoli: 2,
    "Bell Peppers": 1,
    Tomato: 0.5,
    Cucumber: 0.75,
    Mushrooms: 2,
    Onion: 0.5,
    "Red Onion": 0.5,
    "Cherry Tomatoes": 2,
    Zucchini: 1,
    "Green Beans": 2,
    "Sweet Potato": 1,
    "Snap Peas": 2.5,
    Blueberries: 4,
    Berries: 3.5,
    Banana: 0.5,
    Raisins: 3,
    Oats: 3,
    Quinoa: 4,
    "Brown Rice": 2,
    "Lentil Pasta": 2,
    "Whole Wheat Pasta": 1.5,
    "Whole Wheat Wrap": 3,
    Chickpeas: 1,
    Granola: 4,
    "Chia Seeds": 8,
    Honey: 5,
    "Almond Milk": 2.5,
    "Coconut Milk": 2,
    "Olive Oil": 8,
    Garlic: 2,
    Lemon: 0.75,
    Almonds: 6,
    Walnuts: 6,
    Cashews: 7,
    Tahini: 6,
    Hummus: 3,
    "Soy Sauce": 2,
    "Curry Paste": 3,
    "Tomato Sauce": 2,
    "Dark Chocolate": 4,
    "Dark Chocolate Chips": 3,
    Herbs: 2,
  }

  let totalCost = 0

  Object.entries(groceryList).forEach(([_, items]) => {
    items.forEach((item) => {
      const costPerItem = estimatedCosts[item.name] || 2
      totalCost += costPerItem * item.quantity
    })
  })

  return Math.round(totalCost * 100) / 100
}
