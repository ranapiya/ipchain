import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface Step {
  id: number
  title: string
  description: string
  completed: boolean
  current: boolean
}

interface StepperProps {
  steps: Step[]
}

export function Stepper({ steps }: StepperProps) {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="flex items-center justify-between">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={cn("relative", stepIdx !== steps.length - 1 && "pr-8 sm:pr-20")}>
            {/* Connector line */}
            {stepIdx !== steps.length - 1 && (
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className={cn("h-0.5 w-full", step.completed ? "bg-primary" : "bg-border")} />
              </div>
            )}

            <div className="relative flex items-center justify-center">
              {step.completed ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              ) : step.current ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-sm font-medium text-primary">{step.id}</span>
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                  <span className="text-sm font-medium text-muted-foreground">{step.id}</span>
                </div>
              )}
            </div>

            <div className="mt-2 text-center">
              <p className={cn("text-sm font-medium", step.current ? "text-primary" : "text-muted-foreground")}>
                {step.title}
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
