import React from 'react';
import { useTranslation } from 'react-i18next';

import HeartIcon from '@icon/HeartIcon';

const Me = () => {
  return (
    <a
      className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
      href='https://github.com/rmasiniexpert'
      target='_blank'
    >
      <HeartIcon />
      {'By Rodrigo Masini de Melo'}
    </a>
  );
};

export default Me;
