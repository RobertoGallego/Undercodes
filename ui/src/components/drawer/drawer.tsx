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
        <Grid className={styles.root} >
            <Grid>
                <DrawerLink urlTo={"/"} buttonName={"Home"} />
                <DrawerLink urlTo={"/videos"} buttonName={"Videos"} />
                <DrawerLink urlTo={"/articles"} buttonName={"Articles"} />
                <DrawerLink urlTo={"/new-video"} buttonName={"Create a new video"} />
                <Grid className={styles.wrapperCenter}>
                    <ListItem button >
                        <Grid className={styles.wrapperCenter}>
                            <IconButton size="small" color="primary" className={styles.wrapperIconEffect}>
                                <KeyboardArrowUpIcon/>
                            </IconButton>
                        </Grid>
                    </ListItem>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Drawer;