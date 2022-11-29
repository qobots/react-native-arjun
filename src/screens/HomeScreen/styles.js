import { COLORS, FONTS, SIZES } from '@app/constants/themes';

import { StyleSheet } from 'react-native'
import { scaling } from '@app/constants/scaling';

const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1
    },
    contentContainerStyle: {
        paddingHorizontal: scaling(SIZES.base * 2)
    },
    itemContainer: (isFirst) => ({
        marginTop: isFirst ? scaling(SIZES.base * 2) : 0,
        marginBottom: scaling(SIZES.base * 2)
    }),
    createOptionWrapper: {
        paddingHorizontal: scaling(SIZES.base * 2)
    }
})

export default styles;