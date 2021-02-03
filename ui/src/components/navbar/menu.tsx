import React from "react";

import { Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';

import useStyles from "assets/styles/navigation";

interface Props {
}

const Menu = (props: Props) => {
    const styles = useStyles();

    return (
        <div>
            <Typography color="primary" variant="button" gutterBottom>
                <Link className={styles.menuButton} href="/">Home</Link>
                <Link className={styles.menuButton} href="/videos">Videos</Link>
                <Link className={styles.menuButton} href="/new-video">Create a New Video</Link>
            </Typography>
        </div>
    )
}

export default Menu
