"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function OnboardingForm({ onComplete }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "male",
    activityLevel: "moderate",
    goal: "maintain",
    dietaryPreferences: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDietaryChange = (pref) => {
    setFormData((prev) => ({
      ...prev,
      dietaryPreferences: prev.dietaryPreferences.includes(pref)
        ? prev.dietaryPreferences.filter((p) => p !== pref)
        : [...prev.dietaryPreferences, pref],
    }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.weight || !formData.height) {
      alert("Please fill in all required fields")
      return
    }
    onComplete(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <Card className="w-full max-w-2xl">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="text-2xl">NutriGenie</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Step {step} of 3 - Create Your Profile
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age (years) *</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="25"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg) *</Label>
                  <Input
                    id="weight"
                    name="weight"
                    type="number"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="70"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm) *</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="180"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Activity Level</Label>
                <div className="space-y-2">
                  {[
                    { value: "sedentary", label: "Sedentary (Little or no exercise)" },
                    { value: "light", label: "Light (1-3 days per week)" },
                    { value: "moderate", label: "Moderate (3-5 days per week)" },
                    { value: "active", label: "Active (6-7 days per week)" },
                    { value: "veryactive", label: "Very Active (Intense training)" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted"
                    >
                      <input
                        type="radio"
                        name="activityLevel"
                        value={option.value}
                        checked={formData.activityLevel === option.value}
                        onChange={handleChange}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Your Goal</Label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "lose", label: "Lose Weight" },
                    { value: "maintain", label: "Maintain" },
                    { value: "gain", label: "Gain Muscle" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData((prev) => ({ ...prev, goal: option.value }))}
                      className={`p-4 rounded-lg border-2 transition-all text-center font-medium ${
                        formData.goal === option.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>Dietary Preferences (select all that apply)</Label>
                <div className="space-y-2">
                  {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Keto", "Paleo", "No Restrictions"].map(
                    (pref) => (
                      <label
                        key={pref}
                        className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted"
                      >
                        <input
                          type="checkbox"
                          checked={formData.dietaryPreferences.includes(pref)}
                          onChange={() => handleDietaryChange(pref)}
                        />
                        <span>{pref}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="bg-accent/10 border border-accent rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Your Profile Summary</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Name: {formData.name}</li>
                  <li>Age: {formData.age} years</li>
                  <li>Weight: {formData.weight} kg</li>
                  <li>Height: {formData.height} cm</li>
                  <li>Activity: {formData.activityLevel}</li>
                  <li>Goal: {formData.goal}</li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button className="ml-auto" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button className="ml-auto bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleSubmit}>
                Create My Plan
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
