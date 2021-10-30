import restClient from "axios";

import endpoints from "./endpoints.json";

const createMeal = async (meal) => {
  const endpoint = endpoints.createMeal;
  return await restClient.post(endpoint, meal);
};

export { createMeal };
