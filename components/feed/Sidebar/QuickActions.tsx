import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export const QuickActions = () => {
  const quickActionLinks = ['Request for product', 'Add member'];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className='my-4 px-8'
    >
      <motion.div
        variants={itemVariants}
        className='text-sm text-gray-500 font-medium mb-2'
      >
        Quick Links
      </motion.div>

      <div className='flex flex-col gap-2'>
        {quickActionLinks.map((item) => {
          return (
            <motion.div
              key={item}
              variants={itemVariants}
              className='flex items-center gap-[10px] cursor-pointer font-medium'
            >
              <Plus size={20} className='p-1 bg-gray-200 rounded-sm' />
              <span>{item}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
