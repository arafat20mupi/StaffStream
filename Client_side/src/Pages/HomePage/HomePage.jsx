import { Helmet } from "react-helmet-async";
import About from "../../Component/About/About";
import Banner from "../../Component/Banner/Banner";
import Packages from "../../Component/Packages/Packages";
import useEmployee from "../../Hooks/useEmployee";
import useHrManager from "../../Hooks/useHrManager";
import ContactHr from "../ConteactHrPage/ContactHr";
import EmployeeHomePage from "../EmployeePages/EmployeeHomePage/EmployeeHomePage";
import HomePageForHr from "../HomePageForHr/HomePageForHr";
import useAuth from "../../Hooks/useAuth";

const HomePage = () => {
    const [isHr] = useHrManager()
    const [isEmployee] = useEmployee()
    const {user} = useAuth()
    return (
        <main>
            <Helmet>
                <title>
                StaffStream | Home
                </title>
            </Helmet>
            {!isHr && !isEmployee ? <Banner/> : <></>}
            {isEmployee && <EmployeeHomePage/>}
            {isHr && <HomePageForHr/>}
            {!isHr && !isEmployee ? <About/> : <></>}
            {!isEmployee && !isHr && user ? <ContactHr/> : ''}
            {!user ||  isHr ? <Packages/> : <></>}
        </main>
    );
};

export default HomePage;