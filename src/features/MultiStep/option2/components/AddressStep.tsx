import { Controller } from 'react-hook-form';
import type { StepProps } from '../types/step.types';

export default function AddressStep({ control, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">ที่อยู่</h2>
        <p className="text-gray-600">กรุณากรอกที่อยู่สำหรับจัดส่ง</p>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          ที่อยู่
        </label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={3}
              className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="บ้านเลขที่ ถนน ตำบล อำเภอ"
            />
          )}
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            เมือง/จังหวัด
          </label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.city ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="กรุงเทพฯ"
              />
            )}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            รหัสไปรษณีย์
          </label>
          <Controller
            name="postalCode"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  errors.postalCode ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="10100"
              />
            )}
          />
          {errors.postalCode && (
            <p className="mt-1 text-sm text-red-500">
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
