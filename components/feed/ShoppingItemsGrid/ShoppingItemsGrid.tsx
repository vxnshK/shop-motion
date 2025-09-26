import Image from 'next/image';
import { Heart } from 'lucide-react';
import Grid1 from '@/public/grid/grid1.png';
import Grid2 from '@/public/grid/grid2.png';
import Grid3_1 from '@/public/grid/grid3.1.png';
import Grid4_2 from '@/public/grid/grid4.2.png';
import Fav_1 from '@/public/grid/fav_1.png';
import Fav_2 from '@/public/grid/fav_2.png';
import Grid8 from '@/public/grid/grid8.png';

export default function ShoppingItemsGrid() {
  return (
    <div className='flex items-start justify-between gap-4 p-4 overflow-y-scroll max-h-[647px]'>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='h-45 overflow-hidden rounded-4xl relative'>
          <Image src={Grid1} alt='Grid1' fill className='object-cover object-top' />
        </div>
        <div className='h-45 overflow-hidden rounded-4xl'>
          <Image src={Grid2} alt='Grid2' height={1024} width={1024} />
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex-[1.2] h-56 w-56 overflow-hidden rounded-4xl'>
            <Image src={Fav_1} alt='Fav_1' height={1024} width={1024} />
          </div>

          <div className='flex-1 flex flex-col gap-3 h-56 w-56 overflow-hidden rounded-4xl p-4 border-gray-300 border-[1.5px]'>
            <div className='flex items-center justify-center gap-[8px] px-4 py-3 bg-amber-200 rounded-3xl cursor-default'>
              <span className='text-sm'>Favourites</span>
              <Heart size={15} color='#fe95aa' fill="#fe95aa" />
            </div>

            <div className='flex-[1.2] h-34 w-56 overflow-hidden rounded-4xl'>
              <Image src={Fav_2} alt='Fav_2' height={1024} width={1024} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 flex flex-col gap-3'>
        <div className=' flex items-start gap-4'>
          <div className="h-[430px] w-68 overflow-hidden rounded-4xl relative">
            <Image
              src={Grid3_1}
              alt="Grid3_1"
              fill
              className="object-cover"
            />
          </div>
          <div className="h-[430px] w-64 overflow-hidden rounded-4xl relative">
            <Image
              src={Grid4_2}
              alt="Grid4_2"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className='h-42 overflow-hidden rounded-4xl relative'>
          <Image src={Grid8} alt='Grid8' fill className='object-cover object-center' />
        </div>
      </div>
    </div>
  );
}
