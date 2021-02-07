import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    rootSlider: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        '@media (min-width: 960px)': {
            alignItems: "flex-end",
        },
    },
    homeSocialIcons: {
        marginBlock: theme.spacing(1),
        "&:hover": {
            color: "#777777"
        },
    },
    homeSocialIconPosition: {
        '@media (min-width: 1280px)': {
            alignItems: "flex-end"
        },
    },
    homeIconButton: {
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    topSliderfirstTitle: {
        fontWeight: 900,
    },
    topSlidersecondTitle: {
        marginBlock: theme.spacing(2),
        fontWeight: 500,
    },
    TopSliderImage: {
        '@media (max-width: 414px)': {
            display: "none"
        },
    },
    TopSliderImageMobileDevice: {
        display: "none",
        '@media (max-width: 414px)': {
            display: "block",
            marginBlockStart: theme.spacing(3),
        },
    },
    topSliderthirdTitle: {
        fontWeight: 400,
    },
    bottomSliderTitle: {
        marginBlockEnd: theme.spacing(1),
        marginBlockStart: theme.spacing(5),
        fontWeight: 500,
        '@media (max-width: 414px)': {
            marginBlockStart: theme.spacing(3),
        },
    },
    bottomSliderText: {
        fontWeight: 500,
        textAlign: "right",
        '@media (max-width: 414px)': {
            display: "none",
        }
    },
    bottomSliderTextMobile: {
        display: "none",
        '@media (max-width: 414px)': {
            display: "block",
            fontWeight: 500,
            textAlign: "right",
        },
    }
}));

export default useStyles;

// #f96566#777777#252525#ffffff#ededed#000000#494949