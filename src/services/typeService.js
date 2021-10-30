import restClient from "axios";

import endpoints from "./endpoints.json";

const getTypesWithMeals = async () => {
  const endpoint = endpoints.typesWithMeals;
  return await restClient.get(endpoint);
};

export { getTypesWithMeals };
