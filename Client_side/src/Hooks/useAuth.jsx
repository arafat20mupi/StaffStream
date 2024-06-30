import { useContext } from "react";
import { AuthContext } from "../Context/ContextComponent";

const useAuth = () => {

    const auth = useContext(AuthContext)

    return auth
};

export default useAuth;