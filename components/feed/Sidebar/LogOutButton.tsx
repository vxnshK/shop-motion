import { LogOut } from 'lucide-react';
import React from 'react';

function LogOutButton() {
  return (
    <div className='flex gap-[8px] justify-center items-center w-full text-md font-medium bg-gray-200 text-black hover:bg-rose-500 hover:text-white transition-all cursor-pointer px-6 py-2 rounded-3xl'>
      <LogOut size={13} />
      <span>Log out</span>
    </div>
  );
}

export default LogOutButton;
