'use client';

import Header from '@/components/feed/Header/Header';
import ShoppingItemsGrid from '@/components/feed/ShoppingItemsGrid/ShoppingItemsGrid';
import Sidebar from '@/components/feed/Sidebar/Sidebar';
import SubHeader from '@/components/feed/SubHeader/SubHeader';
import { motion } from 'motion/react';

const mainContainerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1]
    } 
  },
};

function page() {
  return (
    <div className="bg-[url('/grid_bg.jpg')] w-screen h-screen bg-contain">
      <div className="absolute inset-0 bg-white/75"></div>
      <motion.div
        className='z-1 flex border border-gray-300 rounded-2xl bg-white h-[92vh] w-[95vw] overflow-hidden shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
        variants={mainContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Sidebar />
        <div className='flex-4'>
          <div className='border-b-[1px] border-gray-300 static'>
            <Header />
            <SubHeader />
          </div>
          <div className='overflow-y-scroll h-full pb-36 xl:pb-32'>
            <ShoppingItemsGrid />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default page;
