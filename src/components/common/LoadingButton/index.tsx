import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

function LoadingButton(props: Props) {
  const { isLoading, className, children, ...buttonAttribute } = props;
  return (
    <button
      className={`${
        isLoading ? (
          'btn-disabled'
        ) : (
          <span className="loading loading-spinner loading-md"></span>
        )
      } ${className}`}
      {...buttonAttribute}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

export default LoadingButton;
