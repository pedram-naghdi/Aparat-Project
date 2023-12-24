"use client"
import { useAtomValue } from 'jotai'
import {SIDEBAR_ATOM} from '@/app/jotai'
import Menu from '@/components/sidebar/menu'

const Main = (props) => {

    const openSidebar : boolean  = useAtomValue(SIDEBAR_ATOM)
    
    return (
        <main className={`mt-[147px] md:mt-[65px] flex `} open={!openSidebar}>
          <aside className={`bg-gray-100 p-4 shadow-sm min-h-[calc(100vh-109px)] transition-all ease duration-500 ${openSidebar ? 'w-[200px]' : 'w-[70px]'}`}>
            <Menu openSidebar={openSidebar}/>
          </aside>
          <div className={`wrapper p-8 transition-all ease duration-500 ${openSidebar ? 'w-[calc(100%-200px)]' : 'w-[calc(100%-70px)]'}`}>{props.children}</div>
        </main>
    )
}

export default Main