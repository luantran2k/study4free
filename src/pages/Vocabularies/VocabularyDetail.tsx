import { useLocation, useNavigate } from 'react-router-dom';
import {
  useAddNewCollectionMutation,
  useAddNewVocabularyMutation,
  useGetCollectionByIdQuery,
  useGetUserByIdQuery,
} from '../../store/queries/users';
import IVocabulary from '../../interfaces/Vocabulary';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ICollection from '../../interfaces/Collection';

function VocabularyDetail() {
  const { state } = useLocation();

  const navigate = useNavigate();
  const [AddVocab] = useAddNewVocabularyMutation();
  const [AddCollection] = useAddNewCollectionMutation();
  const user = useSelector((state: RootState) => state.auth.userInformation);
  const { data: dataUser } = useGetUserByIdQuery(user?.id);
  const { data: dataVocab, isSuccess: isSuccessVocab } =
    useGetCollectionByIdQuery(state.id);
  const listVocabs: IVocabulary[] = dataVocab?.vocabularies;

  const addToCollections = (vocab: IVocabulary) => {
    if (localStorage.getItem('user') === null) {
      notify(NOTIFICATION_TYPE.ERROR, 'You have to log-in first!!!');
    } else {
      if (dataUser.payment === false) {
        if (
          confirm(
            'You need to upgrade account to use this feature. Go to your account!!!'
          )
        ) {
          navigate('/users/payment');
        }
      } else {
        let checkExist = false;
        let duplicateCollection = '';
        dataUser.collections.forEach((value: ICollection) => {
          if (value.title === 'Vocabs from other users') {
            checkExist = true;
            duplicateCollection = value.id;
          }
        });
        if (checkExist) {
          notify(NOTIFICATION_TYPE.SUCCESS, 'add new word successfully');
          AddVocab({
            vocabulary: vocab.vocabulary,
            meaning: vocab.meaning,
            image: vocab.image,
            spelling: vocab.spelling,
            synonyms: vocab.synonyms,
            collectionId: duplicateCollection,
          });
        } else {
          notify(NOTIFICATION_TYPE.SUCCESS, 'add new word successfully');
          AddCollection({
            title: 'Vocabs from other users',
            image: '',
          })
            .unwrap()
            .then((newCollection) => {
              AddVocab({
                vocabulary: vocab.vocabulary,
                meaning: vocab.meaning,
                image: vocab.image,
                spelling: vocab.spelling,
                synonyms: vocab.synonyms,
                collectionId: newCollection.id,
              });
            });
        }
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((dataForm) => {
    notify(NOTIFICATION_TYPE.SUCCESS, 'Add new word successfully');
    AddVocab({
      ...dataForm,
      synonyms: [dataForm.synonyms],
      collectionId: state.id,
    });
  });

  const handleHiddenModal = () => {
    document.getElementById('btnClose')?.click();
  };

  return (
    <div>
      <h2 className="text-center font-medium text-[40px] mb-[50px] border-[#ccc] border-b-[1px] pb-2">
        Vocabulary: {state.title} ({listVocabs?.length} words)
      </h2>
      <button
        className="btn btn-info text-white"
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
          <div className="flex gap-4">
            <button type="submit" className="btn btn-info text-white">
              Add
            </button>
            <button type="reset" className="btn btn-error text-white">
              Reset
            </button>
            <button
              type="button"
              className="btn btn-neutral text-white"
              onClick={handleHiddenModal}
            >
              Close
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button id="btnClose">close</button>
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
                      onClick={() => addToCollections(vocab)}
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
