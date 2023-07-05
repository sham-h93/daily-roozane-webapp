export const formatdate = (timestamp) => {
  const date = new Date(Number(timestamp));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `
  ${year.toString()}/
  ${month.toString().padStart(2, "0")}/
          ${day.toString().padStart(2, "0")}
          ${hours.toString().padStart(2, "0")}:
          ${minutes.toString().padStart(2, "0")}`;
};
