import React, { useState } from "react";

import { 
    AppBar, 
    Toolbar,
    Typography, 
    IconButton, 
    Drawer, 
    Grid,
    Link,
} from "@material-ui/core";

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { CSSTransition } from "react-transition-group"

import DrawerMenu from "components/drawer/drawer";
// import Menu from "components/navbar/menu";

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
                <Toolbar className={styles.headerToolbar}>
                    <Grid className={styles.headerContainer} container>
                        <Grid sm={1} md={1} lg={2} xl={3} />
                        <Grid 
                            container justify="space-between" alignItems="center"
                            xs={12} sm={10} md={10} lg={8} xl={6}
                        >
                            <Typography variant="h6" className={styles.headerTitle}>
                                <Link className={styles.headerFontTitle} href="/">
                                    UNDERCODES
                                </Link>
                            </Typography>
                            {/* <Hidden xsDown>
                                <Menu/>
                            </Hidden> */}
                            {/* <Hidden xsUp> */}
                            <IconButton 
                                onClick={toggleDrawer(true)} 
                                className={styles.headerMenuIcon}
                                aria-label="menu"
                            >
                                <MenuRoundedIcon/>
                            </IconButton>
                        </Grid>
                        <Grid sm={1} md={1} lg={2} xl={3} />
                        {/* </Hidden> */}
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
