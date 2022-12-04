import Image from 'next/image';
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 border grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src='https://links.papareact.com/qd3'
                alt=''
                fill
                className='object-contain object-left'
            />
        </div>

        {/* mid */}
        <div className='flex items-center md:border-2 md:shadow-lg border-gray-400 rounded-full p-2'>
            <input className='flex-grow bg-transparent outline-none text-sm text-gray-600 pl-2 border-0' type="text"  placeholder='Start your search' />
            <MagnifyingGlassIcon className='hidden md:inline-flex h-6 bg-blue-500 text-white rounded-full cursor pinter md:mx-2'/>
        </div>
        
        {/* rght */}
        <div className='flex items-center space-x-2 justify-end'>
            <p className='hidden md:inline cursor-pointer'>Become a host</p>
            <GlobeAltIcon className='h-8'/>

            <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                <Bars3Icon className='h-6'/>
                <UserCircleIcon  className='h-6'/>
            </div>
        </div>

    </header>
  )
}

export default Header;