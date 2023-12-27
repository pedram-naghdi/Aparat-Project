"use client"
import { SIDEBAR_ATOM } from "@/app/jotai"
import axios from "axios"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import VideoDetails from "../components/VideoDetails"
import RelativeVideos from "../components/RelativeVideos"

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

const Video = ({ params }: { params: { id: string } }) => {

    const videoID = params.id

    const [ , setOpenSidebar] = useAtom<boolean>(SIDEBAR_ATOM)
    const [video , setVideo] = useState<Ivideo | undefined>()
    
    useEffect(() => {   

        setOpenSidebar(false)

        async function getVideo() {
            await axios({
                method: 'post',
                url: `https://www.aparat.com/etc/api/video/videohash/${videoID}`

            }).then((response) => {
                setVideo(response.data.video)
            }, (error) => {
                console.log(error)
            })
        }

        getVideo()

      }, [videoID])

      const tags: Itags = video?.tags?.slice(0, 8)
    
    return (
        <div className="flex lg:flex-row flex-col">
            <div className="video w-full lg:w-[calc(100%-300px)]">
                <VideoDetails video={video} tags={tags} />
            </div>
            <div className="relative-videos w-full lg:w-[300px] pr-3">
                <RelativeVideos catID={video?.cat_id} />
            </div>
        </div>
    )
}

export default Video