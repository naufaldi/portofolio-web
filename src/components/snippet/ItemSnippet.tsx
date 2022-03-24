import React from 'react';

import LabelIcon from '../common/LabelIcon';

const ItemSnippet = () => {
  return (
    <div className='aspect-w-3 aspect-h-2'>
      <div className='bg-dark-200 px-[26px] py-6 flex flex-col w-full h-full rounded-xl'>
        <h4 className='text-white font-bold text-xl mb-4 font-sora'>
          Nextjs Starter
        </h4>
        <p className='text-white text-sm'>A dead simple for nextjs project.</p>
        <div className='flex justify-between items-center mt-auto'>
          <div className='flex space-x-2 '>
            <LabelIcon name='Tailwind Icon' imgSrc='/icon/tailwind.svg' />
            <LabelIcon name='React Icon' imgSrc='/icon/react.svg' />
          </div>
          <div className='flex items-center space-x-3'>
            <svg
              className='h-4 w-4'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.60785 2.77318C7.84477 2.04582 8.87381 2.04582 9.10994 2.77318L9.95497 5.37301C10.0066 5.53135 10.107 5.66931 10.2417 5.76718C10.3764 5.86505 10.5387 5.91781 10.7052 5.91794H13.4393C14.2046 5.91794 14.5221 6.89722 13.9037 7.34737L11.6924 8.95371C11.5574 9.05166 11.4568 9.18985 11.4052 9.34847C11.3536 9.50708 11.3535 9.67797 11.4049 9.83664L12.25 12.4365C12.4869 13.1638 11.6537 13.7696 11.0338 13.3194L8.82247 11.7131C8.68759 11.6151 8.52518 11.5624 8.3585 11.5624C8.19182 11.5624 8.02941 11.6151 7.89452 11.7131L5.68324 13.3194C5.06408 13.7696 4.23169 13.1638 4.46783 12.4365L5.31285 9.83664C5.36432 9.67797 5.36423 9.50708 5.31259 9.34847C5.26095 9.18985 5.16041 9.05166 5.02539 8.95371L2.81489 7.34816C2.19652 6.89801 2.51479 5.91873 3.27926 5.91873H6.01257C6.17924 5.91877 6.34165 5.86608 6.47656 5.7682C6.61146 5.67032 6.71194 5.53227 6.76361 5.3738L7.60864 2.77397L7.60785 2.77318Z'
                fill='#FFF615'
              />
            </svg>
            <p className='text-white text-sm'>8 Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSnippet;
