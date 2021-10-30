import restClient from "axios";

import endpoints from "./endpoints.json";

const getTypes = async () => {
  const endpoint = endpoints.getTypes;
  return await restClient.get(endpoint);
};

const getTypesWithMeals = async () => {
  const endpoint = endpoints.getTypesWithMeals;
  return await restClient.get(endpoint);
};

const createType = async (type) => {
  const endpoint = endpoints.createType;
  return await restClient.post(endpoint, type);
};

export { getTypes, getTypesWithMeals, createType };
