import apisauce from 'apisauce';

export const api = apisauce.create({
  baseURL: process.env.REACT_APP_API_BASE,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: 1800000,
});

/* HEADER START */
export const addHeader = (accessToken: string) =>
  api.setHeader('Authorization', accessToken);
