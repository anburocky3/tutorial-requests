import dayjs from "dayjs";

export function formatDate(date, format = "hh:mm a, DD MMM YYYY") {
  return dayjs(date).format(format);
}
