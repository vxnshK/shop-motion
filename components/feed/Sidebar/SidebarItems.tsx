'use client'; // if in Next.js App Router

import { motion } from 'motion/react';

import { LastOrdersList } from './LastOrdersList';
import { NavItems } from './NavItems';
import { QuickActions } from './QuickActions';

const SidebarItems = () => {
  return (
    <div className='max-h-[650px] overflow-y-scroll'>
      <NavItems />

      <motion.hr
        className='border-t-[0.8px] border-b-[0.8px] border-gray-300 my-8 w-[90%] mx-auto'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'center' }}
      />

      <QuickActions />

      <motion.hr
        className='border-t-[0.8px] border-b-[0.8px] border-gray-300 my-8 w-[90%] mx-auto'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'center' }}
      />

      <LastOrdersList />
    </div>
  );
};

export default SidebarItems;
