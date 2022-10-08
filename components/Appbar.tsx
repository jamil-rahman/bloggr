import Image from 'next/future/image'
import Link from "next/link";
import logo from "../public/bloggr.png";


export default function Appbar() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center md:space-x-5'>
       <Link href="/">
       <Image src={logo} className="w-44 h-32 object-contain cursor-pointer" alt='Bloggr Logo'/>
       </Link>
      <div className='bg-white-600 border-t md:border-none h-16 overflow-hidden flex justify-around fixed bottom-0 w-full md:inline-flex md:relative md:bg-white items-center'>
        <h3 className='cursor-pointer'>About</h3>
        <h3 className='cursor-pointer'>Contact</h3>
        
      </div>
      </div>
      
      
      <div className='flex items-center space-x-5 text-red-400'>
        <h3>Sign In</h3>
        <h3 className='border text-center border-red-400 px-4 py-1 rounded-full cursor-pointer hover:bg-red-400 hover:text-white'>Get Started</h3>
      </div>
    </header>
  )
}
