import { useFormContext } from 'react-hook-form';
import type { MultiFormValues } from '../types/form.types';

export default function AddressStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ที่อยู่</label>
        <input className="w-full border p-2" {...register('address1')} />
        {errors.address1 && (
          <p className="text-sm text-red-600">
            {errors.address1?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">จังหวัด/เมือง</label>
        <input className="w-full border p-2" {...register('city')} />
        {errors.city && (
          <p className="text-sm text-red-600">
            {errors.city?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">รหัสไปรษณีย์</label>
        <input className="w-full border p-2" {...register('postal')} />
        {errors.postal && (
          <p className="text-sm text-red-600">
            {errors.postal?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
