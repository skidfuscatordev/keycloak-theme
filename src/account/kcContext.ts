import { getKcContext } from "keycloakify/account";

export const { kcContext } = getKcContext({
    /* Uncomment to test the login page with mock data */
    "mockPageId": "account.ftl",
    "mockData": [
        {
            "pageId": "account.ftl",
            "locale": {
                "currentLanguageTag": "en", //When we test the login page we do it in french
            },
        },
    ],
});

export type KcContext = NonNullable<typeof kcContext>;
