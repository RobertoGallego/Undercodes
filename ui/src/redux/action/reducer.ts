import * as actionTypes from "redux/action/types";

const initialState: ThemeState = {
    options: [
        {
            switchTheme: false
        }
    ]
};

const reducer = (
    state: ThemeState = initialState,
    action: ThemeAction
): ThemeState => {
    switch (action.type) {
        case actionTypes.DARK_MODE:
            const switchMode: ThemeSetting = {
                switchTheme: action.option.switchTheme
            };
            return {
                ...state,
                options: [switchMode]
            }
        }
    return state;
};

export default reducer;