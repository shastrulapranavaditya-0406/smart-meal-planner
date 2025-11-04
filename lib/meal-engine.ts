export interface Meal {
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
  tags?: string[]
}

export const MEAL_DATABASE: Meal[] = [
  // Breakfast meals
  {
    id: "1",
    name: "Oatmeal with Berries",
    calories: 380,
    protein: 12,
    carbs: 65,
    fat: 8,
    ingredients: ["Oats", "Blueberries", "Honey", "Almond Milk", "Almonds"],
    category: "breakfast",
    prepTime: 10,
    difficulty: "easy",
    dietary: ["Vegetarian", "Gluten-Free", "Dairy-Free", "Vegan"],
    tags: ["high-carb", "quick"],
  },
  {
    id: "2",
    name: "Egg White Omelet",
    calories: 310,
    protein: 28,
    carbs: 15,
    fat: 10,
    ingredients: ["Egg Whites", "Spinach", "Mushrooms", "Cheese", "Olive Oil"],
    category: "breakfast",
    prepTime: 15,
    difficulty: "easy",
    dietary: ["Vegetarian", "Gluten-Free"],
    tags: ["high-protein", "keto-friendly"],
  },
  {
    id: "3",
    name: "Greek Yogurt Parfait",
    calories: 350,
    protein: 22,
    carbs: 48,
    fat: 7,
    ingredients: ["Greek Yogurt", "Granola", "Berries", "Honey", "Walnuts"],
    category: "breakfast",
    prepTime: 5,
    difficulty: "easy",
    dietary: ["Vegetarian", "Gluten-Free"],
    tags: ["quick", "high-protein"],
  },
  {
    id: "4",
    name: "Protein Pancakes",
    calories: 420,
    protein: 25,
    carbs: 52,
    fat: 12,
    ingredients: ["Protein Powder", "Eggs", "Bananas", "Almond Milk", "Honey"],
    category: "breakfast",
    prepTime: 20,
    difficulty: "medium",
    dietary: ["Vegetarian", "Gluten-Free"],
    tags: ["high-protein", "filling"],
  },
  {
    id: "5",
    name: "Chia Seed Pudding",
    calories: 300,
    protein: 10,
    carbs: 42,
    fat: 12,
    ingredients: ["Chia Seeds", "Almond Milk", "Honey", "Berries", "Coconut"],
    category: "breakfast",
    prepTime: 5,
    difficulty: "easy",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"],
    tags: ["quick", "superfood"],
  },
  // Lunch meals
  {
    id: "6",
    name: "Grilled Chicken Salad",
    calories: 420,
    protein: 35,
    carbs: 25,
    fat: 12,
    ingredients: ["Chicken Breast", "Mixed Greens", "Tomato", "Cucumber", "Olive Oil"],
    category: "lunch",
    prepTime: 25,
    difficulty: "easy",
    dietary: ["Paleo", "Keto", "Gluten-Free"],
    tags: ["high-protein", "low-carb"],
  },
  {
    id: "7",
    name: "Quinoa Buddha Bowl",
    calories: 450,
    protein: 16,
    carbs: 60,
    fat: 14,
    ingredients: ["Quinoa", "Chickpeas", "Sweet Potato", "Kale", "Tahini"],
    category: "lunch",
    prepTime: 30,
    difficulty: "medium",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    tags: ["balanced", "filling"],
  },
  {
    id: "8",
    name: "Turkey Wrap",
    calories: 380,
    protein: 28,
    carbs: 45,
    fat: 10,
    ingredients: ["Turkey Breast", "Whole Wheat Wrap", "Lettuce", "Tomato", "Hummus"],
    category: "lunch",
    prepTime: 10,
    difficulty: "easy",
    dietary: ["Paleo"],
    tags: ["quick", "high-protein"],
  },
  {
    id: "9",
    name: "Tuna Salad",
    calories: 340,
    protein: 32,
    carbs: 20,
    fat: 11,
    ingredients: ["Canned Tuna", "Mixed Greens", "Cherry Tomatoes", "Red Onion", "Olive Oil"],
    category: "lunch",
    prepTime: 10,
    difficulty: "easy",
    dietary: ["Paleo", "Keto", "Gluten-Free"],
    tags: ["quick", "high-protein", "low-carb"],
  },
  {
    id: "10",
    name: "Veggie Stir Fry",
    calories: 320,
    protein: 12,
    carbs: 48,
    fat: 9,
    ingredients: ["Broccoli", "Bell Peppers", "Snap Peas", "Brown Rice", "Soy Sauce"],
    category: "lunch",
    prepTime: 20,
    difficulty: "easy",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    tags: ["balanced", "filling"],
  },
  // Dinner meals
  {
    id: "11",
    name: "Salmon with Broccoli",
    calories: 520,
    protein: 40,
    carbs: 30,
    fat: 18,
    ingredients: ["Salmon Fillet", "Broccoli", "Lemon", "Olive Oil", "Garlic"],
    category: "dinner",
    prepTime: 30,
    difficulty: "medium",
    dietary: ["Paleo", "Keto", "Gluten-Free"],
    tags: ["high-protein", "omega-3"],
  },
  {
    id: "12",
    name: "Lean Beef Stir Fry",
    calories: 480,
    protein: 38,
    carbs: 40,
    fat: 14,
    ingredients: ["Lean Ground Beef", "Bell Peppers", "Onion", "Broccoli", "Brown Rice"],
    category: "dinner",
    prepTime: 25,
    difficulty: "medium",
    dietary: ["Paleo", "Keto", "Gluten-Free"],
    tags: ["high-protein", "balanced"],
  },
  {
    id: "13",
    name: "Baked Chicken Breast",
    calories: 410,
    protein: 42,
    carbs: 35,
    fat: 9,
    ingredients: ["Chicken Breast", "Sweet Potato", "Green Beans", "Herbs", "Olive Oil"],
    category: "dinner",
    prepTime: 35,
    difficulty: "easy",
    dietary: ["Paleo", "Gluten-Free"],
    tags: ["high-protein", "lean"],
  },
  {
    id: "14",
    name: "Lentil Pasta",
    calories: 390,
    protein: 18,
    carbs: 55,
    fat: 8,
    ingredients: ["Lentil Pasta", "Zucchini", "Spinach", "Tomato Sauce", "Garlic"],
    category: "dinner",
    prepTime: 25,
    difficulty: "easy",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
    tags: ["high-protein", "balanced"],
  },
  {
    id: "15",
    name: "Tofu Curry",
    calories: 380,
    protein: 20,
    carbs: 48,
    fat: 12,
    ingredients: ["Tofu", "Coconut Milk", "Curry Paste", "Vegetables", "Brown Rice"],
    category: "dinner",
    prepTime: 30,
    difficulty: "medium",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"],
    tags: ["balanced", "flavorful"],
  },
  // Snacks
  {
    id: "16",
    name: "Protein Bar",
    calories: 250,
    protein: 20,
    carbs: 28,
    fat: 6,
    ingredients: ["Oats", "Protein Powder", "Honey", "Almonds", "Dark Chocolate"],
    category: "snack",
    prepTime: 0,
    difficulty: "easy",
    dietary: ["Vegetarian", "Gluten-Free"],
    tags: ["high-protein", "quick"],
  },
  {
    id: "17",
    name: "Trail Mix",
    calories: 180,
    protein: 6,
    carbs: 22,
    fat: 9,
    ingredients: ["Almonds", "Cashews", "Raisins", "Dark Chocolate Chips"],
    category: "snack",
    prepTime: 0,
    difficulty: "easy",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Paleo"],
    tags: ["quick", "energy-boost"],
  },
  {
    id: "18",
    name: "Hummus and Veggies",
    calories: 150,
    protein: 5,
    carbs: 18,
    fat: 6,
    ingredients: ["Hummus", "Carrots", "Celery", "Bell Peppers", "Cucumber"],
    category: "snack",
    prepTime: 5,
    difficulty: "easy",
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"],
    tags: ["low-calorie", "quick"],
  },
  {
    id: "19",
    name: "Greek Yogurt with Honey",
    calories: 200,
    protein: 18,
    carbs: 24,
    fat: 3,
    ingredients: ["Greek Yogurt", "Honey", "Granola", "Almonds"],
    category: "snack",
    prepTime: 2,
    difficulty: "easy",
    dietary: ["Vegetarian", "Gluten-Free"],
    tags: ["high-protein", "quick"],
  },
]

export interface UserProfile {
  name: string
  age: number
  weight: number
  height: number
  gender: string
  activityLevel: string
  goal: string
  dietaryPreferences: string[]
}

export function generateMealPlan(profile: UserProfile): Meal[] {
  const categories = ["breakfast", "lunch", "dinner", "snack"]
  const plan: Meal[] = []

  categories.forEach((category) => {
    let categoryMeals = MEAL_DATABASE.filter((m) => m.category === category)

    // Filter by dietary preferences
    if (profile.dietaryPreferences && profile.dietaryPreferences.length > 0) {
      categoryMeals = categoryMeals.filter((meal) => {
        return profile.dietaryPreferences.some((pref) => meal.dietary?.includes(pref))
      })
    }

    if (categoryMeals.length > 0) {
      const randomMeal = categoryMeals[Math.floor(Math.random() * categoryMeals.length)]
      plan.push(randomMeal)
    }
  })

  return plan
}

export function calculateDailyCalories(profile: UserProfile): number {
  const bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryactive: 1.9,
  }

  const tdee = bmr * (activityMultipliers[profile.activityLevel] || 1.55)

  let adjustedCalories = tdee
  if (profile.goal === "lose") adjustedCalories *= 0.85
  if (profile.goal === "gain") adjustedCalories *= 1.1

  return Math.round(adjustedCalories)
}

export function getMacroTargets(dailyCalories: number) {
  return {
    protein: Math.round((dailyCalories * 0.3) / 4),
    carbs: Math.round((dailyCalories * 0.5) / 4),
    fat: Math.round((dailyCalories * 0.2) / 9),
  }
}
