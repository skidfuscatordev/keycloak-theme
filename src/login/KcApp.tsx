import "./KcApp.css";
import type { KcContext } from "./kcContext";
import KcAppBase, { useDownloadTerms } from "keycloakify/login";
import Template from "keycloakify/login/Template";
import tos_en_url from "./assets/tos_en.md";
import { useI18n } from "./i18n";

export type Props = {
    kcContext: KcContext;
};

export default function KcApp(props: Props) {
    const { kcContext } = props;

    useDownloadTerms({
        kcContext,
        "downloadTermMarkdown": async ({ currentLanguageTag }) => {
            const markdownString = await fetch(
                (() => {
                    switch (currentLanguageTag) {
                        default:
                            return tos_en_url;
                    }
                })(),
            ).then(response => response.text());

            return markdownString;
        },
    });

    const i18n = useI18n({
        kcContext
    });

    //NOTE: Locale not yet downloaded
    if (i18n === null) {
        return null;
    }

    return (
        <KcAppBase
            // @ts-expect-error fucked up types
            Template={Template}
            kcContext={kcContext}
            i18n={i18n}
            classes={{
                "kcHtmlClass": "login-pf kc",
                "kcHeaderClass": "hide",
                "kcFormCardClass": "card",
            }}
            doUseDefaultCss={true}
        />
    );
}
