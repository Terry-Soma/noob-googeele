import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const search = e =>{
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`)
    }
    const searchInputRef = useRef(null);
  return (
    <header className='sticky top-0 bg-white'>
        <div className="flex w-full p-6 items-center">
        <Image 
        src='https://www.google.mn/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        alt="Google"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={()=> router.push('/')}
        />
        <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg py-3 px-6 ml-10 mr-5 max-w-3xl items-center '>
            <input type='text' ref={searchInputRef} className="flex-grow w-full focus:outline-none" />

            <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
            onClick={()=> (searchInputRef.current.value="")}
            />
            <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'/>
            <SearchIcon className='h-6  text-blue-500 hidden sm:inline:flex'/>
            <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Avatar url="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=90&q=90" className="ml-auto"/>
        </div>
        <HeaderOptions/>
    </header>
  )
}

export default Header