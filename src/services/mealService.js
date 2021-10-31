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

const deleteMeals = async () => {
  const endpoint = endpoints.deleteMeals;
  return await restClient.delete(endpoint);
};

const deleteMeal = async (id) => {
  const endpoint = `${endpoints.deleteMealById}/${id}`;
  return await restClient.delete(endpoint, id);
};

export { getMeals, createMeal, deleteMeals, deleteMeal };
