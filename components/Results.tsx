import React, { useEffect, useState } from 'react';
import Thumbnail from './Thumbnail';
import { IResultsProps } from '../interfaces';
import ErrorPage from 'next/error';

const Results: React.FunctionComponent<IResultsProps> = ({ launches }) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(data);
  }, [launches]);

  if (!launches) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className='px-10 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {launches.map(launch => (
        <Thumbnail key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default Results;
