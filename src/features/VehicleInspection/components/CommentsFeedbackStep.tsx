// ---------------------
// Helpers

import type { MultiFormValues } from '../types/form.types';
import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@/shared/components/ui';

// ---------------------
function formatThaiBuddhistDatetime(d = new Date()) {
  // day month (Thai locale) + buddhist year + เวลา HH:MM
  const day = d.getDate();
  const month = new Intl.DateTimeFormat('th-TH', { month: 'long' }).format(d); // เดือนภาษาไทย
  const yearBE = d.getFullYear() + 543;
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${day} ${month} ${yearBE} เวลา ${hours}:${minutes}`;
}

// ---------------------
// Component
// ---------------------
export default function CommentsFeedbackStep() {
  const defaultDateTime = formatThaiBuddhistDatetime();
  const { control } = useFormContext<MultiFormValues>();

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
      {/* Step Header */}
      <div className="mb-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              ขั้นตอน การลงนาม
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              กรอกข้อมูลและลงนามเพื่อสิ้นสุดการตรวจสอบ
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <h3 className="text-xl font-bold text-white md:text-2xl">
            คำอธิบายและข้อเสนอแนะ
          </h3>
        </div>

        <div className="space-y-8 p-6 md:p-8">
          {/* Description textarea */}
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="mb-4 block text-lg font-semibold text-gray-700">
                  คำอธิบายและข้อเสนอแนะอื่นๆ (ถ้ามี)
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="กรุณากรอกคำอธิบาย ข้อเสนอแนะ หรือหมายเหตุเพิ่มเติม..."
                    className="min-h-[160px] w-full resize-none rounded-xl border-2 border-gray-200 p-6 text-lg leading-6 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 md:min-h-[200px]"
                  />
                </FormControl>
                <FormMessage className="mt-2 text-base text-red-500" />
              </FormItem>
            )}
          />

          {/* Signature section */}
          <div className="rounded-xl bg-gray-50 p-6 md:p-8">
            <h4 className="mb-6 text-center text-xl font-bold text-gray-800">
              การลงนาม
            </h4>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Owner signature */}
              <FormField
                control={control}
                name="ownerSignature"
                render={({ field }) => (
                  <FormItem className="rounded-xl bg-white p-6 shadow-sm">
                    <FormLabel className="mb-4 block text-center">
                      <span className="mb-2 block text-lg font-bold text-gray-800">
                        ลงชื่อ
                      </span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-gray-600">
                        เจ้าของรถ / ผู้รับรถ
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="กรุณากรอกชื่อ-นามสกุล"
                        className="h-14 rounded-none border-0 border-b-3 border-gray-300 bg-transparent p-4 text-center text-lg transition-colors duration-200 focus:border-blue-500 focus:ring-0"
                        style={{ fontSize: '18px' }}
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-center text-base text-red-500" />
                    <div className="mt-4 border-t border-gray-200 pt-2">
                      <p className="text-center text-sm text-gray-500">
                        ผู้ที่ได้รับการตรวจสอบรถยนต์
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              {/* Inspector signature */}
              <FormField
                control={control}
                name="inspectorSignature"
                render={({ field }) => (
                  <FormItem className="rounded-xl bg-white p-6 shadow-sm">
                    <FormLabel className="mb-4 block text-center">
                      <span className="mb-2 block text-lg font-bold text-gray-800">
                        ลงชื่อ
                      </span>
                      <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-gray-600">
                        ผู้ตรวจสอบ
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="กรุณากรอกชื่อ-นามสกุล"
                        className="h-14 rounded-none border-0 border-b-3 border-gray-300 bg-transparent p-4 text-center text-lg transition-colors duration-200 focus:border-green-500 focus:ring-0"
                        style={{ fontSize: '18px' }}
                      />
                    </FormControl>
                    <FormMessage className="mt-2 text-center text-base text-red-500" />
                    <div className="mt-4 border-t border-gray-200 pt-2">
                      <p className="text-center text-sm text-gray-500">
                        เจ้าหน้าที่ผู้ทำการตรวจสอบ
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Date and time */}
          <div className="rounded-xl bg-blue-50 p-6 text-center">
            <p className="mb-2 text-gray-600">วันที่และเวลาในการตรวจสอบ</p>
            <p className="text-xl font-bold text-blue-600">{defaultDateTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
