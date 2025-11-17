import axios from "axios";
import humps from "humps";

export interface DonationsRequest {
  categoryIds: number[];
  necessity: number;
}

export interface DonationsResponse {
  id: number;
  necessity: string;
  detail: string;
}

export async function Donations({
  categoryIds,
  necessity,
}: DonationsRequest) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/donations?categoryIds[]=${categoryIds}&necessity=${necessity}`;

  return axios
    .get(apiUrl)
    .then((res) => {
      return res.data = humps.camelizeKeys(res.data) as typeof res.data;
    })
    .catch((err) => {
      throw err;
    });
};