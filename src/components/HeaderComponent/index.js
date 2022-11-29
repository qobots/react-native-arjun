import { COLORS, FONTS, SIZES } from '@app/constants/themes'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { scaling } from '@app/constants/scaling'

const HeaderComponent = ({ label, position = 'center', ...props }) => {
    return (
        <View style={{ ...styles.wrapperStyle, ...props.wrapperStyle }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.labelTextStyle(position)}>{label}</Text>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    wrapperStyle: {
        height: scaling(60),
        borderBottomWidth: 1,
        borderColor: COLORS.borderTwo,
        paddingHorizontal: scaling(SIZES.base * 3),
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelTextStyle: (position) => ({
        ...FONTS.body2,
        color: COLORS.black,
        textAlign: position,
        fontSize: scaling(16),
    })
})