import Image from 'next/image';

function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out pt-5'>
        <div className='relative h-80 w-80'>
            <Image 
                src={img}
                fill
                alt=''
                className='rounded-lg'
            />
        </div>
        <div>
          <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    </div>
  )
}

export default MediumCard