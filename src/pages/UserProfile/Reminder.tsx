import TrashIcon from "../../assets/icons/Trash";
import PlusIcon from "../../assets/icons/plusIcon";

function Reminder() {
 
    return (
      <div className="py-[20px] px-[30px]">
        <h3 className="text-center text-[40px] font-medium my-[30px]">
          Calendar/ Reminder
        </h3>
        <div className="grid grid-cols-12">
          <h2 className="col-span-12 row-span-1 text-[20px]">
            <strong>From</strong> <input type="date" /> <strong>to</strong> <input type="date"/>
            <button className="btn btn-primary ms-3"><PlusIcon /></button>
          </h2>
          <div className="mt-[20px] grid grid-rows-1 grid-cols-12 col-span-12 gap-[15px]">
            <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12">
              <h2 className="text-[20px]">Monday</h2>
              <div className="bg-[#fff] p-[10px] mt-[15px] rounded-lg shadow-lg">
                <div className="flex justify-between gap-1">
                  <input type="text" className="border-[#ccc] border-[1px] rounded-md ps-2"/>
                  <div className="text-white bg-primary flex items-center p-3 rounded-md cursor-pointer">
                    <PlusIcon />
                  </div>
                </div>
                <div>
                  <ul>
                    <div className="flex justify-between items-center">
                      <li className="p-[10px]">Learn Vocabulary Business</li>
                      <div
                        className="cursor-pointer text-error hover:[&_svg]:scale-150 
                                active:[&_svg]:scale-125 [&_svg]:transition-all"
                      >
                        <TrashIcon />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="p-[10px]">Learn Vocabulary Business</li>
                      <div
                        className="cursor-pointer text-error hover:[&_svg]:scale-150 
                                active:[&_svg]:scale-125 [&_svg]:transition-all"
                      >
                        <TrashIcon />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="p-[10px]">Learn Vocabulary Business</li>
                      <div
                        className="cursor-pointer text-error hover:[&_svg]:scale-150 
                                active:[&_svg]:scale-125 [&_svg]:transition-all"
                      >
                        <TrashIcon />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="p-[10px]">Learn Vocabulary Business</li>
                      <div
                        className="cursor-pointer text-error hover:[&_svg]:scale-150 
                                active:[&_svg]:scale-125 [&_svg]:transition-all"
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="flex gap-[10px] mt-[14px] col-span-12 justify-start">
            <button className="btn btn-primary">Add</button>
            <button className="btn btn-warning">Delete</button>
          </div>
        </div>
      </div>
    );
}

export default Reminder;