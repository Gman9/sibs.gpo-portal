import axios from 'axios';
import {
    MerchantsApi,
    PointsOfSaleApi,
    SupervisorsApi,
    TransactionsApi,
    PeriodsApi,
    TokenApi,
    ReferencesApi,
} from '../api/generated/gpo';
import { DevicesApi } from '../api/generated/gpm';

const axiosClient = axios.create();

//axiosClient.defaults.baseURL = '/api';
const tokenType = 'Authorization';
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NzMxMTE2MTgsImlhdCI6MTY0MjAwNzYxOCwianRpIjoiYzI4NTQ1NGItNTE2OC00NjJiLWFmMWQtYTlkNTI3MjNiYzQwIiwiaXNzIjoiaHR0cDovLzE3Mi4yMy44MS4yNTA6ODE4MC9hdXRoL3JlYWxtcy9HUE8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmEzNWVlNTMtMTk2OS00MGUxLTgwYjAtMWI1NDNkZTQ2MTk5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZ3BvLWFwaS1kZXYiLCJzZXNzaW9uX3N0YXRlIjoiODlmZWE2OGYtNmYxZS00YTAwLWFjNzctYWMwYTRiMjhlZmJmIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Imdwby1zY29wZSBvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIiwic2lkIjoiODlmZWE2OGYtNmYxZS00YTAwLWFjNzctYWMwYTRiMjhlZmJmIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJHb25jYWxvIE51bmVzIiwicmVzb3VyY2VzIjpbeyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjY2fV0sInByZWZlcnJlZF91c2VybmFtZSI6ImdvbmNhbG8ubnVuZXNAc2licy5wdCIsImdpdmVuX25hbWUiOiJHb25jYWxvIiwicHJvY2Vzc29yIjoiRVBNUyIsImZhbWlseV9uYW1lIjoiTnVuZXMiLCJlbWFpbCI6ImdvbmNhbG8ubnVuZXNAc2licy5wdCJ9.UKQUpgdH1zPNiicEkscx1TB4l_gcwumF0Bscv4PCnbeffBOHzpYCTpS0miExr34vwDeLGQPadfL7aH7DJotGhOvNTIC9BLOhn0hG_78B-iujDnEP-hDm1jOw1hrI6q0t-6XrB-lYdR6fMn554x7edHjpiNgK0ZU0fuj6DrWQROlymJsONeEG27PYy_sK2jf6pKO5aFUwMEoRjgKNvjUnWxa-yN0bCnnxjXvvPJ8WJ2jL2YOa82Bxg5ILYoPTu4i2m2Hat29z0qhLJePB4dz40pofL5ccoTGEIru0toxRrTSN1lrIT8pB8avwdfsS51g7boHkttoNGUwf7kyADZ-1ZA`; // ToDo Need to make dynamic

axiosClient.defaults.headers.common[tokenType] = bearerToken;
/* axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
axiosClient.defaults.headers.common['Accept'] = 'application/json'; */

//All request will wait 20 seconds before timeout
axiosClient.defaults.timeout = 20000;

//axiosClient.defaults.withCredentials = true;

// Configuration and base path are not provided
const apiMerchant = new MerchantsApi(undefined, '/api', axiosClient);
const apiPointsOfSale = new PointsOfSaleApi(undefined, undefined, axiosClient);
const apiSupervisors = new SupervisorsApi(undefined, undefined, axiosClient);
const apiTransactions = new TransactionsApi(undefined, undefined, axiosClient);
const apiPeriods = new PeriodsApi(undefined, undefined, axiosClient);
const apiTokens = new TokenApi(undefined, undefined, axiosClient);
const apiReferences = new ReferencesApi(undefined, '/api', axiosClient);
const apiDevices = new DevicesApi(undefined, '/api', axiosClient);

export { apiMerchant, apiPointsOfSale, apiSupervisors, apiTransactions, apiPeriods, apiTokens, apiReferences };
