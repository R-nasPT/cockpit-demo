import { steps } from '../constants/form.constants';

interface NavigationButtonsProps {
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

export default function NavigationButtons({
  currentStep,
  onPrevStep,
  onNextStep,
}: NavigationButtonsProps) {
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="flex justify-between gap-3">
      <button
        type="button"
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className="rounded border px-4 py-2 disabled:opacity-50"
      >
        ย้อนกลับ
      </button>

      <div className="flex gap-2">
        {!isLast && (
          <button
            type="button"
            onClick={onNextStep}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            ถัดไป
          </button>
        )}

        {isLast && (
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            ส่งข้อมูล
          </button>
        )}
      </div>
    </div>
  );
}
