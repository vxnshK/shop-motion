import Header from '@/components/feed/Header/Header';
import Sidebar from '@/components/feed/Sidebar/Sidebar';

function page() {
  return (
    <div className='flex border border-gray-300 rounded-2xl h-[95vh] w-[97vw] overflow-hidden drop-shadow-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <Sidebar />
      <div className='flex-4'>
        <Header />
      </div>
    </div>
  );
}

export default page;
