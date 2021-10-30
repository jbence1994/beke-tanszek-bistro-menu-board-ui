import restClient from "axios";

import endpoints from "./endpoints.json";

const getTypes = async () => {
  const endpoint = endpoints.types;
  return await restClient.get(endpoint);
};

const getTypesWithMeals = async () => {
  const endpoint = endpoints.typesWithMeals;
  return await restClient.get(endpoint);
};

export { getTypes, getTypesWithMeals };
