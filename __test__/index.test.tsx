import { render } from '@testing-library/react';
import Results from '../components/Results';
import { Launch } from '../types';

test('should render Results component', () => {
  const { queryByTestId } = render(<Results launches={[]} />);
  expect(queryByTestId('Results')).toBeDefined();
});

test('renders "404" when there are no launches', () => {
  const { getByText } = render(<Results launches={undefined} />);
  expect(getByText(/404/i));
});

test('renders Launches', () => {
  const fakeLaunch: Launch = {
    flight_number: 123,
    mission_name: 'MoonMan',
    launch_date_utc: new Date(Date.UTC(96, 1, 2, 3, 4, 5)).toString(),
    launch_success: true,
    launch_failure_details: undefined,
    rocket: {
      first_stage: { cores: [] },
      second_stage: { payloads: [] },
    },
    links: { mission_patch_small: 'http://localhost/3000'},
  };
  const fakeLaunches: Launch[] = [fakeLaunch];
  const { getAllByTestId } = render(<Results launches={fakeLaunches} />);
  const launches = getAllByTestId('flight_number').map(div => div.id);
  const fakeLaunchIds = fakeLaunches.map(launch => launch.flight_number.toString());
  expect(launches).toEqual(fakeLaunchIds);
});
