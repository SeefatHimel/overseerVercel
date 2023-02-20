import { config } from "config";
import { apiFunction } from "utils/types";
import {
  authJiraRest,
  createSessionRest,
  createTaskRest,
  deleteTaskRest,
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
  deleteTask: deleteTaskRest,
  createSession: createSessionRest,
  stopSession: stopSessionRest,
  authJira: authJiraRest,
};

const restApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
  getTasks: getTasksRest,
  deleteTask: deleteTaskRest,
  createSession: createSessionRest,
  stopSession: stopSessionRest,
  authJira: authJiraRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
