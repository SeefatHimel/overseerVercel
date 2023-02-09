import axios from "axios";
import { LoginDto, RegisterDto } from "models";
import { apiEndPoints } from "utils/apiEndPoints";
import { toast } from "react-toastify";
import { SetCookie } from "@/sevices/cookie.service";
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

export async function loginRest(data: LoginDto): Promise<LoginDto | undefined> {
  console.log("🚀 ~ file: restApi.ts:19 ~ logInRest ~ data", data);
  try {
    const res = await axios.post(`${apiEndPoints.login}`, data);
    res?.data?.access_token &&
      SetCookie("access_token", res?.data?.access_token);
    return res.data;
  } catch (error: any) {
    return error;
  }
}

export async function registerRest(
  data: RegisterDto
): Promise<RegisterDto | undefined> {
  console.log("🚀 ~ file: restApi.ts:19 ~ logInRest ~ data", data);
  try {
    const res = await axios.post(`${apiEndPoints.register}`, data);
    return res.data;
  } catch (error: any) {
    return error;
  }
}
