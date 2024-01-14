"use client"
import TagLoading from "./tagLoading"
import VideoNotFound from './NotFound'
import useTagVideos from '@/services/useTagVideos'

interface Ivideos {
    id : number,
    uid : string,
    title: string,
    small_poster : string,
    username: string,
    visit_cnt: number,
    sdate: string
}

interface Iprops {
    tagText: string;
}

const TagVideos = ({tagText}:Iprops) => {

    const {data : videos , isLoading, isError, refetch , isRefetching} = useTagVideos(tagText)

    if (isLoading || isRefetching) return (<TagLoading tagText={tagText} isRefetching={isRefetching} />)
    if (isError) return (<VideoNotFound tagText={tagText} />)

    return ( 
        <>
        <div className="page-title flex justify-between gap-1 mb-7 pb-2 border-b border-gray-100">
            <h3>نتایج یافت شده برای تگ <span className="text-blue-600">#{decodeURI(tagText)}</span></h3>
            <span title="جستجو دوباره" className="cursor-pointer text-blue-600 hover:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isRefetching ? "animate-spin" : ""}`} onClick={()=>refetch()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </span>
        </div>
        <div className="videos flex flex-wrap">
            {
            videos ?
            videos?.map((video : Ivideos) => (
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
            <VideoNotFound tagText={tagText}/>
            }   
        </div>
        </>
    )
}

export default TagVideos