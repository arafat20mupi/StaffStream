import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import toast from 'react-hot-toast';

const CheckOutForm = ({info}) => {
    const strip = useStripe();
    const element = useElements();
    const [clientSecret,setClientSecret] = useState()
    const [cardError,setCardError] = useState('')
    const [processing,setProcessing] = useState(false)
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
  
    useEffect(()=>{
        if(info?.price > 1){
          getClientSecret({price:info?.price})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[info?.price])
  
    const getClientSecret =async price => {
     const {data} = await axiosSecure.post('/create-payment-intent',price)
     console.log(data);
     setClientSecret(data.clientSecret)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!strip || !element) {
          return;
        }
        const card = element.getElement(CardElement);
        if (card == null) {
          return;
        }
        const { error, paymentMethod } = await strip.createPaymentMethod({
          type: "card",
          card,
        });
        if (error) {
          console.log(error);
          setProcessing(false)
          setCardError(error.message)
        } else {
          console.log(paymentMethod);
          setCardError('')
        }
        const {error:confirmError,paymentIntent} = await strip.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              email:user?.email,
              name:user?.displayName
            }
          }
        })
        if(confirmError){
          setProcessing(false)
          console.log(confirmError.message);
          setCardError(confirmError.message);
          return
        }
        if(paymentIntent.status === 'succeeded'){
          console.log(paymentIntent);
          const paymentInfo = {
            ...info,
            email:user?.email,
            userName:user?.displayName,
            transitionId: paymentIntent.id,
            date: new Date()
          }
          setProcessing(false)
          toast.success('Payment Successful')
          console.log(paymentInfo);
          const {data:paymentData} = await axiosSecure.post('/payments',paymentInfo)
          console.log(paymentData);
        }
    
      };
    return (
        <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
          {cardError && <p className="text-red-600 ml-8">{cardError}</p>}

        <div className="flex mt-2 justify-around">
          <button
            disabled={!strip || !clientSecret || processing}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          > {processing ? (
            <ImSpinner9 className='animate-spin m-auto' size={24} />
          ) : (
            `Pay ${info?.price}`
          )}
          </button>
        </div>
      </form>
    </>
    );
};

export default CheckOutForm;