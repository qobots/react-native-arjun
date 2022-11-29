import { COLORS, FONTS, SIZES } from '@app/constants/themes'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const InputComponent = ({ isPicker = false, onPress, error = false, ...props }) => {
    return (
        <View style={[styles.container, props.container]}>
            {props.label && <Text style={[styles.labelTextStyle, props.labelTextStyle]}>{props.label}</Text>}

            {
                isPicker === true ?
                    <Pressable
                        onPress={() => onPress()}
                        style={[styles.inputContainer(error), props.inputContainer]}>
                        {props.prepIcon}
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.inputStyle,
                                props.inputStyle,
                                { color: props?.value ? COLORS.black : COLORS.placeholderColorTwo, marginLeft: 3 }]}>
                            {props?.value ? props?.value : props?.placeholder}
                        </Text>
                        {props.appendIcon}
                    </Pressable>
                    :
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
            }
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.base * 2.7,
    },
    labelTextStyle: {
        ...FONTS.body2,
        color: COLORS.black,
        fontSize: 16,
        lineHeight: 19.5
    },
    inputContainer: (error) => ({
        paddingHorizontal: SIZES.base * 2,
        borderWidth: 1,
        borderColor: error ? COLORS.error : COLORS.borderThree,
        borderRadius: 6,
        marginTop: SIZES.base,
        flexDirection: 'row',
        alignItems: 'center',
        height: 46
    }),
    inputStyle: {
        ...FONTS.body4,
        flex: 1,
        color: COLORS.black,
        fontSize: 14,
        lineHeight: 17.07
    }
})