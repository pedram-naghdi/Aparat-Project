"use client"
import { SIDEBAR_ATOM } from "@/app/jotai"
import { useSetAtom } from "jotai"
import { useEffect, useState} from "react"
import VideoDetails from "../components/VideoDetails"
import RelativeVideos from "../components/RelativeVideos"
import DetailsVideoLoading from '../components/VideoDetailsLoading'
import RelativeVideoLoading from "../components/RelativeVideoLoading"
import VideoError from '../components/Error'
import useVideoDetails from '@/services/useVideoDetails'

const Video = ({ params }: { params: { id: string } }) => {

    const setOpenSidebar = useSetAtom(SIDEBAR_ATOM)

    useEffect(() => {   
        setOpenSidebar(false)
    }, [])

    const {data : video , isLoading, isError} = useVideoDetails(params.id)

    return (
        <div className="flex lg:flex-row flex-col">
            <div className="video w-full lg:w-[calc(100%-300px)]">
                {
                    isLoading ? <DetailsVideoLoading /> :
                    isError ? <VideoError /> :
                    <VideoDetails video={video} />
                }
            </div>
            <div className="relative-videos w-full lg:w-[300px] pr-3">
                {
                    isLoading ? <RelativeVideoLoading /> :
                    isError ? '' :
                    video?.cat_id &&
                    <RelativeVideos catID={video.cat_id} />
                }
            </div>
        </div>
    )
}

export default Video