
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useLogin = (userName : string , password : string | number) => {

    return useQuery({
            queryKey: ['Login'],
            queryFn: () => axios.get(`https://www.aparat.com/etc/api/login/luser/${userName}/lpass/${password}`).then((response) =>response.data),
            enabled: false
        })
}

export default useLogin