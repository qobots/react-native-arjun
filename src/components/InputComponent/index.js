import { COLORS, FONTS, SIZES } from '@app/constants/themes'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'
import { scaling } from '@app/constants/scaling'

const InputComponent = ({ onPress, error = false, ...props }) => {
    return (
        <View style={[styles.container, props.container]}>
            {props.label && <Text style={[styles.labelTextStyle, props.labelTextStyle]}>{props.label}</Text>}
            <View style={[styles.inputContainer(error), props.inputContainer]}>
                {props.prepIcon}
                <TextInput
                    placeholderTextColor={COLORS.placeholderColorTwo}
                    style={[styles.inputStyle, props.inputStyle]}
                    returnKeyType={'done'}
                    {...props}
                />
                {props.appendIcon}
            </View>
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
        marginTop: scaling(SIZES.base * 2),
    },
    labelTextStyle: {
        ...FONTS.body2,
        color: COLORS.black,
        fontSize: scaling(16),
        lineHeight: scaling(19)
    },
    inputContainer: (error) => ({
        paddingHorizontal: scaling(SIZES.base * 2),
        borderWidth: 1,
        borderColor: error ? COLORS.error : COLORS.borderTwo,
        borderRadius: scaling(SIZES.base),
        marginTop: scaling(SIZES.base),
        flexDirection: 'row',
        alignItems: 'center',
        height: scaling(46)
    }),
    inputStyle: {
        ...FONTS.body4,
        flex: 1,
        color: COLORS.black,
        fontSize: scaling(14),
        lineHeight: scaling(17)
    }
})