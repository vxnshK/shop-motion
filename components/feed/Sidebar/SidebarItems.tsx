'use client'; // if in Next.js App Router

import { LastOrdersList } from './LastOrdersList';
import { NavItems } from './NavItems';
import { QuickActions } from './QuickActions';


const SidebarItems = () => {
  return (
    <div>
      <NavItems />
      <hr className='border-t-[1px] border-b-[1px] border-gray-200 my-8 w-[90%] mx-auto' />
      <QuickActions />
      <hr className='border-t-[1px] border-b-[1px] border-gray-200 my-8 w-[90%] mx-auto' />
      <LastOrdersList />
    </div>
  );
};

export default SidebarItems;

