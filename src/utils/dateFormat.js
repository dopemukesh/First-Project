// utils/dateFormat.js
export function formatDate(dateStr, format = "MMM yyyy") {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (format === "MM/YYYY") {
    return (
      String(date.getMonth() + 1).padStart(2, "0") + "/" + date.getFullYear()
    );
  }
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
