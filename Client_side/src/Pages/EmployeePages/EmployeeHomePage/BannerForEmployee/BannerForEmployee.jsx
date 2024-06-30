
const BannerForEmployee = () => {
    return (
        <section style={{
            background: `linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://i.postimg.cc/TY7kxrfH/marvin-meyer-SYTO3xs06f-U-unsplash.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} className="min-h-screen justify-center items-center w-full flex overflow-x-hidden">
            <h1 className='lg:text-6xl text-4xl text-gray-100 font-bold backdrop-blur-md py-10 lg:leading-[80px] px-4 text-center'>Get Your Company Asset <br /> By Asset<span className='text-violet-500'>Flow</span> </h1>
        </section>
    );
};

export default BannerForEmployee;