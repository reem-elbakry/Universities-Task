import axios from "axios";

const API_URL = "/api/universities";

const getUniversities = async (key) => {
  const response = await axios.get(`${API_URL}/?key=${key}`);
  return response.data;
};

const getUniversity = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteUniversity = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const createUniversity = async (universityData) => {
  const response = await axios.post(`${API_URL}`, universityData);
  return response.data;
};

const updateUniversity = async (updatedData, universityId) => {
  const response = await axios.patch(`${API_URL}/${universityId}`, updatedData);
  return response.data;
};

const universityService = {
  getUniversities,
  getUniversity,
  deleteUniversity,
  createUniversity,
  updateUniversity,
};

export default universityService;
