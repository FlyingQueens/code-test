import React from 'react';

export const Badge = (props: { launchSuccess: boolean }) => {
  return (
    <div className={`inline-block text-xs my-3 mr-3 px-3 ${props.launchSuccess ? 'bg-green-200' : 'bg-red-200'} text-gray-900 rounded-full`}>
      {' '}
      {props.launchSuccess ? 'Succeeded' : 'Failed'}
    </div>
  );
};
