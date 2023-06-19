type CustomInputProps = {
  label: string;
  placeholder: string;
  register?: (name: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  register,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <p className="label-text text-lg text-white">{label}</p>
      </label>
      <label className="input-group">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered"
          {...register}
        />
      </label>
    </div>
  );
};

export default CustomInput;
