export const copyToClipboard = async (text, callback) => {
  try {
    await navigator.clipboard.writeText(text);
    if (callback) callback(true);
    console.log("Copied ✅:", text);
  } catch (err) {
    if (callback) callback(false);
    console.error("Failed to copy ❌:", err);
  }
};
