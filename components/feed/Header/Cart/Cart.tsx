import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Cart() {
  return (
    <div className='flex items-center gap-2 bg-gray-200 hover:bg-gray-500 hover:text-white transition-all cursor-pointer rounded-xl px-4 py-2'>
      <Link
        href='#'
        className='font-medium flex items-center gap-[4px]'
      >
        <ShoppingCart size={15} />
        <span className='text-sm'>Cart</span>
      </Link>

      <div className='flex items-center gap-2'>
        <Image className='rounded-3xl' src='/' alt='' height={12} width={12} />
        <span className='text-xs'>+8</span>
      </div>
    </div>
  );
}

export default Cart;
