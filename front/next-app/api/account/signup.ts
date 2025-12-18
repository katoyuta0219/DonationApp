import axios from "axios";

export interface SignupRequest {
  name: string;
  password: string;
}

export type SignupResponse = 
  | {
    success: true;
    message: string;
    token: string
  }
  | {
    success: false;
    message: string;
    errors?: { 
      name: [string];
      password: [string];
    };
  }

export async function Signup({
  name,
  password
}: SignupRequest):Promise<SignupResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/signup`;

  return axios
    .post(apiUrl, {
      name,
      password
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};