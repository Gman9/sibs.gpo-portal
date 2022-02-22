export {};

declare global {
    interface Window {
        KEYCLOAK_BASE_URL: string;
        KEYCLOAK_CLIENT_ID: string;
        KEYCLOAK_CLIENT_SECRET: string;
        KEYCLOAK_GRANT_TYPE: string;
        WICKET_BASE_URL: string;
        GPO_PORTAL_CLIENT_ID: string;
        GPO_PORTAL_CLIENT_SECRET: string;
        GPO_PORTAL_USER_EMAIL: string;
    }
}
