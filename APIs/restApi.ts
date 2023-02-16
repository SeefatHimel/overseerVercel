import axios from "axios";
import { LoginDto, LoginResponseDto, RegisterDto } from "models/auth";
import { apiEndPoints } from "utils/apiEndPoints";
import { toast } from "react-toastify";
import { GetCookie, RemoveCookie, SetCookie } from "@/sevices/cookie.service";
import { CreateTaskDto } from "models/tasks";
import {
  deleteFromLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "@/storage/storage";

export async function loginRest(
  data: LoginDto
): Promise<LoginResponseDto | undefined> {
  console.log("🚀 ~ file: restApi.ts:19 ~ logInRest ~ data", data);
  try {
    const res = await axios.post(`${apiEndPoints.login}`, data);
    if (res?.data?.access_token) {
      SetCookie("access_token", res?.data?.access_token);
      setLocalStorage("access_token", res?.data?.access_token);
      setLocalStorage("userDetails", res.data);
      toast.success("Successfully Logged in");
    }
    return res.data;
  } catch (error: any) {
    toast.error("Login Failed");
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

export async function logoutRest() {
  try {
    RemoveCookie("access_token");
    deleteFromLocalStorage("userDetails");
    toast.success("Logged Out");
    return true;
  } catch (error: any) {
    toast.error("Failed to Log Out");
    return false;
  }
}

export async function createTaskRest(data: CreateTaskDto) {
  try {
    const res = await axios.post(`${apiEndPoints.tasks}`, data, {
      headers: {
        Authorization: `Bearer ${GetCookie("access_token")}`,
      },
    });
    // console.log(res);

    return res.data;
  } catch (error: any) {
    toast.error("Failed to Create Task : " + error.message);
    return false;
  }
}

export async function deleteTaskRest(taskId: CreateTaskDto) {
  try {
    const res = await axios.delete(`${apiEndPoints.tasks}/${taskId}`, {
      headers: {
        Authorization: `Bearer ${GetCookie("access_token")}`,
      },
    });
    // console.log(res);

    return res.data;
  } catch (error: any) {
    toast.error("Failed to Create Task : " + error.message);
    return false;
  }
}

export async function getTasksRest(token?: string) {
  console.log("🚀 ~ file: restApi.ts:73 ~ getTasksRest ~ token", token);
  console.log("<><><>", getLocalStorage("access_token"));

  try {
    const res = await axios.get(`${apiEndPoints.tasks}`, {
      headers: {
        Authorization: `Bearer ${token ? token : GetCookie("access_token")}`,
      },
    });
    console.log("getTasksRest", res);
    return res.data;
  } catch (error: any) {
    toast.error("Failed to Get Task : " + error.message);
    return false;
  }
}

export async function createSessionRest(taskId: string) {
  console.log("🚀 ~ file: restApi.ts:91 ~ createSessionRest ~ taskID", taskId);
  console.log("<><><>", getLocalStorage("access_token"));

  try {
    const res = await axios.post(
      `${apiEndPoints.sessions}`,
      { taskId: taskId },
      {
        headers: {
          Authorization: `Bearer ${GetCookie("access_token")}`,
        },
      }
    );
    console.log("getTasksRest", res);
    return res.data;
  } catch (error: any) {
    toast.error("Failed to Get Task : " + error.message);
    return false;
  }
}

export async function stopSessionRest(taskId: string) {
  console.log("🚀 ~ file: restApi.ts:91 ~ stopSessionRest ~ taskID", taskId);
  console.log(
    "<><><>",
    getLocalStorage("access_token"),
    GetCookie("access_token")
  );

  try {
    const res = await axios.post(
      `${apiEndPoints.sessions}/${taskId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${GetCookie("access_token")}`,
        },
      }
    );
    console.log("getTasksRest", res);
    return res.data;
  } catch (error: any) {
    toast.error("Failed to Get Task : " + error.message);
    return false;
  }
}
