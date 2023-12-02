import { DefaultTheme } from "styled-components";

export const CONFIG_STYLES = {
  colors: {
    'organick-blue-dark': '#274C5B',
    'organick-green': '#7EB693',
    'organick-yellow': '#EFD372',
    'organick-grey': '#D4D4D4',
    'organick-white': '#F9F8F8',
    'organick-green-white': '#EFF6F1',
    'organick-dark': '#525C60',
    'organick-special-green': '#68A47F',
    'organick-line-grey': '#DEDDDD',
    'default-white': '#FFFFFF',
    'organick-price-grey': '#B8B8B8',
    'grey-menu': '#f2f0f0',
    'green-opacity': '#F1F8F4'
  },
  heading: {
    'level-1': '40px',
    'level-2': '35px',
    'level-3': '30px',
    'level-4': '25px',
    'level-5': '20px',
    'level-6': '16px',
  },
} as const;

export interface IConfigStyles extends DefaultTheme {
  colors: typeof CONFIG_STYLES.colors;
  heading: typeof CONFIG_STYLES.heading;
}