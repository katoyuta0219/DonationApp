import axios from "axios";
import humps from "humps";

export type OrganizationsResponse =
  | {
    success: true;
    id: number;
    name: string;
    iconSrc: string;
    representativeName: string;
    address: string;
    description: string;
    contact: string;
    image: string;
  }
  | {
    success: false;
    message: string;
  }

export async function Organizations(id: string):Promise<OrganizationsResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${id}`;

  return axios
    .get(apiUrl)
    .then((res) => {
      return res.data = humps.camelizeKeys(res.data) as typeof res.data;
    })
    .catch((err) => {
      throw err;
    });
};