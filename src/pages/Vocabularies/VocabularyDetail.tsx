import { useLocation } from 'react-router-dom';

const vocabs = [
  'abandon',
  'ability',
  'able',
  'abortion',
  'about',
  'above',
  'abroad',
  'absence',
  'absolute',
  'absolutely',
  'absorb',
  'abuse',
  'academic',
  'accept',
  'access',
  'accident',
  'accompany',
  'accomplish',
  'according',
  'account',
  'accurate',
];

function VocabularyDetail() {
  const { state, pathname } = useLocation();
  return (
    <div>
      <h2 className="text-center font-medium text-[40px] mb-[50px] border-[#ccc] border-b-[1px] pb-2">
        Vocabulary: {state} (20 words)
      </h2>
      <div>
        <div className="grid grid-cols-12 gap-[40px] mt-[10px] max-sm:pe-[8px] ">
          {vocabs.map((vocab, index) => {
            return (
              <div
                key={index}
                className="max-sm:col-span-11 max-md:col-span-12 col-span-6 mb-[10px] bg-[#f8f9fa] shadow-lg cursor-pointer rounded-2xl p-[20px] hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-medium mb-[10px]">
                    {vocab} /əˈbændən/
                  </p>
                  <button className="btn btn-accent text-white max-md:text-[12px]">
                    Add to collection
                  </button>
                </div>
                <p>
                  <strong>Định nghĩa:</strong>
                </p>
                <p>to stop doing an activity before you have finished it</p>
                <p>từ bỏ, đầu hàng, không làm nữa dù chưa xong</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VocabularyDetail;
