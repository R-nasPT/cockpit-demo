import type { MultiFormValues } from '../types/form.types';
import { useFormContext } from 'react-hook-form';

export default function PersonalStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ชื่อ</label>
        <input className="w-full border p-2" {...register('firstName')} />
        {errors.firstName && (
          <p className="text-sm text-red-600">
            {errors.firstName?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">นามสกุล</label>
        <input className="w-full border p-2" {...register('lastName')} />
        {errors.lastName && (
          <p className="text-sm text-red-600">
            {errors.lastName?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">อายุ</label>
        <input className="w-full border p-2" {...register('age')} />
        {errors.age && (
          <p className="text-sm text-red-600">
            {errors.age?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
