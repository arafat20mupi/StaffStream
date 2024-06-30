import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PaiChart from "./PaiChart";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";


const ReqofReturnandNonReturnAsset = () => {
    const {user} = useAuth()
    const axiosCommon = useAxiosCommon()
    const {data} = useQuery({
        queryKey:['return-nonreturnAsset',user?.email],
        queryFn:async()=>{
            const {data} = await axiosCommon.get(`/returnable-nonreturnable/${user?.email}`)
            return data
        }
    })
    return (
        <section className="min-h-[calc(100vh-330px)] my-32 container mx-auto lg:px-0 px-5">
            <div>
                <h1 className="lg:text-5xl text-3xl text-center mb-5 font-bold">Return Asset & Non Return Asset <br /> Request By Employe</h1>
            </div>
            <div className="w-full flex justify-center">
                <PaiChart data={data}/>
            </div>
        </section>
    );
};

export default ReqofReturnandNonReturnAsset;