import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { imageUpload } from "../../../Utility";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AddAnAssetPage = () => {
  const { user } = useAuth()
  const axiosSecure = useAxiosSecure()
  const { data: mydetails } = useQuery({
    queryKey: ['mydata', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/userdetails/${user?.email}`)
      return data
    }
  })
  const companyName = mydetails?.companyName;
  const companyLogoUrl = mydetails?.companyLogoUrl;

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target;
    const productName = form.productName.value;
    const productType = form.productType.value;
    const productImage = form.productPhoto.files[0]
    const productQuantity = parseInt(form.productQuantity.value);
    const assetHolder = {
      name: user?.displayName,
      email: user?.email,
    }
    const addedDate = new Date().toLocaleDateString()
    try {
      const productImageUrl = await imageUpload(productImage)

      const assetDetails = {
        productName,
        productType,
        productQuantity,
        productImageUrl,
        companyName,
        companyLogoUrl,
        assetHolder,
        addedDate,
        requestCount: 0,
      }

      const { data } = await axiosSecure.post('/addasset', assetDetails)
      toast.success('Asset Added Successful')
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <section className="min-h-[calc(100vh-330px)]">
      <Helmet>
        <title>
          Add Assets
        </title>
      </Helmet>
      <div className="pt-20">
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <h1 className="text-2xl text-center font-semibold">
                Staff<span className="text-violet-500">Stream</span>
              </h1>

              <div className="flex items-center justify-center mt-6">
                <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                  Add An Asset
                </p>
              </div>

              <div className="relative flex items-center mt-8">
                <input
                  required
                  name="productName"
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Product Name"
                />
              </div>
              <div className="relative flex items-center mt-6">
                <input
                  required
                  type="number"
                  name="productQuantity"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Product Quantity"
                />
              </div>
              <div className='space-y-1 text-sm mt-5'>
                <select
                  required
                  className='w-full px-4 py-3 border focus:border-blue-400 rounded-md'
                  placeholder='Product Type'
                  name='productType'
                >
                  <option value='returnable' >Returnable</option>
                  <option value='non-returnable' >Non Returnable</option>
                </select>
              </div>

              <label
                htmlFor="dropzone-file"
                className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>

                <input required id="dropzone-file" type="file" name="productPhoto" />
              </label>



              <div className="mt-6">
                <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Add Asset
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AddAnAssetPage;
