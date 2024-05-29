const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const addLeadingZero = (number: number) =>
    number < 10 ? '0' + number : number;

  return `${addLeadingZero(day)}.${addLeadingZero(
    month
  )}.${year}, ${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
};

export default formatDate;
