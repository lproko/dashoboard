import axios from "axios";

const apiUrl = "http://localhost:3000/";

const setApi = async () => {
  axios.defaults.baseURL = apiUrl;
  api = axios.create();
};

let api = axios.create();
setApi();

export const fetchCompanies = async () => {
  const { data } = await api.get("/companies");
  return data;
};

export const fetchShipments = async (id: string) => {
  const { data } = await api.get(`shipments?partnerCompanyId=${id}`);
  return data;
};
export const fetchShipmentsbyId = async (id: string) => {
  const { data } = await api.get(`shipments?shipmentId=${id}`);
  return data;
};

export const fetchShipmentDetails = async (id: string) => {
  const { data } = await api.get(`shipmentDetails?shipmentId=${id}`);
  return data;
};
