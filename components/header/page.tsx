"use client"

import { useAtom } from 'jotai'
import {jotaiOpenSidebar} from '@/app/jotai'
import SearchForm from "../search/searchform"
import ProfileLinks from "../profile/profile_links"

const Header = () => {

    const [openSidebar , setOpenSidebar] = useAtom(jotaiOpenSidebar)
    
    return (
        <header className="py-2 fixed w-full shadow-sm bg-white top-0">
            <div className="px-4 flex gap-2 justify-between items-center flex-col md:flex-row">
                <div className="flex gap-5 items-center">
                    <div className="menu-icon w-[28px] cursor-pointer" open={!openSidebar} onClick={() => {setOpenSidebar(!openSidebar)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="/" title="آپارات">
                        <img src="/assets/img/logo.png" alt="آپارات" className="logo" />
                    </a>
                </div>
                <SearchForm />
                <div className="flex gap-2 items-center">
                    <a href="/AddVideo" title="افزودن ویدئو جدید" className="flex items-center p-2 rounded-full gap-2 border-2 border-blue-600 text-xs hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>افزودن ویدئو جدید</span>
                    </a>
                    <ProfileLinks />
                </div>
            </div>
        </header>
    )
}

export default Header