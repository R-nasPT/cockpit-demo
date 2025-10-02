import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { steps } from '../constants/steps.constants';
import { Link } from 'react-router';

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
    <div className="mt-8 flex items-center justify-between">
      <button
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className="flex items-center gap-2 rounded-xl border-2 border-gray-300 px-4 py-3 text-base font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 md:px-8 md:py-4 md:text-lg"
      >
        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        <span className="hidden sm:inline">ก่อนหน้า</span>
        <span className="sm:hidden">ย้อน</span>
      </button>

      {/* ปุ่มกลับหน้าหลัก */}
      <Link
        to="/menu"
        className="flex items-center gap-2 rounded-xl border-2 border-gray-400 px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 active:scale-95 md:px-6 md:py-4 md:text-lg"
      >
        <Home className="h-4 w-4 md:h-5 md:w-5" />
        <span className="hidden sm:inline">กลับหน้าหลัก</span>
        <span className="sm:hidden">หน้าหลัก</span>
      </Link>

      {isLast && (
        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-700 active:scale-95 md:px-8 md:py-4 md:text-lg"
        >
          <span className="hidden sm:inline">ส่งข้อมูล</span>
          <span className="sm:hidden">ส่ง</span>
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      )}

      {!isLast && (
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 active:scale-95 md:px-8 md:py-4 md:text-lg"
        >
          <span className="hidden sm:inline">ถัดไป</span>
          <span className="sm:hidden">ถัดไป</span>
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      )}
    </div>
  );
}
