"use client"
import VideoTags from './VideoTags'

interface Ivideo {
    frame : string,
    title: string,
    visit_cnt: number,
    like_cnt: number,
    size: number,
    description: string
    sdate: string,
    cat_id: number
}

type Itags = []

const VideoDetails = (props:any) => {

    const video : Ivideo = props.video
    const tags : Itags = props.tags
    
    return ( 
        
        <div className="video px-4 pb-8">
            <iframe src={video?.frame} width="100%" height="430px"></iframe>
            <div className="flex items-start gap-2 justify-between my-5 flex-col md:flex-row md:items-center md:gap-5">
                <h2 className="font-bold">{video?.title}</h2>
                <div className="likes flex items-center justify-between gap-3">
                    <span className="flex items-center justify-between text-[12px] gap-1">
                        {video?.visit_cnt}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-900">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    <span className="flex items-center justify-between text-[12px] gap-1">
                        {video?.like_cnt}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#df0f50" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#df0f50" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </span>
                    <span className="flex items-center justify-between text-[12px] gap-1">
                        K<span>{video?.size ? Math.round(video?.size / 1024):''}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="description text-gray-600 text-sm leading-8 text-justify">
                <p>{video?.description}</p>
            </div>
            <div className="tags flex mt-5 text-gray-500 text-[11px] flex-col md:flex-row gap-3">
                <span className="date flex items-start md:items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {video?.sdate}
                </span>
                <VideoTags tags = {tags}/>
            </div>
        </div>
            
    )
}

export default VideoDetails