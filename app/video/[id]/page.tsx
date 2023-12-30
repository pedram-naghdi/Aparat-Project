"use client"
import { SIDEBAR_ATOM } from "@/app/jotai"
import { useAtom } from "jotai"
import { useEffect} from "react"
import VideoDetails from "../components/VideoDetails"
import RelativeVideos from "../components/RelativeVideos"
import DetailsVideoLoading from '../components/DetailsVideoLoading'
import RelativeVideoLoading from "../components/RelativeVideoLoading"
import VideoError from '../components/Error'
import useVideoDetails from '@/services/useVideoDetails'

type Itags = []

const Video = ({ params }: { params: { id: string } }) => {

    const [ , setOpenSidebar] = useAtom<boolean>(SIDEBAR_ATOM)

    useEffect(() => {   
        setOpenSidebar(false)
      }, [])

    const {data : video , isLoading, isError} = useVideoDetails(params.id)
    const tags: Itags = video?.tags?.slice(0, 8)

    return (
        <div className="flex lg:flex-row flex-col">
            <div className="video w-full lg:w-[calc(100%-300px)]">
                {
                    isLoading ? <DetailsVideoLoading /> :
                    isError ? <VideoError /> :
                    <VideoDetails video={video} tags={tags} />
                }
            </div>
            <div className="relative-videos w-full lg:w-[300px] pr-3">
                {
                    isLoading ? <RelativeVideoLoading /> :
                    isError ? '' :
                    <RelativeVideos catID={video?.cat_id} />
                }
            </div>
        </div>
    )
}

export default Video