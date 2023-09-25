import data from "../data/data.json";

export const getDonates = () => {
  return data;
};
export const getDonate = (id) => {
  return data?.find((item) => item.id == id);
};
