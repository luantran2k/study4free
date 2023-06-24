import { useForm } from 'react-hook-form';
import {
  useGetUserByIdQuery,
  useUpdateInforMutation,
} from '../../store/queries/users';
import Avatar from '../../assets/images/avataruser.png';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NOTIFICATION_TYPE, notify } from '../../utils/notify';
import PencilIcon from '../../assets/icons/PencilIcon';
import { useState } from 'react';
interface IFormInput {
  username: string;
  email: string;
  phone: string;
  avatar: string;
  gender: string;
  company: string;
  location: string;
}

const schema = yup
  .object({
    username: yup.string().required('username is required'),
    email: yup.string().required('email is required'),
    gender: yup.string().required('gender is required'),
    avatar: yup.string().required('avatar is required'),
    phone: yup.string().required('phone is required'),
    company: yup.string().required('company is required'),
    location: yup.string().required('location is required'),
  })
  .required();

function UserInformation() {
  const dataStorage = JSON.parse(
    localStorage.getItem('user') as string
  ).userInfo;
  const { data, isSuccess } = useGetUserByIdQuery(dataStorage?.id);
  const [imageChange, setImageChange] = useState<string>(data?.avatar);
  const [updateInfor] = useUpdateInforMutation();

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target.files && e.target.files.length > 0) {
      setImageChange(URL.createObjectURL(e.target.files[0]));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      username: (isSuccess && data.username) || dataStorage.username,
      email: (isSuccess && data.email) || dataStorage.email,
      gender: (isSuccess && data.gender) || dataStorage.gender,
      avatar: (isSuccess && data.avatar) || dataStorage.avatar,
      phone: (isSuccess && data.phone) || dataStorage.phone,
      company: (isSuccess && data.company) || dataStorage.company,
      location: (isSuccess && data.location) || dataStorage.location,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((dataForm) => {
    if (isSuccess) {
      notify(NOTIFICATION_TYPE.SUCCESS, 'Update Successfully');
      updateInfor({
        newdata: {
          ...dataForm,
          avatar: imageChange,
        },
        id: data.id,
      });
    }
  });
  return (
    <div className="p-[50px]">
      <h3 className="text-center text-[40px] font-medium mb-[30px]">
        Personal Information
      </h3>
      <div className="flex justify-center mb-5">
        <div className="w-[200px] h-[200px] rounded-[50%] relative">
          <img
            src={imageChange || Avatar}
            alt=""
            className="rounded-[50%] w-[100%] h-[100%] object-cover"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer absolute -bottom-1 right-7 -rotate-90 bg-white rounded-[50%]"
          >
            <PencilIcon />
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleChangeImage}
            />
          </label>
        </div>
      </div>
      <form className="grid grid-rows-3" onSubmit={onSubmit}>
        <div className="grid gap-[40px] grid-cols-12 max-md:gap-0">
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="username">
              User Name
            </label>
            <input
              style={{ width: '100%' }}
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
              {...register('username', { required: true })}
              id="username"
            />
            <p className="text-error font-medium mb-[20px]">
              {errors.username?.message}
            </p>
          </div>
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="gender">
              Gender
            </label>
            <select
              {...register('gender', { required: true })}
              style={{ width: '100%' }}
              id="gender"
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
            >
              <option value="man">Female</option>
              <option value="woman">Male</option>
              <option value="other">Other</option>
            </select>
            <p className="text-error font-medium mb-[20px]">
              {errors.gender?.message}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[40px] max-md:gap-0">
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="email">
              Email
            </label>
            <input
              style={{ width: '100%' }}
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
              {...register('email', { required: true })}
            />
            <p className="text-error font-medium mb-[20px]">
              {errors.email?.message}
            </p>
          </div>
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="phone">
              Phone number
            </label>
            <input
              style={{ width: '100%' }}
              id="phone"
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
              {...register('phone', { required: true })}
            />
            <p className="text-error font-medium mb-[20px]">
              {errors.phone?.message}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[40px] max-md:gap-0">
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="company">
              Company
            </label>
            <input
              style={{ width: '100%' }}
              id="company"
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
              {...register('company', { required: true })}
            />
            <p className="text-error font-medium mb-[20px]">
              {errors.company?.message}
            </p>
          </div>
          <div className="col-span-6 max-md:col-span-12">
            <label className="mb-[10px] block" htmlFor="location">
              Location
            </label>
            <input
              style={{ width: '100%' }}
              id="location"
              className=" py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
              {...register('location', { required: true })}
            />
            <p className="text-error font-medium mb-[20px]">
              {errors.location?.message}
            </p>
          </div>
        </div>
        <div className="mt-[10px]">
          <button
            className="btn btn-active btn-accent text-[#fff] me-[10px]"
            type="submit"
          >
            Update
          </button>
          <button className="btn btn-warning text-[#fff]">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserInformation;
