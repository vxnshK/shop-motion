import { Mars, ReceiptText, Venus } from 'lucide-react';

export default function ScreenCategories() {
  const screenCategoriesList = [
    { name: 'All', icon: <ReceiptText size={15} />, active: true },
    { name: 'Male', icon: <Mars size={15} />, active: false },
    { name: 'Female', icon: <Venus size={15} />, active: false },
  ];

  return (
    <div className='flex gap-4 items-center'>
      {screenCategoriesList.map((item) => (
        <div key={item.name} className='relative'>
          <div
            className={`flex items-center gap-[4px] cursor-pointer ${
              item.active ? 'text-black' : 'text-gray-500 opacity-75'
            } hover:text-black hover:bg-gray-200 bg-gray-100 transition-all shadow-sm px-4 py-1 rounded-4xl`}
          >
            {item.icon}
            <span className='text-xs font-bold'>{item.name}</span>
          </div>
          {item.active && <hr className='w-8 h-1 bg-blue-500 absolute -bottom-6.5 left-[50%] -translate-x-[50%]' />}
        </div>
      ))}
    </div>
  );
}
