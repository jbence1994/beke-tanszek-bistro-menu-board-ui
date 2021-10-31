import restClient from "axios";

import endpoints from "./endpoints.json";

const getDailyMenus = async () => {
  const endpoint = endpoints.getDailyMenus;
  return await restClient.get(endpoint);
};

export { getDailyMenus };
