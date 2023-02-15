import { config } from "config";
import { apiFunction } from "utils/types";
import {
  createSessionRest,
  createTaskRest,
  getTasksRest,
  loginRest,
  logoutRest,
  registerRest,
  stopSessionRest,
} from "./restApi";

const graphqlApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
  getTasks: getTasksRest,
  createSession: createSessionRest,
  stopSession: stopSessionRest,
};

const restApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
  getTasks: getTasksRest,
  createSession: createSessionRest,
  stopSession: stopSessionRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
