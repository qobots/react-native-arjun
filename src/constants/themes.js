import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#444444',
    buttonColor: '#222222',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    borderTwo: '#E8E8E8',
    error: 'red'
};

export const SIZES = {
    base: 8,
    body1: 24,
    body2: 18,
    body3: 16,
    body4: 14,
    body5: 12,
    width,
    height,
};

export const FONTS = {
    body0: { fontFamily: 'Montserrat Bold', fontSize: SIZES.body1 },
    body1: { fontFamily: 'Montserrat SemiBold', fontSize: SIZES.body1 },
    body2: { fontFamily: 'Montserrat Medium', fontSize: SIZES.body2 },
    body3: { fontFamily: 'Montserrat Medium', fontSize: SIZES.body3 },
    body4: { fontFamily: 'Montserrat Regular', fontSize: SIZES.body4 },
    body5: { fontFamily: 'Montserrat Regular', fontSize: SIZES.body5 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
