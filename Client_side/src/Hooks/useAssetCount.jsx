import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useAssetCount = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['assetcount',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/assetcount/${user?.email}`)
            return data
        }
    })
    return {count:data?.count || 0}
};

export default useAssetCount;