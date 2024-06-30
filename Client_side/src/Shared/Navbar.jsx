import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useHrManager from "../Hooks/useHrManager";
import useEmployee from "../Hooks/useEmployee";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [showmenu,setShowmenu] = useState(false)
  const handleLogout = () => {
    logOut().then((res) => {
      toast.success("Log out Successful");
      navigate('/')
    });
  };
  const {data:userdetails} =useQuery({
    queryKey:['userdetails',user?.email],
    queryFn:async()=>{
        const {data} = await axiosSecure.get(`/userdetails/${user?.email}`)
        return data
    }
})
  const [isHr] = useHrManager()
  const [isEmployee] = useEmployee()
  return (
    <header className="mx-auto">
      <nav className="flex lg:px-10 w-full fixed bg-black z-10 mx-auto items-center px-2 justify-between py-3 ">
        {userdetails?.companyLogoUrl ? <div className="flex items-center gap-x-4"><div><img className="w-11 h-11" src={userdetails?.companyLogoUrl}></img></div><h1 className="text-2xl text-violet-500 font-semibold">{userdetails?.companyName}</h1></div> : <h1 className="lg:text-4xl text-2xl text-white font-semibold">
        Asset<span className="text-violet-500">Flow</span></h1>}
        {/* {
          user ? !user && <h1 className="lg:text-4xl text-2xl text-white font-semibold">
          Asset<span className="text-violet-500">Flow</span></h1>
        } */}
        <div
          className={`text-white top-[72px] lg:rounded-none rounded-bl-lg px-5 fixed lg:static ${showmenu ? 'right-0 transition-all duration-700' : '-right-96 transition-all duration-700'} overflow-hidden text-right bg-black lg:flex lg:flex-row flex-col items-center lg:gap-x-10 text-lg font-medium`}
        >
          <ul className="flex lg:gap-x-10 lg:flex flex-col lg:flex-row">
            <NavLink
              onClick={()=>setShowmenu(!showmenu)}
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
            {
              user && isHr === true ? <>
              <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/assetlist"
            >
              Asset List
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/addasset"
            >
              Add An Asset
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/allrequest"
            >
              All Request
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myemployee"
            >
              My Employee list
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/addemployee"
            >
              Add An Employee
            </NavLink></> : isEmployee ? <>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myasset"
            >
              My Asset
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/myteam"
            >
              My Team
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/requestasset"
            >
              Request for an Asset
            </NavLink>
            </> : <></>
            }
            {
              !user && <>
              <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/joinasemployee"
            >
              Join As Employee
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500"
                  : "hover:text-violet-500 transition-all duration-300"
              }
              to="/joinashr"
            >
              Join As HR Manager
            </NavLink>
              </>
            }
            {user && user ? (
            <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-violet-500" : "hover:text-violet-500"
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink className="hover:text-violet-500 transition-all duration-300" onClick={handleLogout}>Log out</NavLink>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-violet-500" : "hover:text-violet-500"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
            
          </ul>
          {/* {user && user ? (
            <>
            <NavLink className="hover:text-violet-500 transition-all duration-300" onClick={handleLogout}>Log out</NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-violet-500" : "hover:text-violet-500"
              }
              to="/profile"
            >
              Profile
            </NavLink>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-violet-500" : "hover:text-violet-500"
              }
              to="/login"
            >
              Login
            </NavLink>
          )} */}
          {
            user && <div className="dropdown lg:flex hidden dropdown-end z-50 text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" referrerPolicy="no-referrer" src={user?.photoURL}/>
              </div>
            </div>
            {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to='/profile' className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li onClick={handleLogout}><a>Logout</a></li>
            </ul> */}
          </div>
          }

        </div>
        <div className="lg:hidden">
        <label className="btn btn-circle swap swap-rotate bg-transparent text-white">
  
  {/* this hidden checkbox controls the state */}
  <input onClick={()=>setShowmenu(!showmenu)} type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
