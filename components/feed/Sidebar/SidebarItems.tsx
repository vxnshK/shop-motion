'use client'; // if in Next.js App Router

import { LastOrdersList } from './LastOrdersList';
import { NavItems } from './NavItems';
import { QuickActions } from './QuickActions';


const SidebarItems = () => {
  return (
    <div className='max-h-[650px] overflow-y-scroll'>
      <NavItems />
      <hr className='border-t-[0.8px] border-b-[0.8px] border-gray-300 my-8 w-[90%] mx-auto' />
      <QuickActions />
      <hr className='border-t-[0.8px] border-b-[0.8px] border-gray-300 my-8 w-[90%] mx-auto' />
      <LastOrdersList />
    </div>
  );
};

export default SidebarItems;

