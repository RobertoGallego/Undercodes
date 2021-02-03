import React from 'react'
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { themeSettings } from "redux/action/creators";

import { 
    Switch,
    Grid,
} from "@material-ui/core";

const Footer = () => {
    const [checked, setChecked] = React.useState(false);
    const dispatch: Dispatch<any> = useDispatch();
    const switchTheme = (state: ThemeState) => state.options[0].switchTheme;
    const themeSetting = useSelector(switchTheme);

    const toggleChecked = (event: any) => { 
        // event.preventDefault()
        setChecked((prev) => !prev);        
        
        if (checked) {
            dispatch(themeSettings({switchTheme: false}));
        } else {
            dispatch(themeSettings({switchTheme: true}));
        }
    }

    return (
        <Grid>
            <Switch size="small" checked={themeSetting} onClick={toggleChecked}/>
        </Grid>
    )
}

export default Footer;
