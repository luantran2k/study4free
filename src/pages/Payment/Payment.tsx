import { useState } from 'react';
import { ButtonPayment } from './ButtonPayment';

export const Payment = () => {
  const [money, setMoney] = useState(10);
  const currency = 'USD';

  const handleAccept = async () => {
    console.log('Success');
  };

  const handleDenied = async () => {
    console.log('Stop payment');
  };

  return (
    <>
      <ButtonPayment
        amount={money}
        currency={currency}
        showSpinner={false}
        onAccept={handleAccept}
        onDenied={handleDenied}
      />
    </>
  );
};
