import TrashIcon from "../../assets/icons/Trash";

function Reminder() {
 
    return (
      <div className="py-[20px] px-[30px]">
        <h3 className="text-center text-[40px] font-medium my-[40px]">
          Calendar/ Reminder
        </h3>
        <div className="grid grid-cols-12">
            <h2 className="col-span-12 row-span-1 text-[20px]"><strong>From</strong> 20/06 <strong>to</strong> 25/06</h2>
            <div className="mt-[20px] grid grid-rows-1 grid-cols-12 col-span-12 gap-[15px]">
                <div className="col-span-3">
                    <h2 className="text-[20px]">Monday</h2>
                    <div className="bg-[#fff] p-[10px] mt-[15px] rounded-lg shadow-lg">
                        <button className="btn btn-primary text-[12px]">Add new work</button>
                        <div>
                            <ul>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h2 className="text-[20px]">Tuesday</h2>
                    <div className="bg-[#fff] p-[10px] mt-[15px] rounded-lg shadow-lg">
                        <button className="btn btn-primary text-[12px]">Add new work</button>
                        <div>
                            <ul>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" col-span-3">
                    <h2 className="text-[20px]">Wednesday</h2>
                    <div className="bg-[#fff] p-[10px] mt-[15px] rounded-lg shadow-lg">
                        <button className="btn btn-primary text-[12px]">Add new work</button>
                        <div>
                            <ul>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h2 className="text-[20px]">Thursday</h2>
                    <div className="bg-[#fff] p-[10px] mt-[15px] rounded-lg shadow-lg">
                        <button className="btn btn-primary text-[12px]">Add new work</button>
                        <div>
                            <ul>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <li className="p-[10px]">Learn Vocabulary Business</li>
                                    <button className="btn btn-error text-[#fff] text-[14px]"><TrashIcon /></button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] mt-[14px] col-span-12 justify-end">
                <button className="btn btn-primary">Add</button>
                <button className="btn btn-warning">Delete</button>
            </div>
        </div>
      </div>
    );
}

export default Reminder;