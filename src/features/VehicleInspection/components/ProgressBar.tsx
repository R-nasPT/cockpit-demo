import { CheckCircle2 } from 'lucide-react';
import { steps } from '../constants/steps.constants';

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  const CurrentIcon = steps[currentStep].icon;
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          การตรวจสอบรถยนต์
        </h2>
        <div className="text-sm text-gray-600">
          ขั้นตอน {currentStep + 1} จาก {steps.length}
        </div>
      </div>

      {/* Progress Bar - แสดงเปอร์เซ็นต์ความคืบหน้า */}
      <div className="mb-4">
        <div className="mb-1 flex justify-between text-xs text-gray-600">
          <span>ความคืบหน้า</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Desktop: Steps แบบ Horizontal Scrollable */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div key={step.id} className="flex flex-shrink-0 items-center">
                <div className="flex min-w-[120px] flex-col items-center text-center">
                  <div
                    className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${
                      isCompleted
                        ? 'border-green-500 bg-green-500 text-white'
                        : isCurrent
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-gray-300 bg-gray-100 text-gray-500'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Icon size={16} />
                    )}
                  </div>
                  <span
                    className={`text-xs leading-tight font-medium ${
                      isCurrent
                        ? 'text-blue-600'
                        : isCompleted
                          ? 'text-green-600'
                          : 'text-gray-500'
                    }`}
                  >
                    {step.shortTitle}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-4 min-w-[40px] flex-1">
                    <div
                      className={`h-1 rounded ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet: Grid Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-4 gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-1 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold ${
                    isCompleted
                      ? 'border-green-500 bg-green-500 text-white'
                      : isCurrent
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-300 bg-gray-100 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Icon size={12} />
                  )}
                </div>
                <span
                  className={`text-xs leading-tight font-medium ${
                    isCurrent
                      ? 'text-blue-600'
                      : isCompleted
                        ? 'text-green-600'
                        : 'text-gray-500'
                  }`}
                >
                  {step.shortTitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Current Step Only */}
      <div className="md:hidden">
        <div className="mb-3 flex items-center justify-center space-x-2">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div
                key={step.id}
                className={`h-2 w-2 rounded-full ${
                  isCompleted
                    ? 'bg-green-500'
                    : isCurrent
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                }`}
              />
            );
          })}
        </div>
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                completedSteps.has(currentStep)
                  ? 'border-green-500 bg-green-500 text-white'
                  : 'border-blue-600 bg-blue-600 text-white'
              }`}
            >
              {completedSteps.has(currentStep) ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <CurrentIcon size={16} />
              )}
            </div>
          </div>
          <div className="text-base font-semibold text-blue-600">
            {steps[currentStep]?.title}
          </div>
        </div>
      </div>
    </div>
  );
}
