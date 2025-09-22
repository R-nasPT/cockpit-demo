// import { Check } from "lucide-react";
// import { useState } from "react";

// export default function VehicleInspectionForm() {
//   const [skills, setSkills] = useState({
//     communication: { thai: 0, english: 0 },
//     computer: { word: 0, excel: 0, powerpoint: 0, internet: 0 },
//     driving: { car: false, motorcycle: false },
//     other: "",
//   });

//   const handleSkillChange = (category, skill, value) => {
//     setSkills((prev) => ({
//       ...prev,
//       [category]: { ...prev[category], [skill]: value },
//     }));
//   };

//   const StarRating = ({ rating, onChange }) => {
//     return (
//       <div className="flex gap-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             type="button"
//             onClick={() => onChange(star)}
//             className={`w-4 h-4 ${
//               star <= rating ? "text-blue-500" : "text-gray-300"
//             }`}
//           >
//             ★
//           </button>
//         ))}
//       </div>
//     );
//   };

//   const [statusChecks, setStatusChecks] = useState({
//     needMaintenance: false,
//     needReview: false,
//     normal: false,
//   });

//   const handleStatusChange = (statusKey) => {
//     setStatusChecks((prev) => ({
//       ...prev,
//       [statusKey]: !prev[statusKey],
//     }));
//   };

//   //   =======================================
//   const [tireData, setTireData] = useState({
//     frontLeft: {
//       condition: { normal: false, damaged: false, punctured: false },
//       appearance: { bald: false, cracked: false },
//       pressure: { first: "0", second: "0" },
//       treadDepth: { main: "0", decimal: "0" },
//     },
//     frontRight: {
//       condition: { normal: false, damaged: false, punctured: false },
//       appearance: { bald: false, cracked: false },
//       pressure: { first: "0", second: "0" },
//       treadDepth: { main: "0", decimal: "0" },
//     },
//     rearLeft: {
//       condition: { normal: false, damaged: false, punctured: false },
//       appearance: { bald: false, cracked: false },
//       pressure: { first: "0", second: "0" },
//       treadDepth: { main: "0", decimal: "0" },
//     },
//     rearRight: {
//       condition: { normal: false, damaged: false, punctured: false },
//       appearance: { bald: false, cracked: false },
//       pressure: { first: "0", second: "0" },
//       treadDepth: { main: "0", decimal: "0" },
//     },
//   });

//   const [psiReading, setPsiReading] = useState("");
//   const [psiReadable, setPsiReadable] = useState(false);

//   const handleConditionChange = (position, condition) => {
//     setTireData((prev) => ({
//       ...prev,
//       [position]: {
//         ...prev[position],
//         condition: {
//           ...prev[position].condition,
//           [condition]: !prev[position].condition[condition],
//         },
//       },
//     }));
//   };

//   const handleAppearanceChange = (position, appearance) => {
//     setTireData((prev) => ({
//       ...prev,
//       [position]: {
//         ...prev[position],
//         appearance: {
//           ...prev[position].appearance,
//           [appearance]: !prev[position].appearance[appearance],
//         },
//       },
//     }));
//   };

//   const handlePressureChange = (position, type, value) => {
//     setTireData((prev) => ({
//       ...prev,
//       [position]: {
//         ...prev[position],
//         pressure: {
//           ...prev[position].pressure,
//           [type]: value,
//         },
//       },
//     }));
//   };

//   const handleTreadDepthChange = (position, type, value) => {
//     setTireData((prev) => ({
//       ...prev,
//       [position]: {
//         ...prev[position],
//         treadDepth: {
//           ...prev[position].treadDepth,
//           [type]: value,
//         },
//       },
//     }));
//   };

//   const NumberSelector = ({
//     selectedValue,
//     onChange,
//     numbers,
//     color = "blue",
//   }) => {
//     const colorClasses = {
//       blue: "bg-blue-500 text-white",
//       red: "bg-red-500 text-white",
//     };

//     return (
//       <div className="flex gap-1 flex-wrap">
//         {numbers.map((num) => (
//           <button
//             key={num}
//             onClick={() => onChange(num.toString())}
//             className={`w-8 h-8 rounded text-sm font-medium border ${
//               selectedValue === num.toString()
//                 ? colorClasses[color]
//                 : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
//             }`}
//           >
//             {num}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   const TireSection = ({ title, position, data }) => (
//     <div className="bg-white rounded-lg border border-gray-200 p-4">
//       <h3 className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium mb-4 inline-block">
//         {title}
//       </h3>

//       <div className="grid grid-cols-2 gap-6">
//         {/* Left Column */}
//         <div className="space-y-4">
//           {/* Status Checkboxes */}
//           <div className="flex gap-4">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={data.condition.normal}
//                 onChange={() => handleConditionChange(position, "normal")}
//                 className="w-4 h-4"
//               />
//               <span className="text-sm">เปลี่ยนแล้ว</span>
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={data.condition.damaged}
//                 onChange={() => handleConditionChange(position, "damaged")}
//                 className="w-4 h-4"
//               />
//               <span className="text-sm">ชำรุดแล้ว</span>
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={data.condition.punctured}
//                 onChange={() => handleConditionChange(position, "punctured")}
//                 className="w-4 h-4"
//               />
//               <span className="text-sm">ปกติ</span>
//             </label>
//           </div>

//           {/* Appearance */}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-2">สภาพยาง</p>
//             <div className="grid grid-cols-2 gap-2">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={data.appearance.bald}
//                   onChange={() => handleAppearanceChange(position, "bald")}
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm">บาด</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={data.appearance.cracked}
//                   onChange={() => handleAppearanceChange(position, "cracked")}
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm">บวม</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <span className="text-sm">ลื่นโปร่งรอง</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <span className="text-sm">ดำกรุ</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-4">
//           {/* Pressure Reading */}
//           <div>
//             <p className="text-sm font-medium text-gray-700 mb-2">
//               แรงดันลมยางห้วงดี้น (PSI)
//             </p>

//             <div className="mb-2">
//               <p className="text-xs text-blue-600 mb-1">หลักสิบ</p>
//               <NumberSelector
//                 selectedValue={data.pressure.first}
//                 onChange={(value) =>
//                   handlePressureChange(position, "first", value)
//                 }
//                 numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
//                 color="blue"
//               />
//             </div>

//             <div className="mb-2">
//               <p className="text-xs text-blue-600 mb-1">หลักหน่วย</p>
//               <NumberSelector
//                 selectedValue={data.pressure.second}
//                 onChange={(value) =>
//                   handlePressureChange(position, "second", value)
//                 }
//                 numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
//                 color="blue"
//               />
//             </div>

//             <div>
//               <p className="text-xs text-gray-700 mb-1">
//                 ความลึกร่องยดงมาง (มม.)
//               </p>
//               <NumberSelector
//                 selectedValue={data.treadDepth.main}
//                 onChange={(value) =>
//                   handleTreadDepthChange(position, "main", value)
//                 }
//                 numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
//                 color="red"
//               />
//               <div className="mt-1">
//                 <NumberSelector
//                   selectedValue={data.treadDepth.decimal}
//                   onChange={(value) =>
//                     handleTreadDepthChange(position, "decimal", value)
//                   }
//                   numbers={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]}
//                   color="blue"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-red-600 text-white p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-bold">COCKPIT</h1>
//           <div className="text-sm">
//             <span>ระบบสรรหาบุคลากรภายนอก | </span>
//             <span>ออกจากระบบ</span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto p-6">
//         <h1 className="text-3xl font-semibold mb-2 text-center">
//           ระบบตรวจสอบยานพาหนะ
//         </h1>
//         <h2 className="text-xl font-semibold mb-6 text-center">
//           COCKPIT ตรวจเช็คความปลอดภัยเบื้องต้น
//         </h2>

//         <div className="bg-white rounded-lg shadow-sm p-12 mb-6">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex items-center gap-4">
//               <h1 className="text-2xl font-bold text-gray-800">
//                 COCKPIT ตรวจเช็คความปลอดภัยเบื้องต้น
//               </h1>
//               <div className="flex gap-2">
//                 <span className="text-gray-600">รหัสสาขา:</span>
//                 <input
//                   type="text"
//                   className="border border-gray-300 rounded px-2 py-1 w-32"
//                   placeholder=""
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <span className="text-gray-600">No.:</span>
//               <input
//                 type="text"
//                 className="border border-gray-300 rounded px-2 py-1 w-32"
//                 placeholder=""
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-12 gap-6">
//             {/* Left Column - Form Fields */}
//             <div className="col-span-9">
//               <div className="grid grid-cols-2 gap-6">
//                 {/* Date and Time Row */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     วัน/เดือน/ปี <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     เวลา <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Location and Shift Row */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     เลขทม. <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     กะเช้า <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Inspector and Details Row */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     ยี่ห้อรถ
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     รุ่นรถ
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 {/* Master Key Row */}
//                 <div className="col-span-2">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     เมอร์โทรศัพท์
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Status */}
//             <div className="col-span-3">
//               <div className="bg-gray-50 rounded-lg p-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-6">
//                   สถานะทั้วไป
//                 </h3>

//                 <div className="space-y-4">
//                   {/* Checkbox 1 */}
//                   <div
//                     className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
//                     onClick={() => handleStatusChange("needMaintenance")}
//                   >
//                     <div
//                       className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
//                         statusChecks.needMaintenance
//                           ? "bg-red-500 border-red-500"
//                           : "border-gray-300 bg-white"
//                       }`}
//                     >
//                       {statusChecks.needMaintenance && (
//                         <Check className="w-4 h-4 text-white" />
//                       )}
//                     </div>
//                     <span className="text-gray-700 font-medium">
//                       ควรน่ารู้รักษาทำให้
//                     </span>
//                   </div>

//                   {/* Checkbox 2 */}
//                   <div
//                     className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
//                     onClick={() => handleStatusChange("needReview")}
//                   >
//                     <div
//                       className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
//                         statusChecks.needReview
//                           ? "bg-yellow-500 border-yellow-500"
//                           : "border-gray-300 bg-white"
//                       }`}
//                     >
//                       {statusChecks.needReview && (
//                         <Check className="w-4 h-4 text-white" />
//                       )}
//                     </div>
//                     <span className="text-gray-700 font-medium">
//                       ควรตรวจเช็คพิมพ์ใดอนาคต
//                     </span>
//                   </div>

//                   {/* Checkbox 3 */}
//                   <div
//                     className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
//                     onClick={() => handleStatusChange("normal")}
//                   >
//                     <div
//                       className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
//                         statusChecks.normal
//                           ? "bg-green-500 border-green-500"
//                           : "border-gray-300 bg-white"
//                       }`}
//                     >
//                       {statusChecks.normal && (
//                         <Check className="w-4 h-4 text-white" />
//                       )}
//                     </div>
//                     <span className="text-gray-700 font-medium">ปกติ</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//           <div className="max-w-7xl mx-auto p-6 bg-gray-50">
//             {/* Header */}
//             <div className="bg-yellow-400 rounded-lg px-4 py-3 mb-6 flex items-center gap-3">
//               <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
//                 1
//               </div>
//               <h2 className="text-lg font-bold text-gray-800">ยาง (Tires)</h2>
//             </div>

//             <div className="space-y-6">
//               {/* Front Tires */}
//               <div className="grid grid-cols-2 gap-6">
//                 <TireSection
//                   title="ยางหน้า ซ้าย"
//                   position="frontLeft"
//                   data={tireData.frontLeft}
//                 />
//                 <TireSection
//                   title="ยางหน้า ขวา"
//                   position="frontRight"
//                   data={tireData.frontRight}
//                 />
//               </div>

//               {/* Rear Tires */}
//               <div className="grid grid-cols-2 gap-6">
//                 <TireSection
//                   title="ยางหลัง ซ้าย"
//                   position="rearLeft"
//                   data={tireData.rearLeft}
//                 />
//                 <TireSection
//                   title="ยางหลัง ขวา"
//                   position="rearRight"
//                   data={tireData.rearRight}
//                 />
//               </div>

//               {/* PSI Reading Section */}
//               <div className="bg-white rounded-lg border border-gray-200 p-4">
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm font-medium">
//                     แรงดันลมยางห้วงดี้น (PSI)
//                   </span>
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={psiReadable}
//                       onChange={(e) => setPsiReadable(e.target.checked)}
//                       className="w-4 h-4"
//                     />
//                     <span className="text-sm">เข้มแล้ว</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={psiReading}
//                     onChange={(e) => setPsiReading(e.target.value)}
//                     placeholder="PSI"
//                     className="border border-gray-300 rounded px-3 py-1 text-sm w-20"
//                   />
//                   <button className="bg-gray-600 text-white px-4 py-1 rounded text-sm">
//                     ยางอะไหล่ (เดิมพารุ่น)
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Submit Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
//             ยกเลิก
//           </button>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
//             บันทึก
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
