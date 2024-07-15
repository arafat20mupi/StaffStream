import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Utility";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const JoinAsHR = () => {
  const navigate = useNavigate()
  const { createUser, updataNamePhoto } = useAuth()
  const axiosCommon = useAxiosCommon()
  const handelSubmit = async e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const companyName = form.company_name.value;
    const companyLogo = form.company_logo.files[0]
    const photo = form.photo.files[0]

    try {
      const companyLogoUrl = await imageUpload(companyLogo)
      const imageUrl = await imageUpload(photo)
      const hrDetails = {
        email,
        name,
        companyName,
        companyLogoUrl,
        imageUrl,
        role: 'hr',
        teamMember: 0
      }
      createUser(email, password)
        .then(async () => {
          updataNamePhoto(name, imageUrl)
            .then(() => {
              toast.success('HR Account Created Successful')
            })
          await axiosCommon.put('/user', hrDetails)
          form.reset()
          navigate('/payment')
        })
        .catch(err => {
          return toast.error(err.message)
        })
    }
    catch (err) {
      return toast.error(err.message)
    }
  }
  return (
    <section className="min-h-[calc(100vh-330px)] py-32">
      <Helmet>
        <title>
          StaffStream | Join As Manager
        </title>
      </Helmet>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          style={{
            background: `linear-gradient(90deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(${'login-bg.jpg'})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="hidden bg-cover lg:block lg:w-1/2"
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <h1 className="text-2xl font-semibold">
              Staff<span className="text-violet-500">Stream</span>
            </h1>
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
          <form onSubmit={handelSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                required
                id="name"
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                required
                id="LoggingEmailAddress"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                required
                id="loggingPassword"
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
              required
                id="company"
                name="company_name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="birth"
              >
                Date Of Birth
              </label>
              <input
                required
                id="birth"
                name="birthDate"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="photo"
              >
                Your Photo
              </label>
              <input
              required
                id="photo"
                name="photo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="logo"
              >
                Company Logo
              </label>
              <input
              required
                id="logo"
                name="company_logo"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="file"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinAsHR;
