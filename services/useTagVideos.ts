import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useTagVideos = (searchText : string) => {
    return useQuery({
            queryKey: ['TagVideos'],
            queryFn: () =>
              axios.get(`https://www.aparat.com/etc/api/videobytag/text/${searchText}`).then((response) =>response.data.videobytag),
        })
}

export default useTagVideos