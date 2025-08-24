import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitMarketResearch = async (data: any) => {
  const response = await api.post('/market-research', data);
  return response.data;
};

export const submitContentPlanning = async (data: any) => {
  const response = await api.post('/content-planning', data);
  return response.data;
};

export const submitArticleWriting = async (data: any) => {
  const response = await api.post('/article-writing', data);
  return response.data;
};

export const submitPodcastProduction = async (data: any) => {
  const response = await api.post('/podcast-production', data);
  return response.data;
};

export const submitVideoProduction = async (data: any) => {
  const response = await api.post('/video-production', data);
  return response.data;
};

export const submitFactChecking = async (data: any) => {
  const response = await api.post('/fact-checking', data);
  return response.data;
};

export const submitMasterPipeline = async (data: any) => {
  const response = await api.post('/master-pipeline', data);
  return response.data;
};

export const getAvailableTools = async () => {
  const response = await api.get('/tools');
  return response.data;
};