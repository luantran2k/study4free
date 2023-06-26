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
import {
  useGetUserByIdQuery,
  useUpdateInforMutation,
} from '../../store/queries/users';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';

const priceBoard = [
  {
    price: 9.99,
    period: 'week',
  },
  {
    price: 19.99,
    period: 'month',
  },
  {
    price: 99.99,
    period: 'year',
  },
];

const Payment = () => {
  const [money, setMoney] = useState(10);
  const currency = 'USD';
  const [updateInfor] = useUpdateInforMutation();

  const dataStorage = JSON.parse(
    localStorage.getItem('user') as string
  ).userInfo;
  const { data, isSuccess } = useGetUserByIdQuery(dataStorage?.id);

  const handlePrice = (price: number) => {
    setMoney(price);
  };
  const handleAccept = async () => {
    if (isSuccess) {
      notify(
        NOTIFICATION_TYPE.SUCCESS,
        'You have successfully paid, you are now a member of our VIP, enjoy the great functions we bring to you'
      );
      updateInfor({
        newdata: {
          payment: true,
        },
        id: data.id,
      });
    }
  };

  const handleDenied = async () => {
    notify(NOTIFICATION_TYPE.INFO, 'You have stopped the payment process');
  };

  return (
    <div>
      <p className="text-center mt-3 font-bold text-[40px] px-2 max-sm:text-[30px]">
        Please choose a payment method!
      </p>
      <div className="py-[1rem]">
        <p className="text-center my-[1rem]">Choose your package:</p>
        <div className="flex gap-[2rem] justify-center">
          {priceBoard.map((item, index) => {
            return (
              <div
                onClick={() => handlePrice(item.price)}
                key={index}
                className={`flex items-center py-[0.5rem] gap-[0.5rem]  rounded-xl px-[1rem] shadow-2xl hover:scale-105 hover:cursor-pointer ${
                  money == item.price ? 'bg-[#2c75e4] text-[#fff]' : 'bg-[#fff]'
                }`}
              >
                <div className="text-[3rem] text-[#c4cedb]">$</div>
                <div className="text-[3rem] ">{item.price}/</div>
                <div>{item.period}</div>
              </div>
            );
          })}
        </div>
      </div>
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


export default Payment