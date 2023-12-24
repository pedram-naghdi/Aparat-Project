"use client"
import { useState } from "react"
import axios from "axios"
import md5 from 'md5'

const Login = () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    

    const loginHandle = () => {

        console.log( md5(password))
        axios({
            method: 'post',
            url: 'https://www.aparat.com/etc/api/login/luser/' + userName + '/lpass/' + md5(password)

        }).then((response) => {

            console.log(response)


        }, (error) => {
            console.log(error)
        })

    }

    return (
        <div className=" text-center">
            <div className="page-title flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600 stroke-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <h1 className=" text-md font-bold">ورود اعضا</h1>
            </div>
            <div className="login-box mt-4 pr-3">
                <div className="flex gap-3 items-center">
                    <label htmlFor="username" className="w-[100px]">نام کاربری</label>
                    <input type="text" id="username" className="border rounded-md py-2 px-3" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="flex gap-3 items-center mt-5">
                    <label htmlFor="password" className="w-[100px]">نام کاربری</label>
                    <input type="password" id="password" className="border rounded-md py-2 px-3" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button className=" bg-blue-600 text-white py-1 px-4 rounded-md" onClick={loginHandle}>ورود</button>
            </div>
        </div>
    )
}

export default Login