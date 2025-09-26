import Image from 'next/image';
import { ExternalLink, Heart } from 'lucide-react';
import Grid1 from '@/public/grid/grid1.png';
import Grid2 from '@/public/grid/grid2.png';
import Grid3_1 from '@/public/grid/grid3.1.png';
import Grid4_2 from '@/public/grid/grid4.2.png';
import Fav_1 from '@/public/grid/fav_1.png';
import Fav_2 from '@/public/grid/fav_2.png';
import Grid8 from '@/public/grid/grid8.png';

export default function ShoppingItemsGrid() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 px-4 py-4">
      <div className="flex flex-col gap-4">
        <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-3xl">
          <Image src={Grid1} alt="Grid1" fill className="object-cover object-top" />
          <button className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-white/60 backdrop-blur-xs px-4 py-1 rounded-3xl shadow-lg transition-all hover:bg-white/90 cursor-pointer">
            Get Discount
          </button>
        </div>
        <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-3xl">
          <Image src={Grid2} alt="Grid2" fill className="object-cover object-top" />
          <ExternalLink size='30' className='absolute right-[0px] top-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-white/92 hover:bg-white transition-all p-2 cursor-pointer rounded-3xl' />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-[1.2] h-40 sm:h-56 w-full sm:w-56 overflow-hidden rounded-3xl relative">
            <Image src={Fav_1} alt="Fav_1" height={1024} width={1024} className="object-cover" />
            <Heart size='30' className='absolute right-[0px] top-[30px] transform -translate-x-1/2 -translate-y-1/2 bg-white/92 hover:bg-white transition-all p-2 cursor-pointer rounded-3xl' />
            <button className="font-medium text-sm absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-white/60 backdrop-blur-xs px-6 py-2 rounded-3xl shadow-lg transition-all hover:backdrop-blur-sm cursor-pointer">
              Avail offers
            </button>
          </div>

          <div className="flex-1 flex flex-col gap-3 h-40 sm:h-56 w-full sm:w-56 overflow-hidden rounded-3xl p-4 border-gray-300 border-[1.5px]">
            <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#B68969] hover:bg-[#92694b] text-white transition-all rounded-3xl cursor-pointer">
              <span className="text-sm">Favourites</span>
              <Heart size={15} color="red" fill="red" />
              <span className='bg-white text-black px-3 rounded-3xl'>See all</span>
            </div>

            <div className="flex-1 overflow-hidden rounded-3xl">
              <Image src={Fav_2} alt="Fav_2" height={1024} width={1024} className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="h-64 sm:h-[430px] w-full sm:w-1/2 overflow-hidden rounded-3xl relative">
            <Image src={Grid3_1} alt="Grid3_1" fill className="object-cover" />
          </div>
          <div className="h-64 sm:h-[430px] w-full sm:w-1/2 overflow-hidden rounded-3xl relative">
            <Image src={Grid4_2} alt="Grid4_2" fill className="object-cover object-top" />
          </div>
        </div>

        <div className="h-48 sm:h-64 w-full aspect-auto overflow-hidden rounded-3xl relative">
          <Image src={Grid8} alt="Grid8" fill className="object-cover object-center" />
        </div>
      </div>
    </div>
  );
}
