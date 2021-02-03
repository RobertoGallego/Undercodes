import React from "react";

import { Typography, List, ListItem, Grid } from "@material-ui/core";
import Link from '@material-ui/core/Link';

import useStyles from "assets/styles/navigation";

interface Props {
    urlTo: string,
    buttonName: string 
}

const DrawerLink = (props: Props) => {
    const { urlTo, buttonName } = props;
    const styles = useStyles();

    return (
        <Grid>
            <List>
                <ListItem button className={styles.wrapperCenter}>
                    {/* <ListItemIcon> <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <Typography color="primary" variant="button" gutterBottom>
                        <Link className={styles.wrapperButton} href={urlTo}>{buttonName}</Link>
                    </Typography>
                </ListItem>
            </List>
        </Grid>
    )
}

export default DrawerLink;
