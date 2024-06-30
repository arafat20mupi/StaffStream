import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { imageUpload } from "../../../Utility";
import toast from "react-hot-toast";

const UpdateAsset = () => {
    const axiosSecure = useAxiosSecure()
    const {id} = useParams()
    const {user} = useAuth()
    const {data} = useQuery({
        queryKey:['assetDetails',id],
        queryFn:async()=>{
            const {data} = await axiosSecure.get(`/asset/${id}`)
            return data
        }
    })
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const productName = form.productName.value;
        const productType = form.productType.value;
        const productQuantity = form.productQuantity.value;
        const assetHolder = {
            name:user?.displayName,
            email:user?.email,
        }
        const addedDate = new Date().toLocaleDateString()
        try{

            const assetDetails = {
                productName,
                productType,
                productQuantity,
                assetHolder,
                addedDate
            }
            console.log(assetDetails);
            const {data} = await axiosSecure.patch(`/updateasset/${id}`,assetDetails)
            toast.success('Asset Update Successful')
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <section className="min-h-[calc(100vh-330px)]">
      <div className="pt-20">
        <section className="bg-white dark:bg-gray-900">
          <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <h1 className="text-2xl text-center font-semibold">
                Asset<span className="text-violet-500">Flow</span>
              </h1>

              <div className="flex items-center justify-center mt-6">
                <p className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                  Update An Asset
                </p>
              </div>

              <div className="relative flex items-center mt-8">
                <input
                required
                    defaultValue={data?.productName}
                  name="productName"
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Product Name"
                />
              </div>
              <div className='space-y-1 text-sm mt-5'>
              <select
              defaultValue={data?.productType}
                required
                className='w-full px-4 py-3 border focus:border-blue-400 rounded-md'
                placeholder='Product Type'
                name='productType'
              >
                  <option value='returnable' >Returnable</option>
                  <option value='non-returnable' >Non Returnable</option>
              </select>
            </div>

              <div className="relative flex items-center mt-6">
                <input
                defaultValue={data?.productQuantity}
                  required
                  type="number"
                  name="productQuantity"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Product Quantity"
                />
              </div>

              <div className="mt-6">
                <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Update Asset
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
    );
};

export default UpdateAsset;