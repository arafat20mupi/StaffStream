
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Utility";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const {user,updataNamePhoto,setLoading} = useAuth()
    const navigate = useNavigate()
    const handleUptate = async e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const image = form.photo.files[0]
        try{
        const imageUrl = await imageUpload(image)
            updataNamePhoto(name,imageUrl)
            .then(()=>{
                toast.success('Profile Updated Successful')
                navigate('/profile')
                setLoading(false)
            })
        }
        catch(err){
            console.log(err);
            toast.error('Profile Update Failed')
        }
    }
    return (
        <section className="min-h-[calc(100vh-330px)] pt-32 flex justify-center flex-col items-center">
            <div className="flex flex-col items-center gap-y-6">
                <div className="w-fit p-1 flex border-violet-600 rounded-full border-2">
                <img className="rounded-full h-44 w-44 " referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                </div>
                <div className="p-5 border-2 rounded-xl">
                <h1 className="text-2xl font-medium">Name: {user?.displayName}</h1>
                <h1 className="text-2xl font-medium">Email: {user?.email}</h1>
                </div>
            </div>
            <div>
                 <form onSubmit={handleUptate} className="w-full max-w-md">
                    
                    
                    <div className="flex items-center justify-center mt-6">
                        <a className="text-xl pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            Update Profile
                        </a>
                    </div>
        
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
        
                        <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username"/>
                    </div>
        
                    <label  htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
        
                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>
        
                        <input required id="dropzone-file" name="photo" type="file"  />
                    </label>
                         <div className="flex justify-center">
                        <button type="submit"  className="bg-violet-500 hover:bg-violet-600 transition-all duration-300 py-2 px-7 text-white text-xl font-medium mt-4">Update Profile</button>
                        </div> 
                </form>
            <div>
            
            </div>
            </div>
        </section>
    );
};

export default ProfilePage;