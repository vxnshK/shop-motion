import Logo from '../../root/Logo';
import LogOutButton from './LogOutButton';
import SidebarItems from './SidebarItems';

function Sidebar() {
  return (
    <div className='flex-0.8 flex flex-col items-center gap-8 justify-between border-r-[1px] border-gray-300 px-4 py-8'>
      <Logo width={80} />
      <SidebarItems />
      <LogOutButton />
    </div>
  );
}

export default Sidebar;
