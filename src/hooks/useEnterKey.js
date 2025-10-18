import { useCallback } from "react";

/**
 * Custom hook to handle Enter key press for any input.
 * @param {Function} callback - Function to execute when Enter is pressed.
 */
const useEnterKey = (callback) => {
  return useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        callback();
      }
    },
    [callback]
  );
};

export default useEnterKey;
