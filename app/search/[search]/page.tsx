import SearchResultsVideos from "@/components/video/SearchResultsVideos"

const SearchResults = ({ params }: { params: { search: string } }) => {
    return (
        <SearchResultsVideos searchText = {params.search} />
    )
}

export default SearchResults