export function calculateTime(timestamp) {
  const date = new Date(timestamp);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // فرمت کردن ساعت و دقیقه به صورت "ساعت:دقیقه"
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedTime // خروجی: 00:00
}
