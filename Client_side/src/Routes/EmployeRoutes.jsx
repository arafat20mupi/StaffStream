import { Navigate } from "react-router-dom";
import useEmployee from "../Hooks/useEmployee";

const EmployeRoutes = ({children}) => {
    const [isEmployee,isPending] = useEmployee()
    if(isPending) return <div className='w-full min-h-[calc(100vh-330px)] flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    if(isEmployee) return children
    return <Navigate to='/'></Navigate>

};

export default EmployeRoutes;