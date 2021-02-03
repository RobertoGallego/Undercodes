import React, { useState } from "react";

import { 
    AppBar, 
    Toolbar,
    Typography, 
    Hidden,
    IconButton, 
    Drawer, 
    Grid,
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

    const nodeRef = React.useRef(null);
    const styles = useStyles(props);
    
    const toggleDrawer = (open: boolean) => (event: any) => { 
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setdrawerSwitch(open);
    };

    return (
        <Grid className={styles.root}>
            <AppBar position="static" elevation={0} color="transparent">
                <Toolbar>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Typography variant="h6" className={styles.title}>
                            UNDERCODES
                        </Typography>
                        <Hidden xsDown>
                            <Menu/>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton 
                                onClick={toggleDrawer(true)} 
                                edge="end" 
                                className={styles.menuButton}
                                aria-label="menu"
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                    </Grid>
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
        </Grid>
    );
}

export default Navigation;
