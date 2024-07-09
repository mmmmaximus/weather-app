import { DateTime } from "luxon";

export const formatDateTime = (unixTimestamp: number): string => {
  return DateTime.fromSeconds(unixTimestamp)
    .toFormat("dd-LL-yyyy HH:mm a")
    .toLowerCase();
};
