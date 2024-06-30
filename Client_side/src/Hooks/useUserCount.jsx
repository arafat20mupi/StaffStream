import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserCount = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['usercount',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get('/userscount')
            return data
        }
    })
    return {count:data?.count || 0}
};

export default useUserCount;