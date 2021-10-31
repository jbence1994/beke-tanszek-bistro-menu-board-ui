import restClient from "axios";

import endpoints from "./endpoints.json";

const getDailyMenus = async () => {
  const endpoint = endpoints.getDailyMenus;
  return await restClient.get(endpoint);
};

const createDailyMenu = async (dailyMenu) => {
  const endpoint = endpoints.createDailyMenu;
  return await restClient.post(endpoint, dailyMenu);
};

export { getDailyMenus, createDailyMenu };
