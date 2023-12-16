"use client"
import { useState, useEffect, useMemo } from "react"

const ProfileLinks = () => {

    const [openProfileMenu , SetopenProfileMenu] = useState(false)
    const [auth , SetAuth] = useState(true)

    // useEffect(() => {
    //     let auth = {
    //         isLogin : true,
    //         token: '123'
    //     }

    //     localStorage.setItem('auth' , JSON.stringify(auth))
    // })

    
    useEffect(() => {
        let localStorage_auth
        localStorage_auth = localStorage.getItem("auth");
        localStorage_auth = JSON.parse(localStorage_auth);
    
        if (!localStorage_auth ||!localStorage_auth.isLogin) {
          localStorage.removeItem("auth");
        }
        else {
            SetAuth(localStorage_auth)
        }  
    },[])

    const Logout = () => {
        localStorage.removeItem("auth");
        SetAuth("")
    }
 
    return (
        auth.isLogin ? (
            <>
            <div className="profile_list relative">
                <div className="flex items-center p-2 rounded-full gap-2 border-2 text-white bg-blue-600 border-blue-600 text-xs hover:bg-white hover:text-blue-600 cursor-pointer" onClick={() => {SetopenProfileMenu(!openProfileMenu)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <ul className="absolute p-3 w-[200px] left-0 top-[55px] bg-white shadow-sm border hidden rounded-md text-gray-600" open={openProfileMenu}>
                    <li className="mb-3">
                        <a href="/Dashboard" className="flex gap-2 items-center font-bold text-black">
                            <img src="/assets/img/profile/pedram.jpg" className=" rounded-full w-[40px] h-[40px] border border-gray-200 p-[1px]" />پدرام نقدی
                        </a>
                    </li>
                    <li>
                        <a href="/EditProfile" className="flex gap-2 items-center text-sm p-2 rounded-sm hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>ویرایش اطلاعات</a>
                    </li>
                    <li>
                        <a href="/EditProfile" className="flex gap-2 items-center text-sm p-2 rounded-sm hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>افزودن ویدئو</a>
                    </li>
                    <li>
                        <a href="#!" onClick={Logout} className="flex gap-2 items-center text-sm p-2 rounded-sm hover:bg-blue-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                            </svg>خروج</a>
                    </li>
                </ul>
            </div>
            </>
        )
        :
        (
            <a href="/login" title="ورود و ثبت نام" className="flex items-center p-2 rounded-full gap-2 border-2 text-white bg-blue-600 border-blue-600 text-xs hover:bg-white hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
            </a>
        )
    )
}

export default ProfileLinks