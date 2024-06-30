import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyTeamMemberCount = () => {
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
        queryKey:['myteamembercount',hremail,user?.email],
        queryFn:async ()=>{
            const {data} = await axiosSecure.get(`/myteamembercount/${hremail}`)
            return data
        } 
    })
    return {count:data?.count || 0}
   
};

export default useMyTeamMemberCount;