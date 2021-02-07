import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBlock: theme.spacing(3),
    },
    footerContainerLeft: {
        marginLeft: theme.spacing(1),
    },
    footerContainerRight: {
        marginRight: theme.spacing(1),
        color: "#000",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: '2px 2px 10px 0 rgba(0,0,0,0.2)',
    },
}));

export default useStyles;
