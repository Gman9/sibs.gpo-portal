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
import { DevicesApi, RegistrationApi } from '../api/generated/gpm';

const axiosClient = axios.create();

//axiosClient.defaults.baseURL = '/api';
const tokenType = 'Authorization';
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NzQxMjUyODksImlhdCI6MTY0MzAyMTI4OSwianRpIjoiM2Q2MmUxYTQtNzE1MS00MGJhLWFlMTYtYjk4NjdhNGM1ZTgxIiwiaXNzIjoiaHR0cDovL2x4aW50ZGV2MTk6ODE4MC9hdXRoL3JlYWxtcy9HUE8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmEzNWVlNTMtMTk2OS00MGUxLTgwYjAtMWI1NDNkZTQ2MTk5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZ3BvLWFwaS1kZXYiLCJzZXNzaW9uX3N0YXRlIjoiYmE1OThiZTItYWMxYS00YjRiLWFmZDEtNDZmYjJhMGE0MDkwIiwiYWNyIjoiMSIsInJlc291cmNlX2FjY2VzcyI6eyJncG8tYXBpLWRldiI6eyJyb2xlcyI6WyJuZXdfcm9sZV9yZXN0Il19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Imdwby1zY29wZSBvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIiwic2lkIjoiYmE1OThiZTItYWMxYS00YjRiLWFmZDEtNDZmYjJhMGE0MDkwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZ3BvIiwibmV3X3JvbGVfcmVzdCIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXSwibmFtZSI6IkdvbmNhbG8gTnVuZXMiLCJyZXNvdXJjZXMiOlt7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6MjF9LHsiYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMH0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjY2fV0sInByZWZlcnJlZF91c2VybmFtZSI6ImdvbmNhbG8ubnVuZXNAc2licy5wdCIsImdpdmVuX25hbWUiOiJHb25jYWxvIiwicHJvY2Vzc29yIjoiRVBNUyIsImZhbWlseV9uYW1lIjoiTnVuZXMiLCJ1c2VySWQiOiJiYTM1ZWU1My0xOTY5LTQwZTEtODBiMC0xYjU0M2RlNDYxOTkiLCJlbWFpbCI6ImdvbmNhbG8ubnVuZXNAc2licy5wdCIsImVuYWJsZWQiOnRydWV9.waJPzZC5P5WzdOeu4rATilGVgVjULA-8R_CPWczqMtpBYKkaPLNSMA6V8uMjpWxDh1ztlwCynR22P3392pvODrJUNnrqSuHubWw7b5D6Ywy3OfEmNvD-uUmsPAdeFAxf4jt9ErLV1rYEHLda6sd08pTYQKH-7wtkczrL0tLeda1DS-BOW1ONfcLf79pBnkri5Pw9_12mf3DBwoa5nYr4FVbPaL9V-hy2eHBj9wSS4NdiKyVZAihjKVDXzx_G3EZIvGodK6J6fS9YkdZMS_YYPZ9CDbPZy1HgDROnpBX5S_DlHq8nPbQbP0b2PAwteiw7-a77zC3oVnzf_Z6aopVzBA`; // ToDo Need to make dynamic

axiosClient.defaults.headers.common[tokenType] = bearerToken;
/* axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
axiosClient.defaults.headers.common['Accept'] = 'application/json'; */

//All request will wait 20 seconds before timeout
axiosClient.defaults.timeout = 20000;

//axiosClient.defaults.withCredentials = true;

// Configuration and base path are not provided
const apiMerchant = new MerchantsApi(undefined, '/api', axiosClient);
const apiPointsOfSale = new PointsOfSaleApi(undefined, '/gpo', axiosClient);
const apiSupervisors = new SupervisorsApi(undefined, undefined, axiosClient);
const apiTransactions = new TransactionsApi(undefined, undefined, axiosClient);
const apiPeriods = new PeriodsApi(undefined, undefined, axiosClient);
const apiTokens = new TokenApi(undefined, undefined, axiosClient);
const apiReferences = new ReferencesApi(undefined, '/api', axiosClient);
const apiDevices = new DevicesApi(undefined, '/api', axiosClient);
const apiRegistration = new RegistrationApi(undefined, '/gpm', axiosClient);

export {
    apiMerchant,
    apiPointsOfSale,
    apiSupervisors,
    apiTransactions,
    apiPeriods,
    apiTokens,
    apiReferences,
    apiRegistration,
};
