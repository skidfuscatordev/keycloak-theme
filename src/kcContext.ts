import { getKcContext } from "keycloakify/lib/getKcContext";

export const { kcContext } = getKcContext({
    /* Uncomment to test the login page with mock data */
    "mockPageId": "webauthn-authenticate.ftl",
    "mockData": [
        {
            "pageId": "login.ftl",
            "locale": {
                "currentLanguageTag": "en", //When we test the login page we do it in french
            },
        },
    ],
});

export type KcContext = NonNullable<typeof kcContext>;
