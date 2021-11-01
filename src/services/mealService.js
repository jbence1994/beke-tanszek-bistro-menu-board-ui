import restClient from "axios";

import endpoints from "./endpoints.json";

const baseEndpoint = endpoints.base;

const getMeals = async () => {
  const endpoint = `${baseEndpoint}${endpoints.getMeals}`;
  return await restClient.get(endpoint);
};

const createMeal = async (meal) => {
  const endpoint = `${baseEndpoint}${endpoints.createMeal}`;
  return await restClient.post(endpoint, meal);
};

const deleteMeal = async (id) => {
  const endpoint = `${baseEndpoint}${endpoints.deleteMealById}/${id}`;
  return await restClient.delete(endpoint, id);
};

const deleteMeals = async () => {
  const endpoint = `${baseEndpoint}${endpoints.deleteMeals}`;
  return await restClient.delete(endpoint);
};

export { getMeals, createMeal, deleteMeals, deleteMeal };
