import restClient from "axios";

import endpoints from "./endpoints.json";

const baseEndpoint = endpoints.base;

const getTypes = async () => {
  const endpoint = `${baseEndpoint}${endpoints.getTypes}`;
  return await restClient.get(endpoint);
};

const getTypesWithMeals = async () => {
  const endpoint = `${baseEndpoint}${endpoints.getTypesWithMeals}`;
  return await restClient.get(endpoint);
};

export { getTypes, getTypesWithMeals };
