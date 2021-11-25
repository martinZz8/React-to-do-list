export const changeDateFormatToPl = (oldDate: string): string => {
  let spliitedOldDate = oldDate.split("-");
  return spliitedOldDate.reverse().join("-");
};