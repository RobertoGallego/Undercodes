interface ThemeSetting {
    switchTheme: boolean;
}

type ThemeState = {
    options: ThemeSetting[];
};

type ThemeAction = {
    type: string;
    option: ThemeSetting;
};

type DispatchType = (args: ThemeAction) => ThemeAction;