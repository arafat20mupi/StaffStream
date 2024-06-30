import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyAsset = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data,refetch:myAssetCountRefatch} = useQuery({
        queryKey:['myassetcount',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/assetofemployecount/${user?.email}`)
            return data
        }
    })
    return {count:data?.count || 0,myAssetCountRefatch}
};

export default useMyAsset;