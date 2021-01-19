import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "../../assets/styles/navigation";

interface Props {

}

const Navigation = (props: Props) => {
    const styles = useStyles(props);

    return (
        <div>
            <Button color="primary" variant="contained">Default</Button>
            <p className={ styles.text }>Menu</p>
        </div>
    )
}

export default Navigation;
