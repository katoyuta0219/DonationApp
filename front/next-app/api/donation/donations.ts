import axios from "axios";
import humps from "humps";
import { Donation } from "@/types/donation/types";

export interface DonationsRequest {
  categoryIds?: number[];
  necessity?: number;
}

export async function Donations({
  categoryIds,
  necessity,
}: DonationsRequest): Promise<Donation[]> {
  const params = new URLSearchParams();
  
  if (categoryIds && categoryIds.length > 0) {
    categoryIds.forEach(id => params.append('categoryIds[]', id.toString()));
  }
  
  if (necessity !== undefined) {
    params.append('necessity', necessity.toString());
  }

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/donations${params.toString() ? `?${params.toString()}` : ""}`;

  return axios
    .get(apiUrl)
    .then((res) => {
      return humps.camelizeKeys(res.data) as Donation[];
    })
    .catch((err) => {
      throw err;
    });
};