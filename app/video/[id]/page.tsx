import VideoDetails from "@/components/video/videoDetails"

const Video = ({ params }: { params: { id: string } }) => {
    return (
        <VideoDetails videoID={params.id} />
        )
}

export default Video