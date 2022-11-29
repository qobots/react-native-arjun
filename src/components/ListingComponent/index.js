import { COLORS, FONTS, SIZES } from '@app/constants/themes'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { scaling } from '@app/constants/scaling'

const ListingComponent = ({ item, ...props }) => {
    return (
        <View style={styles.wrapperStyle}>
            <Text style={styles.nameTextStyle}>{item?.name}</Text>
            <Text style={styles.commTextStyle}>{item?.email}</Text>
            <Text style={styles.commTextStyle}>{item?.phone}</Text>
        </View>
    )
}

export default ListingComponent

const styles = StyleSheet.create({
    wrapperStyle: {
        padding: scaling(SIZES.base * 2),
        borderWidth: 1,
        borderColor: COLORS.borderTwo,
        borderRadius: scaling(SIZES.base)
    },
    nameTextStyle: {
        ...FONTS.body1,
        fontSize: scaling(20),
        color: COLORS.primary,
        lineHeight: scaling(28),
        textTransform: 'capitalize'
    },
    commTextStyle: {
        ...FONTS.body4,
        fontSize: scaling(12),
        color: COLORS.primary,
        lineHeight: scaling(24)
    }
})