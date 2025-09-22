import Image from 'next/image'
import ProfilePic from '@/public/profile.jpg'

function Profile() {
  return (
    <div className='w-[40px] h-[40px] overflow-hidden rounded-3xl flex items-center justify-center'>
      <Image src={ProfilePic} alt="" width={50} height={50} className='' />
    </div>
  )
}

export default Profile