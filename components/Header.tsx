import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline' 

function Header() {
  const session = false
  
  return (
  <header className='sticky top-0 z-30 flex items-center justify-between w-full bg-[#e7ecee] p-4 '>
    <div className='flex items-center justify-center md:w-1/5'>
     <Link href="/">
       <div className='relative w-5 h-10 transition opacity-75 cursor-pointer hover:opacity-100'>
          <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain"/>
        </div>
      </Link>
    </div>
    <div className='items-center justify-center flex-1 hidden space-x-8 md:flex'>
      <a className='headerLink'>Product</a>
      <a className='headerLink'>Explore</a>
      <a className='headerLink'>Support</a>
      <a className='headerLink'>Bisiness</a>
    </div> 
    <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <SearchIcon className='headerIcon'/>
        <Link href='/checkout'>
        <div className='relative cursor-pointer'>
          <span className='absolute z-50 flex items-center justify-center w-4 h-4 text-white rounded-full -right-1 top-1 bg-gradient-to-r from-pink-500 to-violet-500 text-[10px]'>
            5
          </span>
          <ShoppingBagIcon className='headerIcon'/>
        </div>
        </Link>

        {session ? (
          <Image
          src={
            session.user?.image || 
            "https://www.gravatar.com/avatar/0000000000000000000000000000000000000000?d=mp&f=y"
          }
          alt=""
          className='rounded-full cursor-pointer'
          width={34}
          height={34}
          // onClick={() => signOut()}
          />
        ) : (
          <UserIcon 
          className='headerIcon'
          // onClick={() => signIn()}
          /> 
        )}
    </div>
  </header>
  );
}

export default Header 