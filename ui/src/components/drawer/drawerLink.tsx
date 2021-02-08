import React from "react";
import { Link } from "react-router-dom";

import { Typography, List, ListItem, Grid, Box } from "@material-ui/core";

import useStyles from "assets/styles/navigation";

interface Props {
    urlTo: string,
    buttonName: any
}

const DrawerLink = (props: Props) => {
    const { urlTo, buttonName } = props;
    const styles = useStyles();

    return (
        <Grid>
            <List 
                // style={{background: "blue"}}
            >
                <ListItem className={styles.wrapperCenter} button>
                    {/* <ListItemIcon> <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <Typography component="div" color="primary" variant="button" gutterBottom>
                        <Link className={styles.wrapperButtonHover} to={urlTo}>
                            <Box className={styles.wrapperButtonMain} color="text.primary">
                                {buttonName}
                            </Box>
                        </Link>
                    </Typography>
                </ListItem>
            </List>
        </Grid>
    )
}

export default DrawerLink;
