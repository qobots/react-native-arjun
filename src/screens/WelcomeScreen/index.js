import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import SafeAreaWrapper from '@app/components/LayoutComponent/SafeAreaWrapper'
import icons from '@app/constants/icons'
import locale from '@app/constants/locale'
import screens from '@app/navigations/screens'
import styles from './styles'

const WelcomeScreen = ({ navigation }) => {

    useEffect(() => {
        // navigation to home screen
        setTimeout(() => {
            navigation.navigate(screens.HOME_SCREEN)
        }, 3000);
    }, [])

    return (
        <SafeAreaWrapper>
            <View style={styles.wrapperStyle}>
                <Text style={styles.textStyle}>{locale.APP_NAME}</Text>
            </View>
        </SafeAreaWrapper>
    )
}

export default WelcomeScreen

