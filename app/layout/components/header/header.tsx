"use client"

import { useAtom } from 'jotai'
import { SIDEBAR_ATOM } from '@/app/jotai'
import SearchForm from "./SearchForm"
import Profile from "./Profile"

const Header = () => {
    
    const [openSidebar, setOpenSidebar] = useAtom(SIDEBAR_ATOM)

    return (
        <header className="py-2 fixed w-full shadow-sm bg-white top-0 z-10">
            <div className="px-4 flex gap-2 justify-between items-center flex-col md:flex-row">
                <div className="flex gap-3 items-center">
                    <div className={`menu-icon hover:bg-gray-100 rounded-full h-[40px] text-center flex flex-wrap p-[10px] items-center w-[40px] cursor-pointer absolute top-[100px] right-[15px] md:relative md:top-0 md:right-0  ${openSidebar ? '': 'bg-gray-100'}`} onClick={() => { setOpenSidebar(!openSidebar) }}>
                        <span className='block w-full h-[2px] bg-[#151515] rounded-[5px]'></span>
                        <span className='block w-full h-[2px] bg-[#151515] rounded-[5px]'></span>
                        <span className='block w-full h-[2px] bg-[#151515] rounded-[5px]'></span>
                    </div>
                    <a href="/" title="آپارات">
                        <img src="/assets/img/logo.png" alt="آپارات" className="h-[26px]" />
                    </a>
                </div>
                <SearchForm />
                <div className="flex gap-2 items-center mr-auto md:mr-0">
                    <a href="/add" title="افزودن ویدئو جدید" className="flex items-center py-2 px-3 rounded-full gap-1 border-2 border-blue-600 text-xs hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>افزودن ویدئو جدید</span>
                    </a>
                    <Profile />
                </div>
            </div>
        </header>
    )
}

export default Header