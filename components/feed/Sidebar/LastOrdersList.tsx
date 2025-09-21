import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export const LastOrdersList = () => {
  const lastOrderItemsList = ['DSC Nike', 'Outwear dwedwedwewe', 'Alam'];

  const containerVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80 },
    },
  };

  return (
    <motion.div
      className='my-4 px-8'
      variants={containerVariants}
      initial='hidden'
      animate='show'
    >
      <motion.div
        variants={itemVariants}
        className='flex items-center gap-[5px] mb-2 font-medium'
      >
        <span className='text-sm text-gray-500'>Last Orders</span>
        <span>37</span>
      </motion.div>

      <div className='flex flex-col gap-2'>
        {lastOrderItemsList.map((item) => {
          return (
            <motion.div
              key={item}
              variants={itemVariants}
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
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={itemVariants}>
        <Link href='#' className='text-sm text-gray-500 text-center block mt-4'>
          See all
        </Link>
      </motion.div>
    </motion.div>
  );
};
