"use client"
import { useAtom } from 'jotai'
import {SIDEBAR_ATOM} from '@/app/jotai'
import Menu from './Menu'
import useWindowSize from '@/components/useWindowSize'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const Main = (props) => {

  useWindowSize()
  const [openSidebar, setOpenSidebar] = useAtom(SIDEBAR_ATOM)

  const queryClient = new QueryClient({ defaultOptions : {
    queries : { refetchOnWindowFocus : false}
  }})
    
  return (
      <main className="mt-[147px] md:mt-[65px] flex">
        <aside className={`bg-gray-100 p-4 shadow-sm min-h-[calc(100vh-109px)] transition-all ease duration-500 ${openSidebar ? 'w-[200px]' : 'w-[70px]'}`}>
          <Menu openSidebar={openSidebar}/>
        </aside>
        <div className={`wrapper p-8 transition-all ease duration-500 ${openSidebar ? 'w-[calc(100%-200px)]' : 'w-[calc(100%-70px)]'}`}>
          <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
        </div>
      </main>
  )
}

export default Main