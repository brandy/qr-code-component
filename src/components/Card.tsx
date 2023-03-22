import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="bg-white p-[16px] pb-[40px] w-full max-w-[320px] rounded-[20px] shadow-card">
      {children}
    </div>
  );
};

export default Card;
