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
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDM5MzQ1MzAsImlhdCI6MTY0Mzg5ODUzMCwianRpIjoiOGZmMjAyYmYtOWYzYy00OTdlLWEyOTAtZTUxMGE4NTJjMzA4IiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6ImQ0ZGFjYmJjLWUxOGEtNDQ0OS1hYzJkLTkzYjczZTY0Yjc2MSIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6ImQ0ZGFjYmJjLWUxOGEtNDQ0OS1hYzJkLTkzYjczZTY0Yjc2MSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm5ld19yb2xlX3Jlc3QiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl0sIm5hbWUiOiJHb25jYWxvIE51bmVzIiwicmVzb3VyY2VzIjpbeyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIxfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6MjB9LHsiYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjo2Nn1dLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJnb25jYWxvLm51bmVzQHNpYnMucHQiLCJnaXZlbl9uYW1lIjoiR29uY2FsbyIsInByb2Nlc3NvciI6IkVQTVMiLCJmYW1pbHlfbmFtZSI6Ik51bmVzIiwidXNlcklkIjoiYmEzNWVlNTMtMTk2OS00MGUxLTgwYjAtMWI1NDNkZTQ2MTk5IiwiZW1haWwiOiJnb25jYWxvLm51bmVzQHNpYnMucHQiLCJlbmFibGVkIjp0cnVlfQ.vTEGgoMxEfVYx9byRAlyMcefoo6717U3O4wryQJGsO22mQQnoYCSLeblSbgB4Y9v0hGkONkrLmMTq78t8K9Rb1rN4KcXLwed2TVwXgq4Vi8zrSBsDtU9lTErGR1zUc3dbHHPfXUlsmhbODj1dh5btOBDbwPCnI25cWY2-pWsYUljvIWaI7kJLROTlvElMyoTE7KkAn1x5Vgu9d2STkFNvUZKoLGIjZcqKhlpxKfsJBeJVPvibudM_FhgJb1E8tHPp0eR_eiD7nbEMCL3VnpOo-mHAQPaKLoBjm8CITgDuLBeTrDIUcSp38jJ9FFcQZ4smDpFaYOOa6RMzDiBFLGi8A`; // ToDo Need to make dynamic

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
