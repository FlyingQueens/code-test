import React from 'react';
import { IThumbnailProps } from '../interfaces';
import { Patch } from './Patch';
import { Details } from './Details';

const Thumbnail: React.FunctionComponent<IThumbnailProps> = ({
  launch: {
    flight_number,
    launch_success,
    mission_name,
    launch_date_utc,
    links,
    launch_failure_details,
    rocket: {
      first_stage: { cores },
      second_stage: { payloads },
    },
  },
}) => {
  return (
    <div
      id={flight_number.toString()}
      data-testid='flight_number'
      className='group cursor-pointer bg-white p-5 m-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 rounded opacity-95 hover:opacity-100'>
      <Patch missionPatchSmall={links.mission_patch_small} />
      <Details
        launchDateUtc={launch_date_utc}
        missionName={mission_name}
        launchSuccess={launch_success}
        time={launch_failure_details?.time}
        altitude={launch_failure_details?.altitude}
        reason={launch_failure_details?.reason}
        cores={cores}
        payloads={payloads}
      />
    </div>
  );
};

export default Thumbnail;
