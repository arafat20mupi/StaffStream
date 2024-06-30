import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAssetCountForEmployee = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:userData} = useQuery({
        queryKey:['mydata',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/userdetails/${user?.email}`)
            return data
        }
    })
    const hremail = userData?.hremail;
    const {data} = useQuery({
        queryKey:['assetcount',hremail],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/assetcount/${hremail}`)
            return data
        }
    })
    return {count:data?.count || 0}
};

export default useAssetCountForEmployee;