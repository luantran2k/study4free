import { useState } from "react";
import TrashIcon from "../../assets/icons/Trash";

interface VocabType {
    word: string,
    spelling: string,
    define: {
        english: string,
        vietnamese: string,
    }
}

const vocabs: VocabType [] = [
    {
        word: 'harsh',
        spelling: '/hɑːrʃ/',
        define: {
            english: 'unpleasant, unkind, cruel, or more severe than is necessary',
            vietnamese: 'Gay gắt; khe khắt, ác nghiệt, khắc nghiệt, cay nghiệt; nhẫn tâm, tàn nhẫn'
        }
    },
    {
        word: 'homicide',
        spelling: '/ˈhɑːmɪsaɪd/',
        define: {
            english: 'the crime of killing somebody deliberately',
            vietnamese: 'Hành động giết người; tội giết người'
        }
    },
    {
        word: 'employment',
        spelling: '/ɪmˈplɔɪmənt/',
        define: {
            english: 'work, especially when it is done to earn money; the state of being employed',
            vietnamese: 'Sự làm công, việc làm'
        }
    },
    {
        word: 'skull',
        spelling: '/skʌl/',
        define: {
            english: 'the bones of the head that surround the brain and give the head its shape',
            vietnamese: 'Sọ, đầu lâu'
        }
    }
]

function Collection() {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)

    const handlePrevious = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext = () => {
        if(currentIndex < vocabs.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
      <div className="p-[20px]">
        <h3 className="text-center text-[40px] font-medium my-[40px]">
          Collection
        </h3>
        <div className="grid grid-rows-1 grid-cols-12 gap-[40px]">
          <div className="col-span-8 flex flex-col justify-center items-center text-center">
            <div className="bg-[#fff] mb-[20px] px-[90px] py-[70px] rounded-2xl shadow-xl w-[692px] h-[376px]">
              <h2 className="text-[40px] font-medium">{vocabs[currentIndex].word}</h2>
              <p className="text-[20px]">{vocabs[currentIndex].spelling}</p>
              <div className="text-left mt-[50px]">
                <p><strong>Định nghĩa:</strong></p>
                <p>
                  {vocabs[currentIndex].define.english}
                </p>
                <p>
                    {vocabs[currentIndex].define.vietnamese}
                </p>
              </div>
            </div>
            <div>
              <button className="btn btn-secondary me-[10px] min-w-[100px]" onClick={handlePrevious}>Previous</button>
              <button className="btn btn-accent min-w-[100px] text-[#fff]" onClick={handleNext}>Next</button>
            </div>
          </div>
          <div className="col-span-4 bg-[#fff] p-[20px] rounded-xl shadow-xl">
                <h2 className="text-[30px] font-medium pb-[5px] border-b-[2px] border-[#ccc] mb-[20px]">Word list</h2>
                {
                    vocabs.map((item, index) => {
                        return (
                            <div className="flex justify-between mb-[10px]">
                                <p key={index} className="text-[24px]">{item.word}</p>
                                <button className="btn btn-error text-[#fff]"><TrashIcon /></button>
                            </div>
                        )
                    })
                }
          </div>
        </div>
      </div>
    );
}

export default Collection;