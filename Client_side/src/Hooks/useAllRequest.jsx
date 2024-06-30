import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllRequest = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data} = useQuery({
        queryKey:['allrequest',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/requestedcount/${user?.email}`)
            return data
        }
    })
    return {count:data?.count || 0}
};

export default useAllRequest;