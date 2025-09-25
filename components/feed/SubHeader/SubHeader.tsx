import ScreenCategories from './ScreenCategories'
import Filters from './Filters'
import SearchBar from './SearchBar'

export default function SubHeader() {
  return (
    <div className='px-6 pt-2 pb-4 flex items-center justify-between border-b-[1px] border-gray-300'>
      <span className='text-4xl font-medium'>Explore</span>
      <ScreenCategories />
      <div className='flex items-center gap-[10px]'>
        <Filters />
        <SearchBar />
      </div>
    </div>
  )
}
