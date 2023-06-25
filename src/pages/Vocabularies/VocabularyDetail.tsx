import { useLocation } from 'react-router-dom';
import { useAddNewCollectionMutation, useAddNewVocabularyMutation, useGetUserByIdQuery } from '../../store/queries/users';
import IVocabulary from '../../interfaces/Vocabulary';
import ICollection from '../../interfaces/Collection';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';

const vocabs: IVocabulary [] = [
  {
    vocabulary: 'abandon',
    meaning: 'từ bỏ, đầu hàng, không làm nữa dù chưa xong',
    image: '',
    spelling: '/əˈbændən/',
    synonyms: ['to stop doing an activity before you have finished it'],
  }
];

// 'ability',
// 'able',
// 'abortion',
// 'about',
// 'above',
// 'abroad',
// 'absence',
// 'absolute',
// 'absolutely',
// 'absorb',
// 'abuse',
// 'academic',
// 'accept',
// 'access',
// 'accident',
// 'accompany',
// 'accomplish',
// 'according',
// 'account',
// 'accurate',

function VocabularyDetail() {
  const dataStorage = JSON.parse(
    localStorage.getItem('user') as string
  ).userInfo;
  const { data, isSuccess } = useGetUserByIdQuery(dataStorage.id);
  const [ AddVocab, ] = useAddNewVocabularyMutation()
  const [ AddCollection ] = useAddNewCollectionMutation()
  const myCollections = data.collections
  console.log(myCollections)
  const { state } = useLocation();

  const addToCollections = async (vocab: IVocabulary) => {
    console.log(data)
    let checkExistTopic: boolean = false;
    let duplicateCollection: string = ''
    myCollections.forEach((value: ICollection) => {
      if(value.title === state) {
        checkExistTopic = true;
        duplicateCollection = value.id
      }
    })
    if(checkExistTopic) {
      console.log('isExist')
      if (isSuccess) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Add to collections Successfully');
        await AddVocab({
            vocab,
            collectionId: duplicateCollection
        });
      }
    } else {
      console.log("new Collection")
      if (isSuccess) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Add to collections Successfully');
        await AddCollection({
          title: state,
          image: ''
        })
        const newCollections = data.collections
        newCollections.forEach(async (value: ICollection) => {
          if(value.title === state) {
            await AddVocab({
              vocab,
              collectionId: value.id,
            });
          }
        })
      }
    }
  }
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
                    {vocab.spelling} /əˈbændən/
                  </p>
                  <button className="btn btn-accent text-white max-md:text-[12px]" onClick={() => {addToCollections(vocab)}}>
                    Add to collection
                  </button>
                </div>
                <p>
                  <strong>Định nghĩa:</strong>
                </p>
                <p>{vocab.synonyms}</p>
                <p>{vocab.meaning}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VocabularyDetail;
