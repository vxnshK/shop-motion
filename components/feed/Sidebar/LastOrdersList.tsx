import Image from "next/image";
import Link from "next/link";

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