import axios from 'axios';

export default async function handler(req, res) {
    req.method==='POST'
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://api.myfatoorah.com/v2/InitiatePayment',
        {
          PaymentMethodId: 1, // Example: 1 for KNET
          CustomerName: 'John Doe',
          DisplayCurrencyIso: 'KWD',
          MobileCountryCode: '+965',
          CustomerMobile: 'XXXXXXXX',
          CustomerEmail: 'john.doe@example.com',
          InvoiceValue: 100, // Example: Payment amount
          CallBackUrl: 'https://6figure-earner.world', // Set your callback URL
          ErrorUrl: 'https://6figure-earner.com', // Set your error URL
          Language: 'en',
          UserDefinedField: 'order123', // Example: Order reference
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL', // Replace with your API Key
          },
        }
      );

      const paymentURL = response.data.PaymentURL;
      res.status(200).json({ paymentURL });
    } catch (error) {
      console.error('Error initiating payment:', error);
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}