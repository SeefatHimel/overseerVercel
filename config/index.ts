const {
  NEXT_PUBLIC_API_PREFIX_GRAPHQL,
  NEXT_PUBLIC_API_PREFIX_REST,
  NEXT_PUBLIC_API,
} = process?.env;
console.log("🚀 ~ file: index.ts:6 ~ process?.env", process.env);

export const config = {
  apiService: NEXT_PUBLIC_API || "REST",
  graphqlPrefix:
    NEXT_PUBLIC_API_PREFIX_GRAPHQL || "http://localhost:3000/graphql",
  restPrefix: process?.env.NEXT_PUBLIC_API_PREFIX_DEV,
};
console.log(
  "🚀 ~ file: index.ts:13 ~ NEXT_PUBLIC_REST_API_PREFIX_REST",
  NEXT_PUBLIC_API_PREFIX_REST
);
