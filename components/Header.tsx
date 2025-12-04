import React from 'react';
import { OwlMascot } from '../constants';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <div className="bg-soft-yellow p-4 rounded-xl shadow-sm flex items-center justify-between mx-4 mt-4 md:mx-6 md:mt-6">
      <h1 className="text-warm-gray text-base md:text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis mr-2">
        환영해요, <span className="text-dark-sage-green">{username}</span>님! 일도 할게 응원해 봐요.
      </h1>
      <OwlMascot className="w-8 h-8 md:w-10 md:h-10 text-sage-green flex-shrink-0" />
    </div>
  );
};

export default Header;