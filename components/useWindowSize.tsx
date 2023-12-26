"use client"

import { useAtom } from 'jotai'
import { SIDEBAR_ATOM } from '@/app/jotai'
import { useEffect } from 'react';

const useWindowSize = () => {

    const [, setOpenSidebar] = useAtom(SIDEBAR_ATOM)

    useEffect(() => {

        // Check window width on page load
        const widthload = window.innerWidth;
        if (widthload < 767) {
            setOpenSidebar(false)
        }
        else {
            setOpenSidebar(true)
        }

        // Check window width on page resize
        const handleWindowResize = () => {
            if (window.innerWidth < 767) {
                setOpenSidebar(false)
            }
            else {
                setOpenSidebar(true)
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])
}

export default useWindowSize