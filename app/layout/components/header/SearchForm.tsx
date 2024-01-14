"use client"

import { useState , useEffect } from "react"
import { useRouter } from 'next/navigation'

const SearchForm = () => {

    const [searchText, setSearchText] = useState('')
    const [searchTextFocus, setSearchTextFocus] = useState(false)
    const [searchAllow, setSearchAllow] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if (searchText.length  > 2) {
            setSearchAllow(true)
        }
        else {
            setSearchAllow(false)
        }
    },[searchText])

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (searchAllow) {
            router.push(`/search/${searchText}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`search-input w-[450px] md:w-[320px] lg:w-[550px] max-w-full p-3 rounded-full flex bg-gray-100 border border-transparent transition ease-in duration-100 ${searchTextFocus ? "!bg-blue-50 !border-blue-100" : ""}`}>
            <input type="text" placeholder="جستجو در فیلم ها" className="w-full px-3 bg-transparent outline-none text-sm" value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={() => setSearchTextFocus(true)} onBlur={() => setSearchTextFocus(false)} />
            <button type="submit" disabled={!searchAllow} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-61 ${searchAllow ? 'text-blue-600' : ' text-gray-400'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </form>
    )
}

export default SearchForm