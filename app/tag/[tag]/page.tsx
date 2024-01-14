import TagVideos from "@/app/tag/components/tagVideos"

const TagsResults = ({ params }: { params: { tag: string } }) => {
    return (
        <TagVideos tagText = {params.tag} />
    )
}

export default TagsResults