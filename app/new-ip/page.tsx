"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { Stepper } from "@/components/wizard/stepper"
import { Step1Tokenization } from "@/components/wizard/step-1-tokenization"
import { Step2Fractional } from "@/components/wizard/step-2-fractional"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const wizardSteps = [
  { id: 1, title: "Tokenize", description: "CW721 NFT", completed: false, current: true },
  { id: 2, title: "Fractional", description: "CW20 Tokens", completed: false, current: false },
  { id: 3, title: "Revenue Split", description: "Splitter ADO", completed: false, current: false },
  { id: 4, title: "Vesting", description: "Optional", completed: false, current: false },
  { id: 5, title: "List/Sell", description: "Marketplace", completed: false, current: false },
  { id: 6, title: "AI Tracking", description: "Valuation", completed: false, current: false },
]

export default function NewIPWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [steps, setSteps] = useState(wizardSteps)

  const updateSteps = (stepNumber: number) => {
    setSteps(
      steps.map((step) => ({
        ...step,
        completed: step.id < stepNumber,
        current: step.id === stepNumber,
      })),
    )
  }

  const nextStep = () => {
    if (currentStep < 6) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      updateSteps(newStep)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      updateSteps(newStep)
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Tokenization />
      case 2:
        return <Step2Fractional />
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">Step {currentStep} Coming Soon</h3>
            <p className="text-muted-foreground">This step is under development</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">New IP Tokenization</h1>
              <p className="text-lg text-muted-foreground">
                Transform your intellectual property into tradeable digital assets
              </p>
            </div>

            <Stepper steps={steps} />

            <div className="min-h-[600px]">{renderCurrentStep()}</div>

            <div className="flex justify-between pt-6 border-t">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button onClick={nextStep} disabled={currentStep === 6} className="bg-primary hover:bg-primary/90">
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
