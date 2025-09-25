import ScreenCategories from './ScreenCategories'
import Filters from './Filters'
import SearchBar from './SearchBar'

export default function SubHeader() {
  return (
    <div className='px-6 py-2 flex items-center justify-between'>
      <span className='text-4xl font-medium'>Explore</span>
      <ScreenCategories />
      <div className='flex items-center gap-[6px]'>
        <Filters />
        <SearchBar />
      </div>
    </div>
  )
}
