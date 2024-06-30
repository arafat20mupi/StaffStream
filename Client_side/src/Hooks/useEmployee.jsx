import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const useEmployee = () => {
    const {user} = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosCommon = useAxiosCommon()
    const {data:isEmployee,isPending} = useQuery({
        queryKey:['isEmployee',user?.email],
        queryFn:async()=> {
            const {data} = await axiosCommon.get(`/hrmanager/${user?.email}`)
            return data?.employeeRole
        }
    })
    return[isEmployee,isPending]
};

export default useEmployee;