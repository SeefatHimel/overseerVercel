import { config } from "config";
import { apiFunction } from "utils/types";
import { logInRest } from "./restApi";

const graphqlApi: apiFunction = { login: logInRest };

const restApi: apiFunction = {
  login: logInRest,
};

export const userAPI: apiFunction =
  config?.apiService === "GRAPHQL" ? graphqlApi : restApi;
