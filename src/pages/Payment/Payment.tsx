import { useState } from 'react';
import { ButtonPayment } from './ButtonPayment';
import VisaIcon from '../../assets/icons/visaIcon';
import AmazonIcon from '../../assets/icons/amazonIcon';
import IpayIcon from '../../assets/icons/iPayIcon';
import StripIcon from '../../assets/icons/stripeIcon';
import AliPayIcon from '../../assets/icons/AliPayIcon';

export const Payment = () => {
  const [money, setMoney] = useState(10);
  const currency = 'USD';

  const handleAccept = async () => {
    console.log('Success');
  };

  const handleDenied = async () => {
    // toast.warn('Bạn đã dừng thanh toán');
    console.log('Stop payment');
  };

  return (
    <div>
      <p className='text-center mt-3 font-bold text-[35px]'>Please choose your method payment!</p>
      <div>
        <p className='mt-20 font-medium text-center text-[30px] text-error'>Not valid right now</p>
        <div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
          <div>
            <VisaIcon />
          </div>
          <div>
            <AmazonIcon />
          </div>
          <div>
            <AliPayIcon />
          </div>
          <div>
            <StripIcon />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-[100%]'>
        <p className='font-medium text-center text-[30px] text-success mb-4'>Valid right now</p>
          <ButtonPayment
            amount={money}
            currency={currency}
            showSpinner={false}
            onAccept={handleAccept}
            onDenied={handleDenied}
          />
        </div>
    </div>
  );
};
