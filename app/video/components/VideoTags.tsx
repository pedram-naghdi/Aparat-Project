interface Itag {
    name: string,
    cnt: number
}

const VideoTags = ({tags} : any) => {

    return (
<   div className="tags">
            {
            tags?.map((tag:Itag) => (
                <a href={`../tag/${tag.name.trim().replace(/ /g,"_")}`} key={tag.cnt}>
                    <span className="ml-3 hover:text-blue-600">#{tag.name}</span>
                </a>)
            )
            }
        </div>
    )
}

export default VideoTags