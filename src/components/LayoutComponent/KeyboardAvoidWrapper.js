import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react'

const KeyboardAvoidWrapper = props => {
    return (
        <KeyboardAwareScrollView
            keyboardDismissMode='on-drag'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            {...props}
        >
            {props.children}
        </KeyboardAwareScrollView>
    )
}

export default KeyboardAvoidWrapper