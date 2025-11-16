import axios from "axios";
import Cookies from "js-cookie";

export interface GetCurrentUserResponse {
  id: number
  name: string;
}

export async function GetCurrentUser():Promise<GetCurrentUserResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  const authToken = Cookies.get("authToken");

  return axios
    .get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json"
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};