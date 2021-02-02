import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        textDecoration: 'none'
    },
    text: {
        // backgroundColor: "red",
        color: "blue",
    },
    text2: {
        color: "red"
    }
}));

export default useStyles;