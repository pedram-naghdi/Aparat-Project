"use client"
import { useAtom } from 'jotai'
import {jotaiOpenSidebar} from '@/app/jotai'
import Menu from '@/components/sidebar/menu'

const Main = (props) => {

    const [openSidebar , setOpenSidebar] = useAtom(jotaiOpenSidebar)
    
    return (
        <main className="mt-[154px] md:mt-[65px] flex" open={!openSidebar}>
          <aside className="bg-gray-100 p-4 shadow-sm">
            <Menu />
          </aside>
          <div className="wrapper p-8">{props.children}</div>
        </main>
    )
}

export default Main