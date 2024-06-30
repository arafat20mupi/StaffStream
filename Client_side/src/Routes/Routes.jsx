import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import JoinAsEmployee from "../Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHR from "../Pages/JoinAsHR/JoinAsHR";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AddAnAssetPage from "../Pages/HrManagerPages/AddAnAssetPage/AddAnAssetPage";
import AssetListPage from "../Pages/HrManagerPages/AssetListPage/AssetListPage";
import AllRequestPage from "../Pages/HrManagerPages/AllRequestPage/AllRequestPage";
import MyEmployeeListPage from "../Pages/HrManagerPages/MyEmployeeListPage/MyEmployeeListPage";
import AddEmployeePage from "../Pages/HrManagerPages/AddEmployeePage/AddEmployeePage";
import UpdateAsset from "../Pages/HrManagerPages/UpdateAsset/UpdateAsset";
import RequestForAsset from "../Pages/EmployeePages/RequestForAsset/RequestForAsset";
import MyAsset from "../Pages/EmployeePages/MyAsset/MyAsset";
import MyTeam from "../Pages/EmployeePages/MyTeam/MyTeam";
import PayMentPage from "../Pages/PayMentPage/PayMentPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import EmployeRoutes from "./EmployeRoutes";
import HrRoutes from "./HrRoutes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/joinasemployee',
                element:<JoinAsEmployee/>
            },
            {
                path:'/joinashr',
                element:<JoinAsHR/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            // hr routes
            {
                path:'/addasset',
                element:<PrivateRoutes><HrRoutes><AddAnAssetPage/></HrRoutes></PrivateRoutes>
            },
            {
                path:'/assetlist',
                element:<PrivateRoutes><HrRoutes><AssetListPage/></HrRoutes></PrivateRoutes>
            },
            {
                path:'/allrequest',
                element:<PrivateRoutes><HrRoutes><AllRequestPage/></HrRoutes></PrivateRoutes>
            },
            {
                path:'/myemployee',
                element:<PrivateRoutes><HrRoutes><MyEmployeeListPage/></HrRoutes></PrivateRoutes>
            },
            {
                path:'/addemployee',
                element:<PrivateRoutes><HrRoutes><AddEmployeePage/></HrRoutes></PrivateRoutes>
            },
            {
                path:'/updateasset/:id',
                element: <PrivateRoutes><HrRoutes><UpdateAsset/></HrRoutes></PrivateRoutes>,
            },
            {
                path:'/payment',
                element:<PrivateRoutes><HrRoutes><PayMentPage/></HrRoutes></PrivateRoutes>
            },
            // employee pages
            {
                path:'/requestasset',
                element:<PrivateRoutes><EmployeRoutes><RequestForAsset/></EmployeRoutes></PrivateRoutes>
            },
            {
                path:'/myasset',
                element:<PrivateRoutes><EmployeRoutes><MyAsset/></EmployeRoutes></PrivateRoutes>
            },
            {
                path:'/myteam',
                element:<PrivateRoutes><EmployeRoutes><MyTeam/></EmployeRoutes></PrivateRoutes>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><ProfilePage/></PrivateRoutes>
            }
        ]
    }
])

export default router