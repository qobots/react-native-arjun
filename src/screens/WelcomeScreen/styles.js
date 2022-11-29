import { COLORS, FONTS, SIZES } from '@app/constants/themes';

import { StyleSheet } from 'react-native'
import { scaling } from '@app/constants/scaling';

const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        ...FONTS.body0,
        fontSize: scaling(22),
        color: COLORS.primary
    }
})

export default styles;