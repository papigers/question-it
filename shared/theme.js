import {
  redA700, red900,
  amber700, amber400,
  grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: redA700,
    primary2Color: red900,
    primary3Color: grey400,
    accent1Color: amber700,
    accent2Color: amber400,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: redA700,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  chartColors: [
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#990099',
    '#3B3EAC',
    '#0099C6',
    '#DD4477',
    '#66AA00',
    '#B82E2E',
    '#316395',
    '#994499',
    '#22AA99',
    '#AAAA11',
    '#6633CC',
    '#E67300',
    '#8B0707',
    '#329262',
    '#5574A6',
    '#3B3EAC',
  ],
};
