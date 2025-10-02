import { Check, CreditCard, MapPin, User } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  const steps = [
    { number: 1, title: 'ข้อมูลส่วนตัว', icon: User },
    { number: 2, title: 'ที่อยู่', icon: MapPin },
    { number: 3, title: 'การชำระเงิน', icon: CreditCard },
  ];

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.has(step.number);
          const isCurrent = currentStep === step.number;

          return (
            <div key={step.number} className="flex flex-col items-center">
              <div
                className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full transition-colors ${
                  isCompleted
                    ? 'bg-green-500 text-white'
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
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
