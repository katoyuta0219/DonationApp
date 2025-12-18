import axios from "axios";

export async function GetCategoryes() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/category`;

  return axios
    .get(apiUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};