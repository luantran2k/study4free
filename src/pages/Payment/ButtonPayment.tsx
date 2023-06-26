import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect, useState } from 'react';

type Props = {
  amount: number;
  currency: string;
  showSpinner: boolean;
  onAccept: () => Promise<void>;
  onDenied: () => Promise<void>;
};

export const ButtonPayment = ({
  amount,
  currency,
  showSpinner,
  onAccept,
  onDenied,
}: Props) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  // const openPayPalWindow = () => {
  //   setIsOpen(true);
  // };

  const handlePayPalWindowClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const paypalWindow = window.open(
        'https://www.sandbox.paypal.com', // Replace with the appropriate PayPal URL
        '_blank'
      );

      if (paypalWindow) {
        // Add an event listener to handle the PayPal window close event
        paypalWindow.addEventListener('beforeunload', handlePayPalWindowClose);
      }
    }

    return () => {
      // Remove the event listener when the component unmounts or isOpen changes
      window.removeEventListener('beforeunload', handlePayPalWindowClose);
    };
  }, [isOpen]);

  return (
    <>
      {isPending ? <div className="spinner" /> : null}
      <PayPalButtons
        className="w-[500px] max-sm:w-[300px] z-0"
        style={{ layout: 'horizontal' }}
        disabled={false}
        forceReRender={[amount, currency]}
        fundingSource={undefined}
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount + '', // Need string type
                },
              },
            ],
          });
        }}
        onApprove={onAccept}
        onShippingChange={async (data) => {
          console.log(data);
        }}
        onCancel={onDenied}
      />
    </>
  );
};
