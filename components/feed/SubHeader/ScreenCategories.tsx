import { Mars, ReceiptText, Venus } from 'lucide-react';

export default function ScreenCategories() {
  const screenCategoriesList = [
    { name: 'All', icon: <ReceiptText size={15} />, active: true },
    { name: 'Male', icon: <Mars size={15} />, active: false },
    { name: 'Female', icon: <Venus size={15} />, active: false },
  ];

  return (
    <div className='flex gap-4 items-center overflow-hidden'>
      {screenCategoriesList.map((item) => (
        <div key={item.name}>
          <div
            className={`flex items-center gap-[4px] cursor-pointer ${
              item.active ? 'text-black' : 'text-gray-500 opacity-90'
            } hover:text-black hover:bg-gray-200 bg-gray-100 transition-all shadow-sm px-4 py-1 rounded-4xl mb-2`}
          >
            {item.icon}
            <span className='text-xs font-bold'>{item.name}</span>
          </div>
          {item.active && <hr className='w-5 h-1 bg-blue-400 mx-auto' />}
        </div>
      ))}
    </div>
  );
}
