import Logo from '../../root/Logo';
import LogOutButton from './LogOutButton';
import SidebarItems from './SidebarItems';

function Sidebar() {
  return (
    <div className='flex flex-col items-center justify-between h-screen border-r-[1px] border-gray-300 px-6 py-10'>
      <Logo width={80} />
      <SidebarItems />
      <LogOutButton />
    </div>
  );
}

export default Sidebar;
