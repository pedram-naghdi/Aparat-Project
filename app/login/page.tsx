"use client"
import { useState } from "react"
import md5 from 'md5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import useLogin from "@/services/useLogin";

const Login = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { data: userData, isLoading, isError, refetch, isRefetching } = useLogin(userName, md5(password))

    if (isError) {
        toast.error("در ورود به سامانه خطایی رخ داد!");
    }

    if (isRefetching) {
        if (userData.login.type == 'error') {
            toast.error(userData.login.value);
        }
    }

    return (
        <div className="login-box w-full md:w-[400px] max-w-full rounded-md shadow-md border p-8 mx-auto mt-5">
            <div className="flex gap-3 mb-8 mt-5 flex-col">
                <label htmlFor="username" className="text-sm font-bold">نام کاربری</label>
                <input type="text" id="username" className="border rounded-md py-2 px-3" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div className="flex gap-3 mb-7 flex-col">
                <label htmlFor="password" className="text-sm font-bold">کلمه عبور</label>
                <input type="password" id="password" className="border rounded-md py-2 px-3" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="flex items-center mb-10">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">مرا به خاطر بسپار</label>
            </div>
            <div className="flex gap-3 items-center mb-7">
                <button className="bg-blue-600 text-white py-3 px-4 rounded-md w-full flex items-center gap-3 justify-center hover:bg-blue-500" onClick={() => refetch()}>
                    {isLoading && 
                    <div role="status">
                        <svg aria-hidden="true" className="w-6 h-6 text-white animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                    }
                    <span>وارد شوید</span>
                </button>
            </div>
            <ToastContainer position="bottom-left" rtl theme="light" />
        </div>
    )
}

export default Login