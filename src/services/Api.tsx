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
import { AuthenticationApi, DevicesApi, RegistrationApi } from '../api/generated/gpm';

const axiosClient = axios.create();

//axiosClient.defaults.baseURL = '/api';
const tokenType = 'Authorization';
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDUwNDExMjcsImlhdCI6MTY0NTAwNTEyNywianRpIjoiZmYwZTQ1MTItNWU0YS00OGIyLTg5MzctNzAwZjYxMjBkYzI1IiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjE5MWRjODViLTU5NmYtNDAyYy1iZTU1LTA0Yzk4OGZjNmZkZiIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjE5MWRjODViLTU5NmYtNDAyYy1iZTU1LTA0Yzk4OGZjNmZkZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdLCJuYW1lIjoiR29uY2FsbyBOdW5lcyIsInJlc291cmNlcyI6W3siYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMX0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIwfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6NjZ9XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZ2l2ZW5fbmFtZSI6IkdvbmNhbG8iLCJwcm9jZXNzb3IiOiJFUE1TIiwiZmFtaWx5X25hbWUiOiJOdW5lcyIsInVzZXJJZCI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsImVtYWlsIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZW5hYmxlZCI6dHJ1ZX0.pwNk6IjpFLKCeEWZNvTKyWXsyzbmT27uHm33UITCVTJRNRFyXHOlynQ4OHBAKBcRc3JFyAPLD2lcHrwfOG2Jv0mP_oUH8UErXMsRY6P_4eUH3vzLRoU3kGTr0fX8klKmDKNOXUxgA1zZHJuWCHPYXpTw4IpmLP-2iI0GE3j9pAKKn0xRWMQMR86w2PfiBmV4GUuKxq97f-dYkAlqr0VdvA95cKFDrHastUgi19xZt3uHtMzRV2KkH0nOQsCbBVGISQWRNhGZ-uhPVxirCtPKLYqeG1u_gdPP5trmtN2j2OSY9EhyQ5_foiXBSSo9aDErP53s4CDwUdIElwohOWktMQ`; // ToDo Need to make dynamic

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
const apiAuthentication = new AuthenticationApi(undefined, '/gpm', axiosClient);

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
    apiAuthentication,
};
