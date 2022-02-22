import axios from 'axios';
import {
    MerchantsApi,
    PointsOfSaleApi,
    SupervisorsApi,
    TransactionsApi,
    PeriodsApi,
    TokenApi,
    ReferencesApi,
    GrantTokenImplementationGrantTypeEnum,
} from '../api/generated/gpo';
import { AuthenticationApi, DevicesApi, RegistrationApi } from '../api/generated/gpm';
import { decodeToken } from 'react-jwt';

const mainUrl = window.location.href;
const axiosClient = axios.create();

//axiosClient.defaults.baseURL = '/api';
const tokenType = 'Authorization';
const bearerToken = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzOWdMRl8zTEIxemlXb3VIU1g5N19aWkYwY01sandVXzU4REYzTDZyWGZVIn0.eyJleHAiOjE2NDUyMTIxMDMsImlhdCI6MTY0NTE3NjEwMywianRpIjoiZmQwN2IxYjktYWI0Mi00NzNhLWI2N2QtM2FmZjZiNmU1NTMyIiwiaXNzIjoiaHR0cHM6Ly9seGludGRldjE5Ojg1NDMvYXV0aC9yZWFsbXMvR1BPIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsInR5cCI6IkJlYXJlciIsImF6cCI6Imdwby1hcGktZGV2Iiwic2Vzc2lvbl9zdGF0ZSI6IjMyMWFhMGY4LTA1ZGMtNGY1Ni1iN2ZmLWVjNTYyMjc1YWIzOCIsImFjciI6IjEiLCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJncG8tc2NvcGUgcHJvZmlsZSBlbWFpbCIsInNpZCI6IjMyMWFhMGY4LTA1ZGMtNGY1Ni1iN2ZmLWVjNTYyMjc1YWIzOCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWdwbyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJBRE1JTiJdLCJuYW1lIjoiR29uY2FsbyBOdW5lcyIsInJlc291cmNlcyI6W3siYWN0aXZlIjp0cnVlLCJpZGVudGlmaWVyIjoyMX0seyJhY3RpdmUiOnRydWUsImlkZW50aWZpZXIiOjIwfSx7ImFjdGl2ZSI6dHJ1ZSwiaWRlbnRpZmllciI6NjZ9XSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZ2l2ZW5fbmFtZSI6IkdvbmNhbG8iLCJwcm9jZXNzb3IiOiJFUE1TIiwiZmFtaWx5X25hbWUiOiJOdW5lcyIsInVzZXJJZCI6ImJhMzVlZTUzLTE5NjktNDBlMS04MGIwLTFiNTQzZGU0NjE5OSIsImVtYWlsIjoiZ29uY2Fsby5udW5lc0BzaWJzLnB0IiwiZW5hYmxlZCI6dHJ1ZX0.aGL16WmC-Vh5q9-_20A-x_m2UPCzaQ22ikpGED10iqunycjJH8widztRnMQe95uvXWCQwohd2Yu_lwydkr3nFPs4CGNoz0ROLN8rs2jn0cJzOHw30v7MCcB5XNWrp8-ha3dYUAz_SPK0mZmhECja8aUQTUZ6PPZCEzNdJEMp5c_r25PrwIzevgDu5z-g2ulh9EL6C4mIo-7wSuXpDi5I6CA0PntgBdtCqo-jhlmwlN9cwc40lxadMeNmAsVKbrGqXURX7Wn5V0zikxlfREZV6sr4rPzDKvMxWN4iJHJk-QkBQlptcECcry9B_XVKZ56XhIBcoTerIU2SYyRXNtXWjA`; // ToDo Need to make dynamic

/* axiosClient.defaults.headers.common[tokenType] = bearerToken;*/
/* axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
axiosClient.defaults.headers.common['Accept'] = 'application/json'; */

//All request will wait 20 seconds before timeout
axiosClient.defaults.timeout = 20000;

axiosClient.interceptors.request.use(
    (config: any) => {
        const tokenSession = sessionStorage.getItem('token');
        const token = JSON.parse(tokenSession ? tokenSession : '');

        if (token.access_token) {
            config.headers.Authorization = `Bearer ${token.access_token}`;
        }
        return config;
    },
    (error) => {
        console.log('Axios-request-interceptor-err:', error);
        Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (response) => {
        console.log('Axios-response-interceptor-resp:', response);
        return response;
    },
    function (error) {
        console.log('Axios-response-interceptor-err:', error);
        const tokenSession = sessionStorage.getItem('token');
        const token = JSON.parse(tokenSession ? tokenSession : '');
        const userInfo = decodeToken(token.access_token) as any;
        const originalRequest = error.config;
        if (error.response.status === '401') {
            //&& !originalRequest._retry
            originalRequest._retry = true;
            const bodyParams = {
                grantType: GrantTokenImplementationGrantTypeEnum.REFRESH,
                clientId: window.KEYCLOAK_CLIENT_ID,
                clientSecret: window.KEYCLOAK_CLIENT_SECRET,
                userEmail: userInfo?.email,
                refreshToken: token.refresh_token,
            };

            apiTokens.createTokenInfo(bodyParams).then((resp) => {
                if (resp.status === 201) {
                    sessionStorage.setItem('token', resp.data as any);
                    if (token) {
                        originalRequest.headers.Authorization = `Bearer ${resp.data.accessToken}`;
                    }

                    return axios(originalRequest);
                }
            });
        }
    },
);

//axiosClient.defaults.withCredentials = true;

// Configuration and base path are not provided
const apiMerchant = new MerchantsApi(undefined, '/api', axiosClient);
const apiPointsOfSale = new PointsOfSaleApi(undefined, '/gpo', axiosClient);
const apiSupervisors = new SupervisorsApi(undefined, undefined, axiosClient);
const apiTransactions = new TransactionsApi(undefined, undefined, axiosClient);
const apiPeriods = new PeriodsApi(undefined, undefined, axiosClient);
const apiTokens = new TokenApi(undefined, '/gpo', axiosClient); // To Use;
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
