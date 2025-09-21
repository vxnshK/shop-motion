import { motion } from 'motion/react';
import { Zap, Compass, ShoppingCart, Gift, Lightbulb } from 'lucide-react';

export const NavItems = () => {
  const navItemLinks = [
    { name: 'Popular Products', icon: <Zap size={15} />, active: false },
    { name: 'Explore Now', icon: <Compass size={15} />, active: true },
    { name: 'Clothing Store', icon: <ShoppingCart size={15} />, active: false },
    { name: 'Gifts and Living', icon: <Gift size={15} />, active: false },
    { name: 'Inspiration', icon: <Lightbulb size={15} />, active: false },
  ];

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
      className='flex flex-col gap-3 my-4 px-8'
      variants={containerVariants}
      initial='hidden'
      animate='show'
    >
      {navItemLinks.map((item) => (
        <motion.div
          key={item.name}
          variants={itemVariants}
          className={`flex items-center gap-[10px] cursor-pointer font-medium py-2 px-4 rounded-4xl
            ${
              item.active &&
              'bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition-colors'
            }
            ${
              !item.active &&
              'hover:bg-neutral-400 hover:text-white transition-colors'
            }
          `}
        >
          {item.icon}
          <span>{item.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
