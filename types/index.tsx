type Core = {
  core_serial: string;
};

type Payload = {
  payload_id: string;
  payload_type: string;
};

type FirstStage = {
  cores: Core[];
};

type SecondStage = {
  payloads: Payload[];
};

type Rocket = {
  first_stage: FirstStage;
  second_stage: SecondStage;
};

type Links = {
  mission_patch_small: string;
};

type LaunchFailureDetails = {
  time: number;
  altitude: number;
  reason: string;
};

type Launch = {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  rocket: Rocket;
  links: Links;
};

export type { Launch, Core, Payload };
