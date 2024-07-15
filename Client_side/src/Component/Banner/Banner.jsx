
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            style={{
              background: `url(https://i.postimg.cc/HLqQ19Ng/Green-and-White-Modern-Job-Vacation-Banner.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="min-h-screen bg-blue-300 w-full flex"
          >
            <div className="max-w-[600px] flex flex-col mt-32 p-5 lg:mt-48 lg:ml-14">
            <h1 className="lg:text-5xl text-3xl font-bold lg:leading-[60px]">Employee Onboarding & <span className="text-violet-500">Asset Management</span></h1>
            <p className="text-base mt-4  text-justify">Simplify the onboarding process for new hires and ensure all resources are assigned. Track and manage employee use of company assets, from laptops to supplies. Save time, improve accountability, and keep your workforce equipped for success.</p>
            <Link to='/joinasemployee'>
              <button className="bg-violet-500 hover:bg-violet-600 transition-all duration-300 py-2 px-7 text-white text-xl font-medium mt-4">Join As Employee</button>
            </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
          style={{
            background: `linear-gradient(90deg,rgba(0,0,0,0.0),rgba(0,0,0,0.4)),url(https://i.postimg.cc/pTMn6X9V/Blue-White-Modern-Business-Strategy-Blog-Banner-1.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
           className="min-h-screen bg-blue-300 w-full flex">
            <div className="max-w-[600px] flex flex-col mt-32 p-5 lg:mt-48 lg:ml-14">
            <h1 className="lg:text-5xl text-3xl font-bold lg:leading-[60px]">Track Employee Assets <span className="text-violet-500">Efficiently</span></h1>
            <p className="text-base mt-4 text-justify">The StaffStream application empowers HR professionals like you to Track Employee Assets Efficiently. Our user-friendly platform streamlines the process of assigning, tracking, and managing all company equipment and supplies, including laptops, phones, furniture, and office supplies.</p>
            <Link to='/joinashr'>
              <button className="bg-violet-500 hover:bg-violet-600 transition-all duration-300 py-2 px-7 text-white text-xl font-medium mt-4">Join As HR Manager</button>
            </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
