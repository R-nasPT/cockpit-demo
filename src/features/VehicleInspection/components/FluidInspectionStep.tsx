import { useFormContext } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui';
import type { MultiFormValues } from '../types/form.types';

// -----------------------
// FluidCard (uses FormField paths)
// -----------------------
function FluidCard({
  title,
  namePrefix,
}: {
  title: string;
  namePrefix:
    | 'engineOil'
    | 'powerSteerOil'
    | 'clutchOil'
    | 'reservoirWater'
    | 'brakeOil'
    | 'washerWater'
    | 'atOil';
}) {
  const { control } = useFormContext<MultiFormValues>();

  return (
    <Card className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm">
      <CardHeader className="mb-6 p-0">
        <CardTitle>
          <h3 className="inline-block rounded-lg bg-gray-600 px-4 py-2 text-lg font-semibold text-white">
            {title}
          </h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Status Checkboxes */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name={`${namePrefix}.changed`}
            render={({ field }) => (
              <FormItem className="m-0">
                <FormLabel className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-transparent bg-gray-50 p-4 transition-colors hover:border-blue-200">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(Boolean(v))}
                      className="h-6 w-6 rounded"
                    />
                  </FormControl>
                  <span className="text-base font-medium text-gray-700">
                    เปลี่ยนแล้ว
                  </span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`${namePrefix}.refilled`}
            render={({ field }) => (
              <FormItem className="m-0">
                <FormLabel className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-transparent bg-gray-50 p-4 transition-colors hover:border-blue-200">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(Boolean(v))}
                      className="h-6 w-6 rounded"
                    />
                  </FormControl>
                  <span className="text-base font-medium text-gray-700">
                    เติมแล้ว
                  </span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          {/* Color Selection */}
          <div>
            <span className="mb-3 block text-base font-semibold text-gray-800">
              สี:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={control}
                name={`${namePrefix}.colorRed`}
                render={({ field }) => (
                  <FormItem className="m-0">
                    <FormLabel className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-red-200 bg-red-50 p-4 transition-colors hover:bg-red-100">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(v) => field.onChange(Boolean(v))}
                          className="h-6 w-6 rounded border-2"
                        />
                      </FormControl>
                      <span className="text-base font-medium text-red-700">
                        แดง
                      </span>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`${namePrefix}.colorBlue`}
                render={({ field }) => (
                  <FormItem className="m-0">
                    <FormLabel className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-blue-200 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(v) => field.onChange(Boolean(v))}
                          className="h-6 w-6 rounded border-2"
                        />
                      </FormControl>
                      <span className="text-base font-medium text-blue-700">
                        น้ำเงิน
                      </span>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Level Selection */}
          <div>
            <span className="mb-3 block text-base font-semibold text-gray-800">
              ระดับ:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={control}
                name={`${namePrefix}.levelHigh`}
                render={({ field }) => (
                  <FormItem className="m-0">
                    <FormLabel className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(v) => field.onChange(Boolean(v))}
                          className="h-6 w-6 rounded border-2"
                        />
                      </FormControl>
                      <span className="text-base font-medium text-green-700">
                        สูง
                      </span>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`${namePrefix}.levelLow`}
                render={({ field }) => (
                  <FormItem className="m-0">
                    <FormLabel className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border-2 border-orange-200 bg-orange-50 p-4 transition-colors hover:bg-orange-100">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(v) => field.onChange(Boolean(v))}
                          className="h-6 w-6 rounded border-2"
                        />
                      </FormControl>
                      <span className="text-base font-medium text-orange-700">
                        ต่ำ
                      </span>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// -----------------------
// Main form
// -----------------------
export default function FluidInspectionStep() {
  const { control } = useFormContext<MultiFormValues>();

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
      {/* Step Header */}
      <div className="mb-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 px-6 py-4">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              สารเคลื่อนและของเหลวต่างๆ
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              ตรวจสอบระดับและสภาพของของเหลวในรถยนต์
            </p>
          </div>
        </div>
      </div>

      {/* Fluids Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <FluidCard title="น้ำมันเครื่อง" namePrefix="engineOil" />
        <FluidCard title="น้ำมันพวงมาลัยพาวเวอร์" namePrefix="powerSteerOil" />
        <FluidCard title="น้ำมันคลัตช์" namePrefix="clutchOil" />
        <FluidCard title="น้ำถังพัก หม้อน้ำ" namePrefix="reservoirWater" />
        <FluidCard title="น้ำมันเบรค" namePrefix="brakeOil" />
        <FluidCard title="น้ำฉีดกระจก" namePrefix="washerWater" />
        <FluidCard title="น้ำมันเกียร์ A/T (เฉพาะรุ่น)" namePrefix="atOil" />
      </div>

      {/* Battery Section */}
      <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-yellow-500 bg-yellow-100 px-6 py-4">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-bold text-gray-800">
              แบตเตอรี่ (Battery)
            </h3>
          </div>

          <FormField
            control={control}
            name="batteryChanged"
            render={({ field }) => (
              <FormItem className="rounded-lg bg-gray-600 px-6 py-3">
                <FormLabel className="flex cursor-pointer items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(Boolean(v))}
                      className="h-6 w-6 data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500"
                    />
                  </FormControl>
                  <span className="ml-3 text-base font-medium text-white">
                    เปลี่ยนแล้ว
                  </span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-8">
          {/* Voltage Section */}
          <div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <h4 className="rounded-lg bg-gray-600 px-6 py-3 text-lg font-semibold whitespace-nowrap text-white">
                ค่าแรงดันไฟฟ้า
              </h4>

              <div className="flex flex-wrap gap-2">
                <FormField
                  control={control}
                  name="batteryVoltage.v12_4"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex min-w-[80px] cursor-pointer items-center justify-center gap-3 rounded-lg border-4 border-red-500 bg-red-50 px-6 py-4 transition-colors hover:bg-red-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-bold text-red-700">
                          12.4V
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="batteryVoltage.v12_5"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex min-w-[80px] cursor-pointer items-center justify-center gap-3 rounded-lg border-4 border-yellow-500 bg-yellow-50 px-6 py-4 transition-colors hover:bg-yellow-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-bold text-yellow-700">
                          12.5V
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="batteryVoltage.v12_6"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex min-w-[80px] cursor-pointer items-center justify-center gap-3 rounded-lg border-4 border-gray-500 bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-bold text-gray-700">
                          12.6V
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="batteryVoltage.v12_7"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex min-w-[80px] cursor-pointer items-center justify-center gap-3 rounded-lg border-4 border-gray-500 bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-bold text-gray-700">
                          12.7V
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="batteryVoltage.v12_8"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex min-w-[80px] cursor-pointer items-center justify-center gap-3 rounded-lg border-4 border-gray-500 bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-bold text-gray-700">
                          12.8V
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Start Voltage and CCA Section */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Start Voltage */}
            <div>
              <h4 className="mb-4 rounded-lg bg-gray-600 px-6 py-3 text-lg font-semibold text-white">
                ค่าแรงดันไฟฟ้า ขณะสตาร์ทเครื่องยนต์
              </h4>

              <div className="flex items-center justify-center gap-4">
                <button className="pointer-events-none text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>

                <div className="flex">
                  <FormField
                    control={control}
                    name="batteryStartVoltage.v9"
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormLabel className="flex min-w-[60px] cursor-pointer items-center justify-center gap-3 rounded-l-lg border-4 border-red-500 bg-red-50 px-6 py-4 transition-colors hover:bg-red-100">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(v) =>
                                field.onChange(Boolean(v))
                              }
                              className="h-6 w-6"
                            />
                          </FormControl>
                          <span className="text-base font-bold text-red-700">
                            9
                          </span>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="batteryStartVoltage.v10"
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormLabel className="flex min-w-[60px] cursor-pointer items-center justify-center gap-3 border-4 border-l-0 border-gray-500 bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(v) =>
                                field.onChange(Boolean(v))
                              }
                              className="h-6 w-6"
                            />
                          </FormControl>
                          <span className="text-base font-bold text-gray-700">
                            10
                          </span>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="batteryStartVoltage.v11"
                    render={({ field }) => (
                      <FormItem className="m-0">
                        <FormLabel className="flex min-w-[60px] cursor-pointer items-center justify-center gap-3 rounded-r-lg border-4 border-l-0 border-gray-500 bg-gray-50 px-6 py-4 transition-colors hover:bg-gray-100">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(v) =>
                                field.onChange(Boolean(v))
                              }
                              className="h-6 w-6"
                            />
                          </FormControl>
                          <span className="text-base font-bold text-gray-700">
                            11
                          </span>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <button className="pointer-events-none text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>

                <span className="text-base font-semibold text-gray-700">
                  Volt
                </span>
              </div>
            </div>

            {/* CCA Section */}
            <div>
              <h4 className="mb-4 rounded-lg bg-gray-600 px-6 py-3 text-lg font-semibold text-white">
                ค่าประสิทธิภาพการจ่ายไฟฟ้า CCA
              </h4>

              <div className="space-y-3">
                <FormField
                  control={control}
                  name="batteryCCA.ok"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex cursor-pointer items-center gap-4 rounded-lg border-2 border-green-200 bg-green-50 p-4 transition-colors hover:bg-green-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-medium text-green-700">
                          อยู่ในมาตรฐาน
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="batteryCCA.below"
                  render={({ field }) => (
                    <FormItem className="m-0">
                      <FormLabel className="flex cursor-pointer items-center gap-4 rounded-lg border-2 border-red-200 bg-red-50 p-4 transition-colors hover:bg-red-100">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(v) => field.onChange(Boolean(v))}
                            className="h-6 w-6"
                          />
                        </FormControl>
                        <span className="text-base font-medium text-red-700">
                          ต่ำกว่ามาตรฐาน
                        </span>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
