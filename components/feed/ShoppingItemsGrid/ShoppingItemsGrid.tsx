'use client';

import Image from 'next/image';
import { ExternalLink, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import Grid1 from '@/public/grid/grid1.png';
import Grid2 from '@/public/grid/grid2.png';
import Grid3_1 from '@/public/grid/grid3.1.png';
import Grid3_2 from '@/public/grid/grid3.2.png';
import Grid4_1 from '@/public/grid/grid4.1.png';
import Grid4_2 from '@/public/grid/grid4.2.png';
import Fav_1 from '@/public/grid/fav_1.png';
import Fav_2 from '@/public/grid/fav_2.png';
import Grid8 from '@/public/grid/grid8.png';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: -150,
    z: -600,
    rotateX: 55,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 25,
    },
  },
};

type DualImageProps = {
  image1: StaticImageData | string;
  image2: StaticImageData | string;
  alt?: string;
  dot1Color?: string;
  dot2Color?: string;
};

const DualImage: React.FC<DualImageProps> = ({
  image1,
  image2,
  alt = '',
  dot1Color = 'white',
  dot2Color = 'black',
}) => {
  const [activeImage, setActiveImage] = useState(image1);

  return (
    <div className="h-64 sm:h-[430px] w-full sm:w-1/2 overflow-hidden rounded-3xl relative border-[1.5px] border-gray-300">
      <motion.div
        key={typeof activeImage === 'string' ? activeImage : activeImage.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0"
      >
        <Image src={activeImage} alt={alt} fill className="object-cover" />
      </motion.div>
      <div className="flex items-center gap-1 absolute left-[35px] top-[25px] transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 px-1 py-1 rounded-3xl">
        <div
          className={`h-5 w-5 rounded-4xl cursor-pointer`}
          style={{ backgroundColor: dot1Color }}
          onClick={() => {if (activeImage !== image1) setActiveImage(image1)}}
        ></div>
        <div
          className={`h-5 w-5 rounded-4xl cursor-pointer`}
          style={{ backgroundColor: dot2Color }}
          onClick={() => {if (activeImage !== image2) setActiveImage(image2)}}
        ></div>
      </div>
      <button className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-blue-700 text-white backdrop-blur-xs px-4 py-1 rounded-3xl shadow-lg transition-all hover:bg-blue-800 cursor-pointer">
        Buy at $36
      </button>
    </div>
  );
};

export default function ShoppingItemsGrid() {
  return (
    <motion.div
      className="grid xl:grid-cols-2 grid-cols-1 gap-4 px-4 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: '1200px' }}
    >
      <div className="flex flex-col gap-4">
        <motion.div 
            className="relative h-48 sm:h-64 w-full overflow-hidden rounded-3xl"
            variants={itemVariants}
        >
          <Image src={Grid1} alt="Grid1" fill className="object-cover object-top" />
          <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-white/60 backdrop-blur-xs px-4 py-1 rounded-3xl shadow-lg transition-all hover:bg-white/90 cursor-pointer">
            Get Discount
          </button>
        </motion.div>
        
        <motion.div 
            className="relative h-48 sm:h-60 w-full overflow-hidden rounded-3xl"
            variants={itemVariants}
        >
          <Image src={Grid2} alt="Grid2" fill className="object-cover object-top" />
          <ExternalLink size='30' className='absolute right-[0px] top-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-white/92 hover:bg-white transition-all p-2 cursor-pointer rounded-3xl' />
        </motion.div>
        
        <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            variants={itemVariants}
        >
          <div className="flex-[1.2] h-40 sm:h-56 w-full sm:w-56 overflow-hidden rounded-3xl relative">
            <Image src={Fav_1} alt="Fav_1" height={1024} width={1024} className="object-cover" />
            <Heart size='30' className='absolute right-[0px] top-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-white/92 hover:bg-white transition-all p-2 cursor-pointer rounded-3xl' />
            <button className="font-medium text-sm absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-white/60 backdrop-blur-xs px-6 py-2 rounded-3xl shadow-lg transition-all hover:backdrop-blur-sm cursor-pointer">
              Avail offers
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-3 h-40 sm:h-56 w-full sm:w-56 overflow-hidden rounded-3xl p-4 border-gray-300 border-[1.5px]">
            <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#B68969] text-white rounded-3xl">
              <div className='flex items-center gap-[4px]'>
                <Heart size={14} color="white" fill="red" />
                <span className="text-sm">Favourites</span>
              </div>
              <span className='bg-white/90 transition-all hover:bg-white text-black px-2 py-1 text-xs font-medium rounded-3xl cursor-pointer'>See all</span>
            </div>

            <div className="flex-1 overflow-hidden rounded-3xl">
              <Image src={Fav_2} alt="Fav_2" height={1024} width={1024} className="object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4"
            variants={itemVariants}
        >
          <DualImage image1={Grid3_2} image2={Grid3_1} />
          <DualImage image1={Grid4_1} image2={Grid4_2} />
        </motion.div>
        
        <motion.div 
            className="h-48 sm:h-64 w-full aspect-auto overflow-hidden rounded-3xl relative"
            variants={itemVariants}
        >
          <Image src={Grid8} alt="Grid8" fill className="object-cover object-center" />
          <ExternalLink size='30' className='absolute right-[0px] top-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-white/92 hover:bg-white transition-all p-2 cursor-pointer rounded-3xl' />
        </motion.div>
      </div>
    </motion.div>
  );
}
