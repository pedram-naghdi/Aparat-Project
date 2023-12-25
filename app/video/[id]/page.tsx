import VideoDetails from "@/app/video/components/VideoDetails"

const Video = ({ params }: { params: { id: string } }) => {
    return (
        <VideoDetails videoID={params.id} />
        )
}

export default Video