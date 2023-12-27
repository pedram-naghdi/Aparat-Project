import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useAllVideos = () => {

    return useQuery({
            queryKey: ['AllVideos'],
            queryFn: () =>
              axios.get('https://www.aparat.com/etc/api/videoByUser/username/zoomit/perpage/16').then((response) =>response.data.videobyuser),
        })
}

export default useAllVideos