import restClient from "axios";

import endpoints from "./endpoints.json";

const getMeals = async () => {
  const endpoint = endpoints.getMeals;
  return await restClient.get(endpoint);
};

const createMeal = async (meal) => {
  const endpoint = endpoints.createMeal;
  return await restClient.post(endpoint, meal);
};

export { getMeals, createMeal };
