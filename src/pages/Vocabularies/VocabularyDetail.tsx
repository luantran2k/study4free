import { useLocation } from 'react-router-dom';
import {
  useAddNewCollectionMutation,
  useAddNewVocabularyMutation,
  useGetCollectionByIdQuery,
  useGetUserByIdQuery,
} from '../../store/queries/users';
import IVocabulary from '../../interfaces/Vocabulary';
import ICollection from '../../interfaces/Collection';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import { useForm } from 'react-hook-form';


// const vocabs: IVocabulary[] = [
//   {
//     vocabulary: 'abandon',
//     meaning: 'từ bỏ, đầu hàng, không làm nữa dù chưa xong',
//     image: '',
//     spelling: '/əˈbændən/',
//     synonyms: ['to stop doing an activity before you have finished it'],
//   },
// ];

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
  const { state } = useLocation();
  const { data, isSuccess } = useGetUserByIdQuery(dataStorage.id);
  const [AddVocab] = useAddNewVocabularyMutation();
  const [AddCollection] = useAddNewCollectionMutation();
  const myCollections = data?.collections;
  const { data: dataVocab, isSuccess: isSuccessVocab } =
    useGetCollectionByIdQuery(state.id);
  const listVocabs: IVocabulary[] = dataVocab?.vocabularies;
  console.log('render');
  if (isSuccessVocab) {
    console.log(listVocabs);
  }
  const addToCollections = async (vocab: IVocabulary) => {
    console.log(data);
    let checkExistTopic = false;
    let duplicateCollection = '';
    myCollections.forEach((value: ICollection) => {
      if (value.title === state.title) {
        checkExistTopic = true;
        duplicateCollection = value.id;
      }
    });
    if (checkExistTopic) {
      console.log('isExist');
      if (isSuccess) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Add to collections Successfully');
        await AddVocab({
          ...vocab,
          collectionId: duplicateCollection,
        });
      }
    } else {
      console.log('new Collection');
      if (isSuccess) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Add to collections Successfully');
        await AddCollection({
          title: state.title,
          image: '',
        });
        // .unwrap().then((data) => console.log(data))
        const newCollections = data.collections;
        newCollections.forEach(async (value: ICollection) => {
          if (value.title === state.title) {
            await AddVocab({
              ...vocab,
              collectionId: value.id,
            });
          }
        });
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((dataForm) => {
    console.log({
      ...dataForm,
      synonyms: [dataForm.synonyms],
      collectionId: state.id,
    });
    AddVocab({
      ...dataForm,
      synonyms: [dataForm.synonyms],
      collectionId: state.id,
    });
  });

  return (
    <div>
      <h2 className="text-center font-medium text-[40px] mb-[50px] border-[#ccc] border-b-[1px] pb-2">
        Vocabulary: {state.title} (20 words)
      </h2>
      <button
        className="btn btn-primary"
        onClick={() => window.my_modal_2.showModal()}
      >
        Add new word
      </button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box" onSubmit={onSubmit}>
          <h3 className="font-bold text-lg mb-3">Hello! Let's add new word.</h3>
          <div>
            <div className="col-span-6 max-md:col-span-12">
              <label className="mb-[10px] block" htmlFor="word">
                Word
              </label>
              <input
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('vocabulary', { required: true })}
                id="word"
              />
              <p className="text-error font-medium mb-[20px]">
                {errors.vocabulary?.message?.toString()}
              </p>
            </div>

            <div className="col-span-6 max-md:col-span-12">
              <label className="mb-[10px] block" htmlFor="meaning">
                Meaning
              </label>
              <input
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('meaning', { required: true })}
                id="meaning"
              />
              <p className="text-error font-medium mb-[20px]">
                {errors.meaning?.message?.toString()}
              </p>
            </div>

            <div className="col-span-6 max-md:col-span-12">
              <label className="mb-[10px] block" htmlFor="spelling">
                Spelling
              </label>
              <input
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('spelling', { required: true })}
                id="spelling"
              />
              <p className="text-error font-medium mb-[20px]">
                {errors.spelling?.message?.toString()}
              </p>
            </div>

            <div className="col-span-6 max-md:col-span-12">
              <label className="mb-[10px] block" htmlFor="wosynonymsrd">
                Synonyms
              </label>
              <input
                style={{ width: '100%' }}
                className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('synonyms', { required: true })}
                id="synonyms"
              />
              <p className="text-error font-medium mb-[20px]">
                {errors.synonyms?.message?.toString()}
              </p>
            </div>
          </div>
          <button type="submit" className="btn btn-secondary">
            Add
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div>
        <div className="grid grid-cols-12 gap-[40px] mt-[10px] max-sm:pe-[8px] ">
          {isSuccessVocab &&
            listVocabs?.map((vocab: IVocabulary, index: number) => {
              return (
                <div
                  key={index}
                  className="max-sm:col-span-11 max-md:col-span-12 col-span-6 mb-[10px] bg-[#f8f9fa] shadow-lg cursor-pointer rounded-2xl p-[20px] hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-[20px] font-medium mb-[10px] flex gap-2">
                      <p>{vocab.vocabulary}</p>
                      <p>{vocab.spelling}</p>
                    </div>
                    <button
                      className="btn btn-accent text-white max-md:text-[12px]"
                      onClick={() => {
                        addToCollections(vocab);
                      }}
                    >
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
