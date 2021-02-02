import React from "react";
import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import useStyles from "assets/styles/navigation";

interface Props {
}

const Menu = (props: Props) => {
    const styles = useStyles();

    return (
        <div>
            <Typography color="primary" variant="button" display="block" gutterBottom>
                <Link color="inherit" className={styles.menuButton} to="/">Home</Link>
                <Link color="inherit" className={styles.menuButton} to="/videos">Videos</Link>
                <Link color="inherit" className={styles.menuButton} to="/articles">Article</Link>
                <Link color="inherit" className={styles.menuButton} to="/new-video">Create a New Video</Link>
            </Typography>
        </div>
    )
}

export default Menu
