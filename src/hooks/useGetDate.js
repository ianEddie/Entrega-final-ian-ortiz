export default function useGetDate() {
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[monthNumber];
  };
  const splitDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate() + 1;
    const month = getMonthName(date.getMonth());
    const year = date.getFullYear();
    return { day, month, year };
  };

  return { splitDate };
}
