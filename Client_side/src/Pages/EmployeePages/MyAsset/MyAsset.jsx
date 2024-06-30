import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMyAsset from "../../../Hooks/useMyAsset";
import Print from "../Print/Print";


const MyAsset = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const { count ,myAssetCountRefatch } = useMyAsset();
  const [status,setStatus] = useState('')
  const [type,setType] = useState('')
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const numberofPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberofPages).keys()];
  const { user } = useAuth();
  const { data, refetch,isLoading } = useQuery({
    queryKey: ["myasset", user?.email, search,status,count,type,itemPerPage,currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/assetsofemploye/${user?.email}?search=${search}&page=${currentPage}&size=${itemPerPage}&status=${status}&type=${type}`
      );
      return data;
    },
  });
  const handleCancelAssetRequest = async (id, key) => {
    const { data } = await axiosSecure.delete(`/assetsofemploye/${id}`);
    const { data: updateData } = await axiosSecure.patch(
      `/updaterequestcount/${key}`
    );
    if (data.deletedCount > 0) {
      refetch();
      myAssetCountRefatch()
      toast.success("Request Cancel Successful");
    }
  };
  const handleReturnAsset = async (id, key) => {
    const { data: updateData } = await axiosSecure.patch(
      `/returnupdate/${key}`,
      { id }
    );
    toast.success("Asset Return Successful");
    refetch();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  const handleItemPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(0);
  };
  const handlePreview = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  if(isLoading)return <div className='w-full min-h-[calc(100vh-330px)] flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
  return (
    <section className="min-h-[calc(100vh-330px)]">
      <Helmet>
        <title>My Assets</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-20">
        <div className="lg:flex items-center my-5 gap-x-5 justify-center">
          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form onSubmit={handleSearch} className="flex flex-col lg:flex-row">
              <input
                name="search"
                type="search"
                placeholder="Search a Product Name"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="submit"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-violet-500 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-blue-400"
              >
                Search
              </button>
            </form>
          </div>
          <div className="dropdown dropdown-hover mt-8">
            <div tabIndex={0} role="button" className="btn m-1 bg-violet-500 text-white">Filter By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={()=> setStatus('Requested')}>Requested</button></li>
              <li><button onClick={()=> setStatus('Approve')}>Approved</button></li>
              <li><button onClick={()=> setType('returnable')}>Returnable</button></li>
              <li><button onClick={()=> setType('non-returnable')}>non-Returnable</button></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Total Assets
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {count && count}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-left rtl:text-right dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Product Image</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-left rtl:text-right dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Product Name</span>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Product Requested Date</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right dark:text-gray-400"
                      >
                        Product Approve Date
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 text-left rtl:text-right dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Product Type</span>

                          <svg
                            className="h-3"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.3"
                            />
                          </svg>
                        </button>
                      </th>
                      <th>Product Status</th>

                      <th className="text-left pl-14">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y min-h-[calc(100vh-330px)] divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {data &&
                      data.map((item) => (
                        <tr key={item._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-12 h-12 rounded-md"
                                  src={item.productImageUrl}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {item.productName}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {item.requestDate}
                          </td>

                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            {item.approvalDate ? item.approvalDate : "N/A"}
                          </td>
                          <td className="py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex uppercase font-medium items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                              {item.productType}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p className="px-3 text-center ml-4 py-1 flex gap-x-2 items-center  text-base text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                {item.status}
                              </p>
                            </div>
                          </td>
                          <td className="space-x-2">
                            {item.status == "Approve" &&
                              item.productType == "returnable" && (
                                <button
                                  onClick={() =>
                                    handleReturnAsset(item._id, item.key)
                                  }
                                >
                                  <div className="inline-flex items-center px-3 py-1 text-black rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                                        stroke="#667085"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>

                                    <h2 className="text-sm font-normal">
                                      Return
                                    </h2>
                                  </div>
                                </button>
                              )}
                            <button
                              disabled={item.status == "Approve"}
                              onClick={() =>
                                handleCancelAssetRequest(item._id, item.key)
                              }
                              className={`inline-flex items-center ${item.status == 'Approve' && 'hidden'} px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800`}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 3L3 9M3 3L9 9"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <h2 className="text-sm font-normal">Cancel</h2>
                            </button>
                            <button
                              className={`inline-flex items-center ${item.status == 'Requested' && 'hidden'} px-3 py-1 rounded-full gap-x-2 bg-green-300 text-black dark:bg-gray-800`}
                            >
                              <Print item={item}  />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
                      
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePreview}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </button>

          <div className="items-center  lg:flex gap-x-3">
            {pages &&
              pages.map((page, inx) => (
                <button
                  onClick={() => setCurrentPage(page)}
                  key={inx}
                  className={`px-2 py-1 text-sm ${
                    page == currentPage
                      ? "bg-violet-500 text-white"
                      : "text-black"
                  } text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60`}
                >
                  {page}
                </button>
              ))}
            <select value={itemPerPage} onChange={handleItemPerPage}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
};

export default MyAsset;
