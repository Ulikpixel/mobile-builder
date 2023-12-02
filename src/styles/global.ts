import { CONFIG_STYLES } from 'constants/theme';
import { setCustomText } from 'react-native-global-props'

const defaultTextStyle = {
  style: {
    fontSize: 14,
    color: CONFIG_STYLES.colors['organick-dark'],
    lineHeight: 17,
    fontFamily: 'open-sans'
  }
};

export const setGloblalStyle = () => {
  setCustomText(defaultTextStyle)
}
