import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TrashIcon from '../../assets/icons/Trash';
import {
  useGetCollectionByIdQuery,
  useGetUserByIdQuery,
} from '../../store/queries/users';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ICollection from '../../interfaces/Collection';
import IVocabulary from '../../interfaces/Vocabulary';
import NotVipPlayer from '../NotFound/NotVipPlayer';

function Collection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const { data, isLoading, isSuccess } = useGetUserByIdQuery(user?.id);
  console.log(data);
  let myCollection: IVocabulary[] = [];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isSuccess) {
    console.log(data);
    data.collections.forEach((value: ICollection) => {
      const { data: dataVocab, isSuccess: isSuccessVocabs } =
        useGetCollectionByIdQuery(value.id);
      if (isSuccessVocabs) {
        // console.log(dataVocab)
        myCollection = [...myCollection, ...dataVocab.vocabularies];
        console.log(myCollection);
      }
    });
  }
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < myCollection.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-[20px]">
        {!data?.payment ? (
          <NotVipPlayer />
        ) : (
          <>
            <h3 className="text-center text-[40px] font-medium my-[25px]">
              Collection
            </h3>
            <div className="mb-4 flex justify-center">
              <button className="btn btn-primary me-2">Review</button>
              <button className="btn btn-neutral">Practice</button>
            </div>
            {myCollection.length === 0 ? (
              <div className="mt-10">
                <p className="mb-4 text-error font-medium text-[20px]">
                  You don't have any vocabularies. Let's make your Collection
                </p>
                <NavLink to={'/vocabularies'}>
                  <button className="btn btn-accent">Go to Vocabulary</button>
                </NavLink>
              </div>
            ) : (
              <div className="grid grid-rows-1 grid-cols-12 gap-[40px]">
                <div
                  data-aos="flip-left"
                  className="col-span-8 flex flex-col justify-center items-center text-center max-lg:col-span-12 max-xl:col-span-12 max-md:col-span-12 max-sm:col-span-9 max-md:pe-2"
                >
                  <div
                    className="bg-[#fff] mb-[20px] max-lg:px-[40px] px-[90px] max-lg:py-[40px] py-[70px] 
                  rounded-2xl shadow-xl w-[692px] h-[376px] max-lg:w-[100%] max-lg:h-[340px] max-md:h-fit"
                  >
                    <h2 className="text-[40px] font-medium">
                      {myCollection[currentIndex]?.vocabulary}
                    </h2>
                    <p className="text-[20px]">
                      {myCollection[currentIndex]?.spelling}
                    </p>
                    <div className="text-left mt-[50px]">
                      <p>
                        <strong>Định nghĩa:</strong>
                      </p>
                      <p>{myCollection[currentIndex]?.meaning}</p>
                      <p>{myCollection[currentIndex]?.synonyms}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <button
                      className="btn btn-secondary me-[10px] min-w-[100px]"
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-accent min-w-[100px] text-[#fff]"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div
                  data-aos="flip-left"
                  className="col-span-4 bg-[#fff] p-[20px] rounded-xl shadow-xl max-lg:col-span-12 
                max-xl:col-span-12 max-md:col-span-12 max-md:pe-3 max-sm:col-span-9 h-[300px] overflow-y-scroll"
                >
                  <h2 className="text-[30px] font-medium pb-[5px] border-b-[2px] border-[#ccc] mb-[20px]">
                    Word list
                  </h2>
                  {myCollection.map((item: IVocabulary, index: number) => {
                    return (
                      <div className="flex justify-between mb-[10px]">
                        <p key={index} className="text-[24px]">
                          {item.vocabulary}
                        </p>
                        <div
                          className="cursor-pointer text-error hover:[&_svg]:scale-150 
                                      active:[&_svg]:scale-125 [&_svg]:transition-all"
                        >
                          <TrashIcon />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Collection;
