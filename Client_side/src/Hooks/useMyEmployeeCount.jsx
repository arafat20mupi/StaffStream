import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyEmployeeCount = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data,refetch:myTeamCountRefetch} = useQuery({
        queryKey:['companyemployeecount',user?.email],
        queryFn: async()=>{
            const {data} = await axiosSecure.get(`/companyemployeecount/${user?.email}`)
            return data
        }
    })
    return {count:data?.count || 0,myTeamCountRefetch}
};

export default useMyEmployeeCount;