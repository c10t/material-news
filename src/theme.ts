import { createMuiTheme, Theme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme: Theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  }
})

export default theme
