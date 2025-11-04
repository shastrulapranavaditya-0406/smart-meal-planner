export const ACTIVITY_LEVELS = {
  sedentary: { label: "Sedentary (Little or no exercise)", multiplier: 1.2 },
  light: { label: "Light (1-3 days per week)", multiplier: 1.375 },
  moderate: { label: "Moderate (3-5 days per week)", multiplier: 1.55 },
  active: { label: "Active (6-7 days per week)", multiplier: 1.725 },
  veryactive: { label: "Very Active (Intense training)", multiplier: 1.9 },
}

export const HEALTH_GOALS = {
  lose: { label: "Lose Weight", multiplier: 0.85 },
  maintain: { label: "Maintain", multiplier: 1.0 },
  gain: { label: "Gain Muscle", multiplier: 1.1 },
}

export const DIETARY_PREFERENCES = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Keto",
  "Paleo",
  "No Restrictions",
]

export const MACRO_RATIOS = {
  protein: 0.3,
  carbs: 0.5,
  fat: 0.2,
}
