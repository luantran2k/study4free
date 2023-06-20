import { useForm } from "react-hook-form";

function UserInformation() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: string) => console.log(data)
    return (
      <div className="p-[50px]">
        <h3 className="text-center text-[40px] font-medium mb-[40px]">
          Personal Information
        </h3>
        <form className="grid grid-rows-3">
          <div className="grid gap-[40px] grid-cols-12">
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="firstName">
                First Name
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('firstName', { required: true })}
                id="firstName"
              />
            </div>
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="">
                Last Name
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('lastName', { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[40px]">
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="">
                Email
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="">
                Phone number
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('phoneNumber', { required: true })}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-[40px]">
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="">
                Company
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('company', { required: true })}
              />
            </div>
            <div className="col-span-6">
              <label className="mb-[10px] block" htmlFor="">
                Location
              </label>
              <input
                style={{width: '100%'}}
                className="mb-[20px] py-[8px] px-[8px] rounded-lg text-[16px] border-[#ccc] border-[1px]"
                {...register('location', { required: true })}
              />
            </div>
          </div>
          <div>
                <label className="mb-[10px] block" htmlFor="Bio">Bio</label>
                <textarea name="" id="Bio" cols={100} rows={4} style={{width: '100%'}}>

                </textarea>
          </div>
          <div className="mt-[10px]">
            <button className="btn btn-active btn-accent text-[#fff] me-[10px]">Update</button>
            <button className="btn btn-warning text-[#fff]">Cancel</button>
          </div>
        </form>
      </div>
    );
}

export default UserInformation;