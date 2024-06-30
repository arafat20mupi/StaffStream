import { Navigate } from "react-router-dom";
import useHrManager from "../Hooks/useHrManager";

const HrRoutes = ({children}) => {
    const [isHr,isPending] = useHrManager()
    if(isPending)return<div className='w-full min-h-[calc(100vh-330px)] flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    if(isHr)return children
    return <Navigate to='/'></Navigate>
};

export default HrRoutes;