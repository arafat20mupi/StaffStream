
const BannerForHr = () => {
    return (
        <section style={{
            background: `linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(https://i.postimg.cc/Kv46rfc6/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working-min.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} className="min-h-screen flex justify-center items-center ">
            <h1 className='lg:text-6xl text-4xl text-gray-100 font-bold backdrop-blur-md py-10 lg:leading-[80px] px-4 text-center'>Manage Your Company Asset <br /> By Staff<span className='text-violet-500'>Stream</span> </h1>
        </section>
    );
};

export default BannerForHr;