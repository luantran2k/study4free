import { ReactNode } from 'react';

type Props = {
  title: string;
  icon: ReactNode;
  description: string;
  className: string;
};

function DashboardOverviewCard(props: Props) {
  const { title, icon, description, className } = props;
  return (
    <div
      className={`flex-1 rounded-md p-8 flex flex-col items-center 
    shadow-lg text-white ${className}`}
    >
      <p className="font-semibold text-3xl mb-12 flex-1">{title}</p>
      <p className="text-6xl mb-6">{icon}</p>
      <p className="text-5xl font-bold">{description}</p>
    </div>
  );
}

export default DashboardOverviewCard;
