import { Badge } from './Badge';
import { Label } from './Label';
import React from 'react';
import { Core, Payload } from '../types';

export const Details = (props: {
  launchDateUtc: string;
  missionName: string;
  launchSuccess: boolean;
  time: number | undefined;
  altitude: number | undefined;
  reason: string | undefined;
  cores: Core[];
  payloads: Payload[];
}) => {
  return (
    <div className='p-2'>
      <p className='flex item-center'>{new Date(props.launchDateUtc).toLocaleDateString()}</p>
      <h2 className='mt-1 text-2xl text-black transition-all duration-100 ease-in-out group-hover:font-bold'>{props.missionName}</h2>
      <span className='flex flex-grow'>
        <Badge launchSuccess={props.launchSuccess} />
        <Label launchSuccess={props.launchSuccess} time={props.time} altitude={props.altitude} reason={props.reason} />
      </span>
      <div>{props.cores && props.cores.map(core => <div key={core.core_serial}>{core.core_serial}</div>)}</div>
      <div>{props.payloads && props.payloads.map(({ payload_id, payload_type }) => <div key={payload_id}>{`${payload_id}:  ${payload_type}`}</div>)}</div>
    </div>
  );
};
