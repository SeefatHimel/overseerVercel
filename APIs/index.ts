import { config } from "config";
import { apiFunction } from "utils/types";
import {
  authJiraRest,
  createSessionRest,
  createTaskRest,
  deleteTaskRest,
  getJiraLinkRest,
  getTasksRest,
  loginRest,
  logoutRest,
  registerRest,
  sendJiraCodeRest,
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
  getJiraLink: getJiraLinkRest,
  sendJiraCode: sendJiraCodeRest,
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
  getJiraLink: getJiraLinkRest,
  sendJiraCode: sendJiraCodeRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
