import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useRelativeVideo = (catID : string) => {

    return useQuery({
            queryKey: ['RelativeVideos'],
            queryFn: () =>
              axios.get(`https://www.aparat.com/etc/api/categoryVideos/cat/${catID}/perpage/8`).then((response) =>response.data.categoryvideos),
        })
}

export default useRelativeVideo