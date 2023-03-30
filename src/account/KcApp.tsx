import "./KcApp.css";
import type { KcContext } from "./kcContext";
import KcAppBase from "keycloakify/account";
import Template from "keycloakify/account/Template";
import { useI18n } from "./i18n";

export type Props = {
    kcContext: KcContext;
};

export default function KcApp(props: Props) {
    const { kcContext } = props;

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
                "kcBodyClass": "h"
            }}
            doUseDefaultCss={true}
        />
    );
}
