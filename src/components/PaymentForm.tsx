import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const { error } = await stripe.confirmPayment({
        elements: {
          payment_method: {
            card: {
              number: '4242424242424242',
              exp_month: 12,
              exp_year: 2024,
              cvc: '123',
            },
          },
        },
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      onSuccess();
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          className="input"
          placeholder="4242 4242 4242 4242"
          required
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Month
          </label>
          <input
            type="text"
            className="input"
            placeholder="MM"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Year
          </label>
          <input
            type="text"
            className="input"
            placeholder="YY"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVC
          </label>
          <input
            type="text"
            className="input"
            placeholder="123"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className={`btn-primary w-full ${processing ? 'opacity-75 cursor-not-allowed' : ''}`}
        disabled={processing}
      >
        {processing ? 'Processing...' : `Pay ₹${amount}`}
      </button>
    </form>
  );
};

export default PaymentForm;