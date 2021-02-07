import React, { ReactNode } from 'react'

import { Grid, IconButton, Link } from '@material-ui/core';

import useStyles from "assets/styles/main";

interface Props {
    iconComponent: ReactNode;
    urlTo: string;
}

const SocialIcon = (props: Props) => {

    const styles = useStyles();

    return (
        <Grid>
            <IconButton size="small" className={styles.homeIconButton}>
                <Link href={props.urlTo} color="secondary">
                    {props.iconComponent}
                </Link>
            </IconButton>
        </Grid>
    )
}

export default SocialIcon;
