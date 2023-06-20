import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Thumb from '../../assets/images/thumbEnglish.jpg';
import Pagination from '../../components/common/Pagination';

const vocabList: string[] = [
  'Family',
  'Business',
  'Marketing',
  'Family',
  'Business',
  'Marketing',
  'Family',
  'Business',
  'Marketing',
  'Family',
  'Business',
  'Marketing',
  'Family',
  'Business',
  'Marketing',
  'Family',
  'Business',
  'Marketing',
];

const newPag = {
  totalPage: 5,
  currentPage: 1,
  quantity: 40,
  quantityOptions: [1, 2, 3],
  onChangePage: () => {
    return;
  },
  onChangeQuantity: () => {
    return;
  },
  onNextClick: () => {
    return;
  },
  onPreviousClick: () => {
    return;
  },
};

function VocabulariesPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <React.Fragment>
      <div className="py-[40px] mb-[10px] text-white text-center font-bold text-[40px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2>VOCABULARY</h2>
      </div>
      <div className="container mx-auto">
        <img src={Thumb} alt="" className="w-[100%]" />
        <div className="my-[20px] grid grid-cols-12 gap-[30px] max-sm:px-[10px] p-[3rem]">
          {pathname === '/vocabularies' ? (
            vocabList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="max-md:col-span-6 max-sm:col-span-12 p-[20px] bg-[#f8f9fa] col-span-3 font-medium text-[18px] cursor-pointer 
                       rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Link to=":id" state={vocabList[index]}>
                    <span>{item}</span>
                    <p className="text-[15px] opacity-[0.8]">100 words</p>
                    <div className="w-[60px] h-[60px] my-[20px]">
                      <img
                        className="w-[100%] h-[100%] object-contain"
                        src={Logo}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="col-span-12">
              <Outlet />
            </div>
          )}
        </div>

        <div className="flex my-[30px] justify-center">
          <Pagination {...newPag} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default VocabulariesPage;
