import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    videoCard: {
        color: "orange",
        // border: "1px solid green",
        background: "#522222",
        "&:hover": {
            // border: "1px, solid, #255AAA"
            border: "3px",
            borderColor: "blue",
            borderStyle: "solid"
        },
        display: "flex", 
        justifyContent: "center", 
        backgroundColor: "#f2f2f2", 
        padding: "30px", 
        margin: "10px" 
    },
})); 

export default useStyles;