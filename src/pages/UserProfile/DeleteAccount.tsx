function DeleteAccount() {
    return (
        <div className="flex items-center justify-center mt-36 w-full max-md:px-3">
            <div className="bg-white p-10 rounded-xl shadow-lg max-md:p-4 w-[50%] max-md:w-[80%]">
                <div className="text-center text-[20px] mb-10">
                    <p>Are you sure you want to delete this account ?</p>
                    <p>All data and configurations will be lost.</p>
                </div>
                <div className="flex gap-5 justify-center">
                    <button className="btn btn-error">CANCEL</button>
                    <button className="btn btn-primary">DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteAccount;