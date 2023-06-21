type Props = {
  totalPage: number;
  currentPage: number;
  quantity: number;
  quantityOptions: number[];
  onChangePage: (page: number) => void;
  onChangeQuantity: (quantity: number) => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

const Pagination = (props: Props) => {
  const {
    totalPage,
    currentPage,
    quantity,
    onChangePage,
    onChangeQuantity,
    onNextClick,
    onPreviousClick,
    quantityOptions,
  } = props;
  return (
    <div className="join">
      <button
        className="btn"
        disabled={currentPage === 0}
        onClick={onPreviousClick}
      >
        Previous
      </button>
      {Array(totalPage)
        .fill(undefined)
        .map((_, index) => (
          <button
            key={index}
            className={`join-item btn ${
              currentPage === index ? 'btn-active' : ''
            }`}
            onClick={() => {
              onChangePage(index);
            }}
          >
            {index + 1}
          </button>
        ))}
      <button
        className="btn"
        disabled={currentPage === totalPage - 1}
        onClick={onNextClick}
      >
        Next
      </button>
      <select
        className="select w-full max-w-xs"
        value={quantity}
        onChange={(e) => {
          console.log(e.target.value);
          onChangeQuantity(Number(e.target.value));
        }}
      >
        {quantityOptions.map((quantity) => (
          <option key={quantity} value={quantity}>
            {quantity}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
