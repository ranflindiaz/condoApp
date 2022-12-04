import Image from 'next/image';

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center m-2 space-x-2 cursor-pointer hover:bg-gray-100 hover:scale-105 hover:font-semibold rounded-lg transition duration-150 ease-out'>
        <div className='relative h-16 w-16'>
            <Image 
                className='w-80 h-80 rounded-lg'
                src={img}
                fill
                alt=''
            />
        </div>
        <div>
            <h2>{location}</h2>
            <h3>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard