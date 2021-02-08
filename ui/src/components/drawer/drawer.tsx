import React from "react"

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Grid, ListItem } from "@material-ui/core";

import DrawerLink from "components/drawer/drawerLink";
import useStyles from "assets/styles/navigation";

interface Props {
}

const Drawer = (props: Props) => {
    const styles = useStyles(props);

    return (
        <Grid className={styles.root}>
            <Grid>
                <DrawerLink urlTo={"/"} buttonName={"Home"} /> 
                <DrawerLink urlTo={"/about"} buttonName={"About"} /> 
                <DrawerLink urlTo={"/portfolio"} buttonName={"Portfolio"} />
                <DrawerLink urlTo={"/contact"} buttonName={"Contact"} />
                {/* <DrawerLink urlTo={"/videos"} buttonName={"Videos"} />
                <DrawerLink urlTo={"/new-video"} buttonName={"Create a new video"} /> */}
                <Grid>
                    <ListItem className={styles.wrapperIcon}>
                        <IconButton size="small" color="primary" className={styles.wrapperCenter} >
                            <KeyboardArrowUpIcon/> 
                        </IconButton>
                    </ListItem>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Drawer;