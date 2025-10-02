import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

export default function NavigationButtons({
  currentStep,
  onPrevStep,
  onNextStep,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        type="button"
        onClick={onPrevStep}
        disabled={currentStep === 1}
        className={`flex items-center rounded-md px-4 py-2 font-medium transition-colors ${
          currentStep === 1
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        <ChevronLeft size={20} className="mr-1" />
        ก่อนหน้า
      </button>

      {currentStep < 3 ? (
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          ถัดไป
          <ChevronRight size={20} className="ml-1" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center rounded-md bg-green-500 px-6 py-2 font-medium text-white transition-colors hover:bg-green-600"
        >
          <Check size={20} className="mr-2" />
          ส่งข้อมูล
        </button>
      )}
    </div>
  );
}
