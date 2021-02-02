import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows";

const darkTheme = () =>
      createMuiTheme({
        palette: {
          type: 'dark',
        },
        shadows: Array(25).fill("none") as Shadows
      });

export default darkTheme;
