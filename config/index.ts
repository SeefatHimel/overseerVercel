export const config = {
  apiService: process?.env.NEXT_PUBLIC_API || "REST",
  graphqlPrefix:
  process?.env.NEXT_PUBLIC_API_PREFIX_GRAPHQL || "http://localhost:3000/graphql",
  restPrefix: process?.env.NEXT_PUBLIC_API_PREFIX_REST,
};
