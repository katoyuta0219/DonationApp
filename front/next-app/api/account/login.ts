import axios from "axios";

export interface LoginRequest {
  name: string;
  password: string;
}

export type LoginResponse = 
  | {
    success: true;
    message: string;
    token: string;
  }
  | {
    success: false;
    message: string;
  }

export async function Login({
  name,
  password
}: LoginRequest):Promise<LoginResponse> {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/login`;

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