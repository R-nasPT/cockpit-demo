import { Check } from 'lucide-react';
import { steps } from '../constants/form.constants';

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.has(index);
          const isCurrent = currentStep === index;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                  isCompleted
                    ? `bg-green-500 text-white ${isCurrent && 'border-4 border-green-700'}`
                    : isCurrent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? <Check size={20} /> : <Icon size={20} />}
              </div>
              <span
                className={`text-sm font-medium ${
                  isCurrent
                    ? 'text-blue-600'
                    : isCompleted
                      ? 'text-green-600'
                      : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
