import Header from '@/components/feed/Header/Header';
import ShoppingItemsGrid from '@/components/feed/ShoppingItemsGrid/ShoppingItemsGrid';
import Sidebar from '@/components/feed/Sidebar/Sidebar';
import SubHeader from '@/components/feed/SubHeader/SubHeader';

function page() {
  return (
    <div className="bg-[url('/grid_bg.jpg')] w-screen h-screen bg-contain">
      <div className="absolute inset-0 bg-white/60"></div>
      <div className='z-1 flex border border-gray-300 rounded-2xl bg-white h-[92vh] w-[95vw] overflow-hidden shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Sidebar />
        <div className='flex-4'>
          <div className='border-b-[1px] border-gray-300'>
            <Header />
            <SubHeader />
          </div>
          <ShoppingItemsGrid />
        </div>
      </div>
    </div>
  );
}

export default page;

