import axios from "axios";
import humps from "humps";

export async function Donations() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/donations`;

  return axios
    .get(apiUrl)
    .then((res) => {
      return res.data = humps.camelizeKeys(res.data) as typeof res.data;
    })
    .catch((err) => {
      throw err;
    });
};