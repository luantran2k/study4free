import { useState } from 'react';
import { ButtonPayment } from './ButtonPayment';
import VisaIcon from '../../assets/icons/visaIcon';
import AmazonIcon from '../../assets/icons/amazonIcon';
import StripIcon from '../../assets/icons/stripeIcon';
import AliPayIcon from '../../assets/icons/AliPayIcon';
import BanContactIcon from '../../assets/icons/bancontact';
import BelfiusIcon from '../../assets/icons/belfiusIcon';
import BitpayIcon from '../../assets/icons/bitpayIcon';
import CathocIcon from '../../assets/icons/cadhocIcon';
import { useUpdateInforMutation } from '../../store/queries/users';

export const Payment = () => {
  const [money, setMoney] = useState(10);
  const currency = 'USD';
  const [updateInfor] = useUpdateInforMutation();

  const handleAccept = async () => {
    updateInfor({
      newdata: {
        payment: true,
      },
    });
  };

  const handleDenied = async () => {
    console.log('Stop payment');
  };

  return (
    <div>
      <p className="text-center mt-3 font-bold text-[40px] px-2 max-sm:text-[30px]">
        Please choose a payment method!
      </p>
      <div className="text-center text-error font-bold">
        (*paid users can fully use features in this website!!!)
      </div>
      <div className="flex flex-col justify-center items-center w-[100%] mt-8">
        <p className="font-medium max-sm:text-[20px] text-center text-[30px] text-success mb-4">
          ONLY VALID RIGHT NOW
        </p>
        <ButtonPayment
          amount={money}
          currency={currency}
          showSpinner={false}
          onAccept={handleAccept}
          onDenied={handleDenied}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 flex-wrap">
        <p className="mt-8 font-medium max-sm:text-[20px] text-center text-[30px] text-warning">
          UPCOMMING SOON
        </p>
        <div className="flex flex-row items-center justify-center gap-4 flex-wrap w-[60%] max-sm:w-[80%]">
          <div data-aos="zoom-in">
            <VisaIcon />
          </div>
          <div data-aos="zoom-in">
            <AmazonIcon />
          </div>
          <div data-aos="zoom-in">
            <AliPayIcon />
          </div>
          <div data-aos="zoom-in">
            <StripIcon />
          </div>
          <div data-aos="zoom-in">
            <BanContactIcon />
          </div>
          <div data-aos="zoom-in">
            <BelfiusIcon />
          </div>
          <div data-aos="zoom-in">
            <BitpayIcon />
          </div>
          <div data-aos="zoom-in">
            <CathocIcon />
          </div>
          <div data-aos="zoom-in">
            <VisaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
