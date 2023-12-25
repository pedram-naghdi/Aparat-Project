import SearchResultsVideos from "@/app/search/components/SearchResultsVideos"

const SearchResults = ({ params }: { params: { search: string } }) => {
    return (
        <SearchResultsVideos searchText = {params.search} />
    )
}

export default SearchResults