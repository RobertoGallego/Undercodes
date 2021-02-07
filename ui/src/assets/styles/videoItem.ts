import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    videoCard: {
        color: "orange",
        background: "#522222",
        "&:hover": {
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