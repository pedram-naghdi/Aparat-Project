import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useVideoDetails = (videoID : string) => {

    return useQuery({
            queryKey: ['Video'],
            queryFn: () : Promise< {
                tags:string[],
                cat_id: number
            }> =>
              axios.get(`https://www.aparat.com/etc/api/video/videohash/${videoID}`).then((response) =>response.data.video) ,
        })
}

export default useVideoDetails