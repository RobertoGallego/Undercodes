import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme)=> ({
    root: {
        flexGrow: 1,
    },
    portfolioTopContainer: {
        // backgroundColor: "green",
    },
    portfolioTopLeftText: {
        marginInline: theme.spacing(3),
        // backgroundColor: "green",
        color: "Black",
        fontWeight: 500
    },
    portfolioTopRightText: {
        marginInline: theme.spacing(3),
        // backgroundColor: "green",
        color: "Black",
        fontWeight: 500
    },
    portfolioBottomContainer: {
        marginBlockStart: theme.spacing(2),
        '@media (max-width: 600px)': {
            marginBlockStart: theme.spacing(1),
        },
    },
    portfolioCardContainer: {
        marginBlockStart: theme.spacing(2),
        marginInline: theme.spacing(1),
        '@media (max-width: 600px)': {
            marginBlockStart: theme.spacing(1),
        },
    },
    CardContainerAction: {
        zindex: 40,
        cursor: "pointer",
        width: 335,
        marginTop: "-10%",
        transitionDuration: "0.1s",

    },
    CardContainerFirstAction: {
        zindex: 30,
        transitionDuration: "0.1s",
    },
    CardContainerSecondAction: {
        zindex: 30,
        transitionDuration: "0.1s",
        backgroundColor: "#f96566",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 345,
        paddingBlock: 10,
    }
}));

export default useStyles;
