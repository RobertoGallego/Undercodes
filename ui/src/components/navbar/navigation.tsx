import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { themeSettings } from "redux/action/creators";

import { 
    AppBar, 
    Toolbar,
    Typography, 
    Hidden,
    IconButton, 
    Drawer, 
    Switch,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { CSSTransition } from "react-transition-group"

import DrawerMenu from "components/drawer/drawer";
import Menu from "components/navbar/menu";

import useStyles from "assets/styles/navigation";

interface Props {
}

const Navigation = (props: Props) => {
    const [drawerSwitch, setdrawerSwitch] = useState(false);
    const [checked, setChecked] = React.useState(false);

    const dispatch: Dispatch<any> = useDispatch();
    const switchTheme = (state: ThemeState) => state.options[0].switchTheme;
    const themeSetting = useSelector(switchTheme);

    const nodeRef = React.useRef(null);
    const styles = useStyles(props);
    
    const toggleDrawer = (open: boolean) => (event: any) => { 
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setdrawerSwitch(open);
    };

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
        <nav className={styles.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={styles.title}>
                        News
                    </Typography>
                    <Hidden xsDown>
                        <Menu/>
                        <Switch checked={themeSetting} onClick={toggleChecked}/>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton onClick={toggleDrawer(true)} edge="end" className={styles.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <CSSTransition nodeRef={nodeRef} in timeout={200} classNames="fade">
                        <div ref={nodeRef}>
                            <Drawer
                                anchor={"top"}
                                open={drawerSwitch}
                                onClose={toggleDrawer(false)}
                            >
                                <div  
                                    role="presentation" 
                                    onClick={toggleDrawer(false)}
                                    onKeyDown={toggleDrawer(false)}
                                >
                                    <DrawerMenu/>
                                </div>
                            </Drawer>
                        </div>
                    </CSSTransition>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

export default Navigation;
