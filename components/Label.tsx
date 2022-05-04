import React from 'react';

export const Label = (props: { launchSuccess: boolean; time: number | undefined; altitude: number | undefined; reason: string | undefined }) => {
  return (
    <>
      {!props.launchSuccess && (
        <p className='flex item-center opacity-0 group-hover:opacity-100 text-[8px] whitespace-pre-wrap'>
          Time: {props.time} <br />
          Altitude: {props.altitude} <br />
          Reason: {props.reason}
        </p>
      )}
    </>
  );
}
