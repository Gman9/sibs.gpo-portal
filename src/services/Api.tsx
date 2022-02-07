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
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDQyNzc1MDksImlhdCI6MTY0NDI0MTUwOSwianRpIjoiYjFmOTdkM2MtZmVkMS00MDk5LThjNDYtYjNiNTI5YWI2ZDM4IiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImNjMzBjZDllLTU5ZDktNGUxYS1hMDQ4LTU1MWJmZGQzOWJiYiIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6ImNjMzBjZDllLTU5ZDktNGUxYS1hMDQ4LTU1MWJmZGQzOWJiYiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdLCJuYW1lIjoiR29uY2FsbyBOdW5lcyIsInJlc291cmNlcyI6W3siYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMX0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIwfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6NjZ9XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZ2l2ZW5fbmFtZSI6IkdvbmNhbG8iLCJwcm9jZXNzb3IiOiJFUE1TIiwiZmFtaWx5X25hbWUiOiJOdW5lcyIsInVzZXJJZCI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsImVtYWlsIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZW5hYmxlZCI6dHJ1ZX0.h1T-eBX4KdIcAYVbEkCPEQrJSuKsekl4oQAawIBMIn37PkaGbyrKOXmtX6WIwAgrF7CVBHWKuJvEEmaJxJK86mJkctnyIDPEGZtfB9TTsWhuL4tacDZnoFgdg8ChHyTd2CNQ08Oid6OsUapO-7a5ckqjIFYaf1N0jRGu09sOnz0dKUjozAs03lTxc-7npqaJOK8JYS7mbdT-pjWz5dfE0GgbFo8TOBol5ZL7HWvVMIAFbziophd81QzHJ2AkllY9AMBd9s3Ndx49pq6_iFRxX9jcYVwL-nGdGfZIErg4CXKRyfKDaXBLOwryJpz-N8pk7mRigSicOjTxujqgiLoWHQ`; // ToDo Need to make dynamic

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
const apiDevices = new DevicesApi(undefined, '/gpm', axiosClient);
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
    apiDevices,
};
