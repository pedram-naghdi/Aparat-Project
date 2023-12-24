"use client"
import { useAtom, useAtomValue } from 'jotai'
import {SIDEBAR_ATOM} from '@/app/jotai'
import Menu from '@/components/sidebar/menu'

const Main = (props) => {

    const openSidebar  = useAtomValue(SIDEBAR_ATOM)
    
    return (
        <main className={`mt-[147px] md:mt-[65px] flex `} open={!openSidebar}>
          <aside className="bg-gray-100 p-4 shadow-sm">
            <Menu />
          </aside>
          <div className="wrapper p-8">{props.children}</div>
        </main>
    )
}

export default Main