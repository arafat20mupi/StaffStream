import { useState } from "react";
// import PaymentModal from "../Modal/PaymentModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../Form/CheckOutForm";
import useAuth from "../../Hooks/useAuth";
import useHrManager from "../../Hooks/useHrManager";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const PaymentSection = () => {
  const [info, setInfo] = useState({});
  const {user} = useAuth()
  const [isHr] = useHrManager()
  const packageDetails = [
    {
      id: 1,
      name: "BASIC",
      employeeNumber: 5,
      price: 5,
    },
    {
      id: 2,
      name: "PREMIUM",
      employeeNumber: 10,
      price: 8,
    },
    {
      id: 3,
      name: "ENTERPRISE",
      employeeNumber: 20,
      price: 15,
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Pricing Plan</h1>
        <p className="lg:text-xl text-lg max-w-[800px] mt-3 mx-auto">
        StaffStream caters to businesses of all sizes, offering flexible
          subscription plans to fit your specific requirements.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {packageDetails &&
            packageDetails.map((item) => (
              <div
                key={item.id}
                className="w-full p-8 space-y-8 text-center border group hover:bg-blue-600 border-gray-200 rounded-lg dark:border-gray-700"
              >
                <p className="font-medium text-gray-500 uppercase group-hover:text-white dark:text-gray-300">
                  {item.name}
                </p>

                <h2 className="text-4xl font-semibold text-gray-800 group-hover:text-white uppercase dark:text-gray-100">
                  ${item.price}
                </h2>

                <p className="font-medium text-gray-500 group-hover:text-white dark:text-gray-300">
                  Maximum {item.employeeNumber} employees
                </p>

                <button disabled={!user && !isHr}
                  onClick={() => {
                    setInfo(item);
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="w-full px-4 py-2 group-hover:bg-white group-hover:text-blue-500 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  Start Now
                </button>
              </div>
            ))}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
        </div>
        <div>
        <dialog id="my_modal_3" className='modal'>
          <div className="modal-box">
            <div>
            <h1 className="text-lg font-medium mt-1">Package Name: {info.name}</h1>
            <h1 className="text-lg font-medium mt-1">Package Price: $ {info.price} USD</h1>
              <Elements stripe={stripePromise}>
                <CheckOutForm
                  info={info}
                />
              </Elements>
              <form className="my-4" method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
              </form>
            </div>
          </div>
        </dialog>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
