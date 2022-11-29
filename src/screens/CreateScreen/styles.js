import { COLORS, FONTS, SIZES } from '@app/constants/themes';

import { StyleSheet } from 'react-native'
import { scaling } from '@app/constants/scaling';

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: scaling(SIZES.base * 2)
    },
    labelTextStyle: (isError) => ({
        ...FONTS.body2,
        color: isError ? COLORS.error : COLORS.primary,
        fontSize: scaling(14),
        lineHeight: scaling(17)
    }),
    createOptionWrapper: {
        marginTop: scaling(SIZES.base * 2)
    }
})

export default styles;