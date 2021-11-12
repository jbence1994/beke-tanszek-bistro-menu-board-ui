import restClient from "axios";

import endpoints from "./endpoints.json";

const baseEndpoint = endpoints.base;

const getCategories = async () => {
  const endpoint = `${baseEndpoint}${endpoints.getCategories}`;
  return await restClient.get(endpoint);
};

const getCategoriesWithMeals = async () => {
  const endpoint = `${baseEndpoint}${endpoints.getCategoriesWithMeals}`;
  return await restClient.get(endpoint);
};

export { getCategories, getCategoriesWithMeals };
