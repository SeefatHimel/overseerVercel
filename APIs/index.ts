import { config } from "config";
import { apiFunction } from "utils/types";
import { createTaskRest, loginRest, logoutRest, registerRest } from "./restApi";

const graphqlApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
};

const restApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
  logout: logoutRest,
  createTask: createTaskRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
