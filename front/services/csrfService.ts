import axios from "axios";

export const getCsrfToken = async () => {
  return await axios
    .get("/api/csrf", {
      withCredentials: true,
    })
    .then((res) => res.data.token)
    .catch(() => "");
};