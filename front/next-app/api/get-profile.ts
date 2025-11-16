import axios from "axios";
import Cookies from "js-cookie";
import humps from "humps";
import { DonationHistory } from "@/types/donation/types";

export interface GetProfileResponse {
  id: number;
  name: string;
  histories: [
    DonationHistory[]
  ]
}

export async function GetProfile():Promise<GetProfileResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/account/profile`;
  const authToken = Cookies.get("authToken");

  return axios
    .get(apiUrl)
    .then((res) => {
      return res.data = humps.camelizeKeys(res.data) as typeof res.data;
    })
    .catch((err) => {
      throw err;
    });
};