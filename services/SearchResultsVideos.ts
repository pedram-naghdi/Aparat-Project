import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useSearchResultsVideos = (searchText : string) => {

        console.log(searchText)

    return useQuery({
            queryKey: ['SearchResultsVideos'],
            queryFn: () =>
              axios.get(`https://www.aparat.com/etc/api/videoBySearch/text/${searchText}/perpage/10`).then((response) =>response.data.videobysearch),
        })
}

export default useSearchResultsVideos