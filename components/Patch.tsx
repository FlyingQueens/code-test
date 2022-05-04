import React from 'react';
import Image from 'next/image';

export const Patch = (props: { missionPatchSmall: string }) => {
  return <>{props.missionPatchSmall && <Image layout='responsive' src={props.missionPatchSmall} height={1080} width={1920} alt='' />}</>;
}
