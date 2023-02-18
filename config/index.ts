export const config = {
  apiService: process?.env.NEXT_PUBLIC_API || "REST",
  graphqlPrefix:
  process?.env.NEXT_PUBLIC_API_PREFIX_GRAPHQL || "http://localhost:3000/graphql",
  restPrefix: process?.env.NEXT_PUBLIC_API_PREFIX_REST,
};
console.log(
  "🚀 ~ file: index.ts:13 ~ NEXT_PUBLIC_REST_API_PREFIX_REST",
  process?.env.NEXT_PUBLIC_API_PREFIX_REST
);
