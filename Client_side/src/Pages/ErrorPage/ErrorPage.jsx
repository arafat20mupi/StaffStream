import { Link } from 'react-router-dom';
import notfound from '/404.jpg'
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='h-full flex flex-col justify-center items-center'>
            <Helmet>
                <title>Nothing Found</title>
            </Helmet>
        <h1 className='text-6xl mb-2 mt-11 font-semibold text-center'>Nothing Found</h1>
        <img className='h-[550px] w-[600px]' src={notfound} alt="" />
        <Link className={'text-black font-semibold px-5 py-3 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all  duration-500'} to='/'>GO TO HOME</Link>
    </div>
    );
};

export default ErrorPage;