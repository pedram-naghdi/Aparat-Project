"use client"

import { useState } from "react"
import {useRouter} from 'next/navigation'

const SearchForm = () => {

    const [searchText , setSearchText] = useState('')
    const [searchTextFocus , setSearchTextFocus] = useState(false)
    const router = useRouter()

    return (
        <div className={`search-input w-[450px] md:w-[320px] lg:w-[550px] max-w-full p-3 rounded-full flex bg-gray-100 border border-transparent ${searchTextFocus ? "focused" : ""}`}>
            <input type="text" placeholder="جستجو در فیلم ها" className="w-full px-3 bg-transparent outline-none text-sm" value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => setSearchTextFocus(true)} onBlur={() => setSearchTextFocus(false)} />
            <button onClick={() => router.push(`/search/${searchText}`)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}

export  default SearchForm