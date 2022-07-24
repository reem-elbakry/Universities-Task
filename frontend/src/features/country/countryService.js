import axios from "axios";

const API_URL = "/api/countries/";

const getCountries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const countryService = {
  getCountries,
};

export default countryService;
