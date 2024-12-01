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

export const fetchShipments= async (id:string)=>{
    const {data}= await api.get(`shipments?partnerCompanyId=${id}`)
    return data;
 }