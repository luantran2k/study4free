import { Link, Outlet, useLocation } from 'react-router-dom';
import Thumb from '../../assets/images/thumbEnglish.jpg';
import Logo from '../../assets/images/logo.png';
import React, { lazy, useEffect, useState } from 'react';
import {
  useAddNewCollectionMutation,
  useGetAllCollectonQuery,
} from '../../store/queries/users';
import ICollection from '../../interfaces/Collection';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';

const Pagination = lazy(() => import('../../components/common/Pagination'));

// const vocabList: string[] = [
//   'Family',
//   'Business',
//   'Marketing',
//   'Family',
//   'Business',
//   'Marketing',
//   'Family',
//   'Business',
//   'Marketing',
//   'Family',
//   'Business',
//   'Marketing',
//   'Family',
//   'Business',
//   'Marketing',
//   'Family',
//   'Business',
//   'Marketing',
// ];

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
  const { data, isSuccess } = useGetAllCollectonQuery({});
  if (isSuccess) console.log(data);

  const [addNewCollectionHook] = useAddNewCollectionMutation();
  const [inputContent, setInputContent] = useState<string>('');

  const handleInputTitle = (e: any) => {
    // setInputContent(e.target.value)
    setInputContent(e.target.value);
  };

  const addNewCollection = async () => {
    if (inputContent.trim() !== '') {
      if (isSuccess) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Add new library successfully');
        await addNewCollectionHook({
          title: inputContent,
          image: '',
        })
          .unwrap()
          .then((data) => console.log(data));
      }
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <React.Fragment>
      <div className="py-[40px] mb-[10px] text-white text-center font-bold text-[40px] bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <h2>VOCABULARY</h2>
      </div>
      <div className="container mx-auto py-[3rem]">
        <img src={Thumb} alt="" className="w-[100%]" />
        {pathname === '/vocabularies' ? (
          <div className="max-sm:px-[10px] p-[3rem] flex gap-3 flex-col items-start">
            <div className="w-[100%]">
              <label className="font-bold text-lg" htmlFor="collection">
                Title:
              </label>
              <br />
              <input
                type="text"
                id="collection"
                className="border-[#ccc] border-[1px] p-2 rounded-lg w-[50%]"
                onChange={handleInputTitle}
              />
            </div>
            <button className="btn btn-secondary" onClick={addNewCollection}>
              Make new vocabulary library
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="mb-[20px] grid grid-cols-12 gap-[30px] max-sm:px-[10px] p-[3rem]">
          {pathname === '/vocabularies' ? (
            data?.map((item: ICollection, index: number) => {
              return (
                <div
                  key={index}
                  className="max-md:col-span-6 max-sm:col-span-12 p-[20px] bg-[#f8f9fa] col-span-3 font-medium text-[18px] cursor-pointer 
                       rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Link to={item.title} state={item}>
                    <span>{item.title}</span>
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
