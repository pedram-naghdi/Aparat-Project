const VideoTags = ({tags}) => {

    interface Itag {
        name: string,
        cnt: number
    }

    return (
<       div className="tags">
            {
            tags?.map((tag:Itag) => (
                <a href={`tag/${tag.name.replace(/ /g,"_")}`} key={tag.cnt}>
                    <span className="ml-3 hover:text-blue-600">#{tag.name}</span>
                </a>))
            }
        </div>
    )
}

export default VideoTags