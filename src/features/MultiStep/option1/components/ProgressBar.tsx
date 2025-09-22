import { steps } from "../../option1/config/form.config";

interface ProgressBarProps {
  currentStep: number;
  // completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
}: // completedSteps,
ProgressBarProps) {
  return (
    <div className="mb-4 flex items-center gap-2">
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium  
                    ${
                      i === currentStep
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
          >
            {i + 1}
          </div>
          <div
            className={`text-sm ${
              i === currentStep ? "font-semibold" : "text-gray-500"
            }`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
