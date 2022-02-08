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
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDQzNTM0NDIsImlhdCI6MTY0NDMxNzQ0MiwianRpIjoiOTAzM2RjYzktMDAxYy00MDEwLTgwOTUtN2MyYjU4NGYyNmQ3IiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjRkYjM5MDkyLTUzY2YtNDcyOS04M2E0LTc5NmI3MWVhZGRmZiIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjRkYjM5MDkyLTUzY2YtNDcyOS04M2E0LTc5NmI3MWVhZGRmZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdLCJuYW1lIjoiR29uY2FsbyBOdW5lcyIsInJlc291cmNlcyI6W3siYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMX0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIwfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6NjZ9XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZ2l2ZW5fbmFtZSI6IkdvbmNhbG8iLCJwcm9jZXNzb3IiOiJFUE1TIiwiZmFtaWx5X25hbWUiOiJOdW5lcyIsInVzZXJJZCI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsImVtYWlsIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZW5hYmxlZCI6dHJ1ZX0.OD-qeByLi0FJOsquvrWADSfEwycPDnhg3mSQKdDOldXVuenIYhrqD3kzlbxzjFFms7y4TLSFGrF5Vb0zvhVWJ8_y9BkNbdT9KtXNCvsZbaUY2u2Sl-zJ_Oi3w_4N_RQQqZ5eUEkS9rayYoIyXUqGMyLxRLc5k20nzKZKawTufdse0EpnKXGVGKuTheoyegOiN1fvoRhAf_5HqP1CIQsus7Xap8gauk-5dLzLAbpV9oEc1aEJJCJ8HosKw4ide95x66XVq-yhyY5j-6GTkG712DQfZv3jYy20a2cwuZJGnBZez_prNs7uIwcYesAsw7qkhyZZtlz3htm2e38nMyAdtw`; // ToDo Need to make dynamic

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
