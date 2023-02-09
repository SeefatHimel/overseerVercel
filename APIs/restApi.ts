import axios from "axios";
import { LoginDto } from "models";
import { apiEndPoints } from "utils/apiEndPoints";
import { toast } from "react-toastify";
// var cookie = require("cookie");

// export async function signUpRest(
//   data: CreateCustomerRequest
// ): Promise<CreateCustomerResponse | undefined> {
//   try {
//     const res = await axios.post(`${apiEndPoints.register}`, data);
//     return res.data;
//   } catch (error: any) {
//     return error;
//   }
// }

export async function logInRest(data: LoginDto): Promise<LoginDto | undefined> {
  console.log("🚀 ~ file: restApi.ts:19 ~ logInRest ~ data", data);
  try {
    var config = {
      method: "post",
      url: "http://localhost:3000/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    const res = await axios.post(`${apiEndPoints.login}`, data);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
