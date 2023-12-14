"use client"

import { useState } from "react"
import {useRouter} from 'next/navigation'

const SearchForm = () => {

    const [searchText , setSearchText] = useState('')
    const router = useRouter()

    const searchHandler = () => {
        return (
            router.push(`/Search/${searchText}`)
        )
    }

    return (
        <form className="w-[450px] p-3 rounded-full flex bg-gray-100">
            <input type="text" placeholder="جستجو در فیلم ها" className="w-full px-3 bg-transparent outline-none text-sm" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={searchHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
    )
}

export  default SearchForm