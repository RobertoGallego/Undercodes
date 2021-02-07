import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    // Navigation style
    headerToolbar: {
        margin: 0,
        padding: 0
    },
    headerContainer: {
        marginBlock: theme.spacing(3),
        '@media (max-width: 414px)': {
            marginBlock: theme.spacing(1),
        },
    },
    headerTitle: {
        marginLeft: theme.spacing(1),
    },
    headerFontTitle: {
        "&:hover": {
            textDecoration: "none",
            color: "#777777",
        },
    },
    headerMenuIcon: {
        color: "#000",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        marginRight: theme.spacing(1),
        boxShadow: '2px 2px 10px 0 rgba(0,0,0,0.2)',
        "&:hover": {
            textDecoration: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(5),
        fontSize: 14,
        "&:hover": {
            textDecoration: "none",
            color: "#777777",
        },
        "@media (max-width: 600px)": {
            fontSize: 14,
            // fontWeight: 700,
            marginRight: theme.spacing(2),
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
        fontSize: 16,
        "&:hover": {
            textDecoration: "none",
        },
    },
}));

export default useStyles;