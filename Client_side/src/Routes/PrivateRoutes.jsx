import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const { user , loading } = useAuth()
    const location = useLocation()
    if (loading) return <div className='w-full min-h-[calc(100vh-330px)] flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
    if (user) return children
    return <Navigate to='/login' state={location.pathname} replace />
};
PrivateRoutes.propTypes = {
    children: PropTypes.element,
  }

export default PrivateRoutes;