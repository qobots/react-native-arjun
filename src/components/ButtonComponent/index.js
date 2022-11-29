import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '@app/constants'

import React from 'react'
import { scaling } from '@app/constants/scaling'

const ButtonComponent = (props) => {
    return (
        <Pressable
            style={{ ...styles.buttonContainer, ...props.buttonContainer }}
            onPress={() => props.onPress()}
            disabled={props.loading || props.editable}>
            {
                props.loading ?
                    <ActivityIndicator color={props.color} size={props.size} />
                    :
                    <Text style={{ ...styles.buttonLabelStyle, ...props.buttonLabelStyle }}>{props.label}</Text>
            }
        </Pressable>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: COLORS.buttonColor,
        borderRadius: scaling(SIZES.base),
        marginVertical: scaling(SIZES.base * 2),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: scaling(45),
    },
    buttonLabelStyle: {
        ...FONTS.body1,
        textTransform: 'capitalize',
        color: COLORS.white,
        fontSize: scaling(14)
    }

})
