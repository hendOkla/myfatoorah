import axios from 'axios';

export default function PaymentPage() {
  const initiatePayment = async () => {
    try {
      const response = await axios.post('/api/myFatoorah');
      const paymentURL = response.data.paymentURL;
      // Redirect the user to the paymentURL
    } catch (error) {
      console.error('Error initiating payment:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={initiatePayment}>Initiate Payment</button>
    </div>
  );
}