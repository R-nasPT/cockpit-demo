import { ClipboardCheck, FileText, CheckCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function MenuContent() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      icon: <ClipboardCheck className="h-16 w-16 text-white" />,
      title: 'รับรถ',
      onClick: () => console.log('รับรถ clicked'),
    },
    {
      id: 2,
      icon: <FileText className="h-16 w-16 text-white" />,
      title: 'เสนอราคา',
      onClick: () => navigate('/vehicle-inspection'),
    },
    {
      id: 3,
      icon: <CheckCircle className="h-16 w-16 text-white" />,
      title: 'ติดตามรายการ',
      onClick: () => console.log('ติดตามรายการ clicked'),
    },
    {
      id: 4,
      icon: <LogOut className="h-16 w-16 text-white" />,
      title: 'ออกจากระบบ',
      onClick: () => navigate('/'),
    },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#fff200]">
      {/* Header */}
      <div className="flex flex-shrink-0 justify-center py-6">
        <h1 className="text-4xl font-bold tracking-wider text-black md:text-5xl">
          COCKPIT
        </h1>
      </div>

      {/* Menu Grid */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-6">
        <div className="grid w-full max-w-lg grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={item.onClick}
              className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border-4 border-white bg-red-600 p-6 shadow-lg transition-colors duration-200 hover:bg-red-700"
            >
              <div className="mb-3">{item.icon}</div>
              <h2 className="text-center text-xl leading-tight font-bold text-white">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
