"use client"; // if in Next.js App Router

const SidebarItems = () => {
  return (
    <div>
      <NavItems />
      <QuickActions />
      <LastOrdersList />
    </div>
  );
};

export default SidebarItems;

// ==========================================================================

import { motion } from "motion/react";
import { Zap, Compass, ShoppingCart, Gift, Lightbulb } from "lucide-react";

export const NavItems = () => {
  const navItemLinks = [
    { name: "Popular Products", icon: <Zap size={15} />, active: false },
    { name: "Explore Now", icon: <Compass size={15} />, active: true },
    { name: "Clothing Store", icon: <ShoppingCart size={15} />, active: false },
    { name: "Gifts and Living", icon: <Gift size={15} />, active: false },
    { name: "Inspiration", icon: <Lightbulb size={15} />, active: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 80 } },
  };

  return (
    <motion.div
      className="flex flex-col gap-3 my-4 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {navItemLinks.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          className={`flex items-center gap-[10px] cursor-pointer font-medium py-2 px-4 rounded-4xl
            ${item.active && "bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition-colors"}
            ${!item.active && "hover:bg-neutral-400 hover:text-white transition-colors"}
          `}
        >
          {item.icon}
          <span>{item.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ==========================================================================

import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const QuickActions = () => {
  const quickActionLinks = ['Request for product', 'Add member'];

  return (
    <div className='py-8 my-8 px-8 border-t-[1px] border-b-[1px] border-gray-300'>
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

// ==========================================================================

export const LastOrdersList = () => {
  const lastOrderItemsList = ['DSC Nike', 'Outwear dwedwedwewe', 'Alam'];

  return (
    <div className='my-4 px-8'>
      <div className='flex items-center gap-[5px] mb-2 font-medium'>
        <span className='text-sm text-gray-500'>Last Orders</span>
        <span>37</span>
      </div>

      <div className='flex flex-col gap-2'>
        {lastOrderItemsList.map((item) => {
          return (
            <div
              key={item}
              className='flex items-center gap-[10px] cursor-pointer font-medium'
            >
              <Image
                width={20}
                height={20}
                alt=''
                src='/'
                className='rounded-4xl'
              />
              <span>
                {item.split('').length > 7 ? `${item.slice(0, 7)}...` : item}
              </span>
              <span className='text-sm text-gray-500'>view order</span>
            </div>
          );
        })}
      </div>

      <Link href='#' className='text-sm text-gray-500 text-center block mt-4'>
        See all
      </Link>
    </div>
  );
};
