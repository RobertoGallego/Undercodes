import React from "react";

import { Link } from "react-router-dom";

import { Typography, List, ListItem } from "@material-ui/core";

interface Props {
    urlTo: string,
    buttonName: string 
}

const drawerLink = (props: Props) => {
    const { urlTo, buttonName } = props;

    return (
        <div>
            <List>
                <ListItem button>
                    {/* <ListItemIcon> <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                    <Typography color="primary" variant="button" display="block" gutterBottom>
                        <Link color="inherit" className={""} to={urlTo}>{buttonName}</Link>
                    </Typography>
                </ListItem>
            </List>
        </div>
    )
}

export default drawerLink;
