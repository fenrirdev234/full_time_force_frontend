export const stringToDateISO = (dateInString) => {
  const formatDate = new Date(dateInString).toLocaleDateString("en-US");
  return formatDate;
};
