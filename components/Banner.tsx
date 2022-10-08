import Image from 'next/future/image'
import logo from '../public/logo.png'

export default function Banner() {
  return (
    <div className='flex rounded-lg justify-between items-center py-10 lg:py-4 border-y px-32 border-black bg-orange-100'>
      <div className='px-3 space-y-5'>
        <p className='text-5xl max-w-md font-serif'>
          Let your thoughts be conveyed to the Internet with the help of <span className='font-bold text text-red-400 font-league'>bloggr.</span>
        </p>
        <h2 className='pb-4 max-w-xl italic font-light text-xl'>Bloggr is connecting millions and going strong. Like your freedom of speech, it is free to use!</h2>
      </div>
      
      
      <Image src={logo} alt="bloggr logo" className='hidden md:inline-flex lg:h-full'/>
    </div>
  )
}
