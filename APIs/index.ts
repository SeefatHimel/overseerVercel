import { config } from "config";
import { apiFunction } from "utils/types";
import {
  createTaskRest,
  getTasksRest,
  loginRest,
  logoutRest,
  registerRest,
} from "./restApi";

const graphqlApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
  getTasks: getTasksRest,
};

const restApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
  getTasks: getTasksRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
