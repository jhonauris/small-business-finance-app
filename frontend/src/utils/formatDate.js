export function formatDate(timestamp) {
  const date = new Date(parseInt(timestamp)); // Parse the timestamp to ensure it's an integer representing milliseconds
  date.setDate(date.getDate() + 1); // Move the date to the next day
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Example usage:
const timestamp = 1704067200000;
const formattedDate = formatDate(timestamp);
console.log(formattedDate); //Jan 01, 2024
