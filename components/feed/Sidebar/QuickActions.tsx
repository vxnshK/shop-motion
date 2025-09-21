import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const QuickActions = () => {
  const quickActionLinks = ['Request for product', 'Add member'];

  return (
    <div className='my-4 px-8'>
      <div className='text-sm text-gray-500 font-medium mb-2'>Quick Links</div>

      <div className='flex flex-col gap-2'>
        {quickActionLinks.map((item) => {
          return (
            <div
              key={item}
              className='flex items-center gap-[10px] cursor-pointer font-medium'
            >
              <Plus size={20} className='p-1 bg-gray-200 rounded-sm' />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
