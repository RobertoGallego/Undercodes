import * as actionTypes from "redux/action/types";

export function themeSettings(option: ThemeSetting) {    
    const action: ThemeAction = {
        type: actionTypes.DARK_MODE,
        option
    };

    return action;
}