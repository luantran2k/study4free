import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};
function CircleButton(props: Props) {
  const { active, className, children, ...btnProps } = props;
  return (
    <button
      className={`rounded-full ${
        active ? 'bg-blue-500 text-white' : 'bg-white'
      } w-12 h-12 ${className}`}
      {...btnProps}
    >
      {children}
    </button>
  );
}

export default CircleButton;
