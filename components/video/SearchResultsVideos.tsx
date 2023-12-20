"use client"
import { useState, useEffect } from "react"
import axios from "axios"

const SearchResultsVideos = ({searchText}:any) => {

    const [videos , setVideos] = useState([])
    const [searchAgain , setSearchAgain] = useState(false)

    useEffect(() => {

        async function getVideos() {
            await axios({
                method: 'post',
                url : `https://www.aparat.com/etc/api/videoBySearch/text/${searchText}/perpage/10`
            }).then((response) => {
                setVideos(response.data.videobysearch)
            }, (error) => {
                console.log(error)
            })

            setSearchAgain(false)

        }

        getVideos()

      }, [searchText,searchAgain]);

      const ReSearch = () => {
        setSearchAgain(true)
        setVideos([])
      }

      return ( 
        <>
        <div className="page-title flex justify-between gap-1 mb-7 pb-2 border-b border-gray-100">
            <h3>نتایج یافت شده برای عبارت «<span className="text-blue-600">{decodeURI(searchText)}</span>»</h3>
            <span title="جستجو دوباره" className={`cursor-pointer text-blue-600 hover:text-blue-400 ${searchAgain ? "spin" : ""}`} onClick={ReSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </span>
        </div>
        <div className="videos flex flex-wrap">
            {
            videos ?
            videos.map((video) => (
            <div className="video w-full pb-4" key={video.id}>
                <a href={`/video/${video.uid}`} className="flex gap-4 p-3 rounded-[5px] hover:bg-blue-50 flex-col md:flex-row" >
                    <div className="video-img max-w-full w-full md:w-[150px] mx-auto md:mx-0">
                        <img src={video.small_poster} className="w-full rounded-[5px]" />
                    </div>
                    <div className="max-w-full w-full md:w-[calc(100%-150px)]">
                        <h3 className="font-bold overflow-hidden text-ellipsis md:whitespace-nowrap text-center md:text-start">{video.title}</h3>
                        <div className="flex items-center text-xs gap-3 mt-2 text-gray-500 flex-col md:flex-row">
                            <span>{video.username}</span>
                            <span>{video.visit_cnt} بازدید</span>
                            <span>تاریخ: {video.sdate}</span>
                        </div>
                        <div className="description text-gray-600 text-sm leading-8 text-justify">
                    </div>
                    </div>
                </a>
            </div>
            ))
            :
            <div className="text-center flex flex-col content-center items-center my-10 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-20 h-20 text-red-900 mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                <h4 className="text-2xl font-bold pb-2">موردی یافت نشد!</h4>
                <p className="mb-5">بر اساس عبارت «<span className="text-blue-600">{decodeURI(searchText)}</span>» هیچ موردی یافت نشد</p>
            </div>
                
            }
        </div>
        </>
    )
}

export default SearchResultsVideos