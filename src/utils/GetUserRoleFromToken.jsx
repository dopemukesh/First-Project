
  // Get user role from JWT token in localStorage
  export const getRoleFromToken = (token) => {
    if (!token) return null;

    try {
      const base64Payload = token.split(".")[1];
      const decodedPayload = JSON.parse(atob(base64Payload));
      return decodedPayload.role || null;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };