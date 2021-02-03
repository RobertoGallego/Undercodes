import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    // Navigation style
    title: {
        marginLeft: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            textDecoration: "none",
            color: "#777777",
        },
    },
    // Wrapper style
    wrapperCenter: {
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    wrapperIconEffect: {
        "&:hover": {
            backgroundColor: "transparent"
        },
    },
    wrapperButton: {
        marginRight: theme.spacing(2),
        "&:hover": {
            textDecoration: "none",
        },
    },
}));

export default useStyles;