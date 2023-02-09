import { config } from "config";
import { apiFunction } from "utils/types";
import { loginRest, registerRest } from "./restApi";

const graphqlApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
};

const restApi: apiFunction = {
  login: loginRest,
  registerUser: registerRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
